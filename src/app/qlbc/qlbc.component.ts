import { Component, OnInit } from '@angular/core';
import { CrudProduct } from '../service/firestore/product';
import { CrudReport } from '../service/firestore/reports';
import { CrudUser } from '../service/firestore/users';
import { resolve } from 'path';


@Component({
  selector: 'app-qlbc',
  templateUrl: './qlbc.component.html',
  styleUrls: ['./qlbc.component.css']
})
export class QlbcComponent implements OnInit {

  public products: any;
  public users: any;
  public reports: any;
  constructor(
    private crudProduct: CrudProduct,
    private crudUser: CrudUser,
    private crudReport: CrudReport
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
            userid:e.payload.doc.data()['userID'],
            email:e.payload.doc.data()['email']
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
    for(var i =0;i < this.reports.length;i++){
      for(var j =0;j<this.products.length;j++){
        if(this.reports[i].masp == this.products[j].id){
          for(var m = 0;m<this.users.length;m++){
            if(this.reports[i].userid == this.users[m].userid){
              useremail = this.users[m].email;
            }
            if(this.reports[i].reporterid == this.users[m].userid){
              reporteremail = this.users[m].email;
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
            content: this.reports[i].content
          })
        }
      }
    }
  }

  async showReport(){
    await this.promise(3000);
    await this.getReports();
  }
}