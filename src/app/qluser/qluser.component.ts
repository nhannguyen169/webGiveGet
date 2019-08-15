import { Component, OnInit } from '@angular/core';
import { CrudReport } from '../service/firestore/reports';
import { CrudUser } from '../service/firestore/users';
import { Notification} from '../service/firestore/notification';
@Component({
  selector: 'app-qluser',
  templateUrl: './qluser.component.html',
  styleUrls: ['./qluser.component.css']
})
export class QluserComponent implements OnInit {
  p:any;
  filter: string;
  public users: any;
  public reports: any;
  constructor(
    private crudUser: CrudUser,
    private crudReport: CrudReport,
    private notication: Notification
  ) { }

  ngOnInit() {
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
            userID: e.payload.doc.data()['userID'],
            email: e.payload.doc.data()['email'],
            username: e.payload.doc.data()['username'],
            mssv: e.payload.doc.data()['mssv'],
            fullname: e.payload.doc.data()['fullname'],
            phone:e.payload.doc.data()['phone'],
            khoa:e.payload.doc.data()['khoa'],
            gender:e.payload.doc.data()['gender'],
            date: e.payload.doc.data()['createDate'],
            rating:e.payload.doc.data()['rating'],
            numUserRate:e.payload.doc.data()['numberUserRate'],
            blockAccount:e.payload.doc.data()['blockAccount']
          };
      })
    });
    this.filter = "";
  }
  blockUser(iduser){
    var record={};
    record['blockAccount']=true;
    this.crudUser.update_Users(iduser,record);
  }
  unblockUser(iduser){
    var record={};
    record['blockAccount']=false;
    this.crudUser.update_Users(iduser,record);
  }

}
