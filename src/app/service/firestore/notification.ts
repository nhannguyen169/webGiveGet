import { Injectable } from '@angular/core';
 
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class Notification {
 
  constructor(
    private firestore: AngularFirestore
  ) { }

  sendNotification(type,title,content){
    let record = {};
    record['type'] = type;
    record['title'] = title;
    record['content'] = content;
    var today = new Date();
    record['ngaytao'] = today;
    this.firestore.collection('message').add(record);
  }

}
