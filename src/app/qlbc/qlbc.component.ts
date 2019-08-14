import { Component, OnInit } from '@angular/core';
import { CrudProduct } from '../service/firestore/product';
import { CrudReport } from '../service/firestore/reports';
import { CrudUser } from '../service/firestore/users';
import { Notification} from '../service/firestore/notification';


@Component({
  selector: 'app-qlbc',
  templateUrl: './qlbc.component.html',
  styleUrls: ['./qlbc.component.css']
})
export class QlbcComponent implements OnInit {
  p:any;
  public products: any;
  public users: any;
  public reports: any;
  constructor(
    private crudProduct: CrudProduct,
    private crudUser: CrudUser,
    private crudReport: CrudReport,
    private notication: Notification
  ) { }
  
  filter: string;
  listReport : any;
  ngOnInit() {
    this.crudProduct.read_Products().subscribe(data => { 
      this.products = data.map(e => {
          return {
            id: e.payload.doc.id,
            tensp: e.payload.doc.data()['tensp'],
            img:e.payload.doc.data()['image'],
            date:e.payload.doc.data()['ngaytao'].toDate(),
            note:e.payload.doc.data()['mota'],
            user:e.payload.doc.data()['user']
          };
      })
    });
    this.crudReport.read_Reports().subscribe(data => { 
      this.reports = data.map(e => {
          return {
            id: e.payload.doc.id,
            content: e.payload.doc.data()['content'],
            masp:e.payload.doc.data()['masp'],
            ngaytocao:e.payload.doc.data()['ngaytocao'].toDate(),
            reporterid:e.payload.doc.data()['reporterid'],
            userid:e.payload.doc.data()['userid']
          };
      })
    });
    this.crudUser.read_Users().subscribe(data => { 
      this.users = data.map(e => {
          return {
            id: e.payload.doc.id,
            userid:e.payload.doc.data()['userID'],
            email:e.payload.doc.data()['email'],
            rating: e.payload.doc.data()['rating']
          };
      })
    });
    this.showReport();
    this.filter = "";
  }
  promise(ms){
   return new Promise(resolve => setTimeout(resolve,ms));
  }
  getReports(){
    this.listReport = [];
    var useremail = "";
    var reporteremail = "";
    var reporterrating;
    var dociduser ="";
    var docidreporter="";
    for(var i =0;i < this.reports.length;i++){
      for(var j =0;j<this.products.length;j++){
        if(this.reports[i].masp == this.products[j].id){
          for(var m = 0;m<this.users.length;m++){
            if(this.reports[i].userid == this.users[m].userid){
              useremail = this.users[m].email;
              dociduser=this.users[m].id;
            }
            if(this.reports[i].reporterid == this.users[m].userid){
              reporteremail = this.users[m].email;
              docidreporter=this.users[m].id;
              reporterrating=this.users[m].rating;
            }
          }
          this.listReport.push({
            img: this.products[j].img,
            tensp: this.products[j].tensp,
            mota: this.products[j].note,
            date: this.products[j].date,
            useremail: useremail,
            ngaytocao: this.reports[i].ngaytocao,
            reporteremail: reporteremail,
            content: this.reports[i].content,
            dociduser: dociduser,
            docidreporter: docidreporter,
            docidreport: this.reports[i].id,
            reporterrating: reporterrating
          })
        }
      }
    }
  }

  async showReport(){
    await this.promise(3000);
    await this.getReports();
  }

  confirmReport(dociduser,docidreport){
    var username;
    var message;
    let record={};
    record['blockAccount']=true;
    record['rating']=1;
    this.crudUser.update_Users(dociduser,record);
    this.crudReport.delete_Reports(docidreport);
    for(var m = 0;m<this.users.length;m++){
      if(this.users[m].id == dociduser){
        username = this.users[m].email;
      }
    }
    message = "Tài khoản "+username+" đã bị chặn khỏi ứng dụng vì vi phạm điều luật sử dụng !";
    this.notication.sendNotification("abort","Thông báo tài khoản vi phạm",message);
  }
  rejectReport(docidreporter,docidreport,reporterrating){
    let record={};
    var username;
    var message;
    if(reporterrating === 0 || reporterrating === 1){
      record['rating']=0;
      record['blockAccount']=true;
      for(var m = 0;m<this.users.length;m++){
        if(this.users[m].id == docidreporter){
          username = this.users[m].email;
        }
      }
      message = "Tài khoản "+username+" đã bị chặn khỏi ứng dụng vì tố cáo bài đăng với lý do không chính xác !";
      this.notication.sendNotification("abort","Thông báo tài khoản vi phạm",message);
    }else if(reporterrating >1){
      record['rating']=reporterrating-1;
    }
    this.crudUser.update_Users(docidreporter,record);
    this.crudReport.delete_Reports(docidreport);
  }
}