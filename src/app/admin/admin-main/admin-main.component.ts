import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from 'src/app/shared/services/user';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent{
 
  private userCollection: AngularFirestoreCollection<User>;
  _user!: Observable<User[]>;

  constructor(public afs: AngularFirestore) { 

    this.userCollection = this.afs.collection<User>('users');
    this._user = this.userCollection.valueChanges();
  }

  onClick(user: User) {
    const userName = user.displayName;
    this.userCollection.doc(user.uid).delete();
    alert (`${userName} has been banned successfully!`);
  }
}
