import { Component, OnInit } from '@angular/core';
import { CrudProduct } from '../service/firestore/product';

@Component({
  selector: 'app-qlsp',
  templateUrl: './qlsp.component.html',
  styleUrls: ['./qlsp.component.css']
})
export class QlspComponent implements OnInit {
  
  p:any;
  public products: any;
  constructor(
    private crudProduct: CrudProduct
  ) { }

  filter: string;
  ngOnInit() {
    this.crudProduct.read_Products().subscribe(data => { 
        this.products = data.map(e => {
            return {
              id: e.payload.doc.id,
              tensp: e.payload.doc.data()['tensp'],
              loaisp: e.payload.doc.data()['loaisp'],
              img:e.payload.doc.data()['image'],
              date:e.payload.doc.data()['ngaytao'].toDate(),
              note:e.payload.doc.data()['mota'],
              status:e.payload.doc.data()['tinhtrangsp'],
              method:e.payload.doc.data()['cachthucnhan'],
              confirmGive:e.payload.doc.data()['confirmGiven'],
              confirmGet:e.payload.doc.data()['confirmGotten'],
              hasRated:e.payload.doc.data()['rated'],
              numEdit:e.payload.doc.data()['numberEdit'],
              isEdit:false,
              user:e.payload.doc.data()['user']
            };
        })
      });
     this.filter = "";
  }
  deleteProduct(idpro){
    this.crudProduct.delete_Product(idpro);
  }
}
