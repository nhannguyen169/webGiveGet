import { Component, OnInit } from '@angular/core';
import { CrudProduct } from '../service/firestore/product';
import { CrudUser } from '../service/firestore/users';

@Component({
  selector: 'app-qllsgd',
  templateUrl: './qllsgd.component.html',
  styleUrls: ['./qllsgd.component.css']
})
export class QllsgdComponent implements OnInit {
  p:any;
  filter: string;
  public HistoryProduct: any;
  public users: any;
  constructor(
    private crudProduct: CrudProduct,
    private crudUser: CrudUser,
  ) { }

  ngOnInit() {
    this.crudProduct.read_HistoryProduct().subscribe(data => {
      this.HistoryProduct = data.map(e => {
        return {
          id: e.payload.doc.id,
          tensp: e.payload.doc.data()['tensp'],
          loaisp: e.payload.doc.data()['loaisp'],
          img:e.payload.doc.data()['image'],
          ngaytao:e.payload.doc.data()['ngaytao'].toDate(),
          ngayketthuc:e.payload.doc.data()['ngayketthuc'].toDate(),
          status:e.payload.doc.data()['tinhtrangsp'],
          method:e.payload.doc.data()['cachthucnhan'],
          nguoicho:e.payload.doc.data()['nguoicho'],
          nguoinhan:e.payload.doc.data()['nguoinhan']
        }
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

    this.filter = "";
  }
}
