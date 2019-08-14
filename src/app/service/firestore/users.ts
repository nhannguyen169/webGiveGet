import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudUser {
 
  constructor(
    private firestore: AngularFirestore
  ) { }
 
  
 
  read_Users() {
    return this.firestore.collection('user',ref => ref.orderBy('createDate', 'asc')).snapshotChanges();
  }

  update_Users(recordID,record){
    this.firestore.doc('user/' + recordID).update(record);
  }
 

 
}