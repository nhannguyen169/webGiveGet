import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudReport {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  
 
  read_Reports() {
    return this.firestore.collection('reports',ref => ref.orderBy('ngaytocao', 'desc')).snapshotChanges();
  }


 
  delete_Reports(record_id) {
    this.firestore.collection('reports').doc(record_id).delete();
  }

 
}