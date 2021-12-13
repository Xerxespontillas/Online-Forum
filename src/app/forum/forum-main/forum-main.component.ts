import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/shared/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { user } from 'rxfire/auth';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/shared/services/topic';

@Component({
  selector: 'app-forum-main',
  templateUrl: './forum-main.component.html',
  styleUrls: ['./forum-main.component.css']
})
export class ForumMainComponent {
  // constructor(public authService: AuthService) { }

  // user: any;
  // uid: any;

  // ngOnInit(): void {
  // }

  private topicCollection: AngularFirestoreCollection<Topic>;
  _topics!: Observable<Topic[]>;


  constructor(public afs: AngularFirestore) {
    this.topicCollection = this.afs.collection<Topic>('topics');
    this._topics = this.topicCollection.valueChanges();

    this.topicCollection.doc('6R4eLS4k0xsDczAHzms4').delete();
  }

  //Delete own thread
  deletePost(topic: Topic) {
    const topicName = topic.topic;
    this.topicCollection.doc(topic.topicID).delete();
    alert (`${topicName} have been deleted successfully!`);
  }

  //TO DO: update method (delete own reply)
  deleteComment(topic: Topic) {
    const topicName = topic.topic;
    this.topicCollection.doc(topic.topicID).delete();
    alert (`${topicName} have been deleted successfully!`);
  }

  addComment(topic: Topic) {
    //TODO: add addon params [user object, comment]
    alert (`ADD COMMENT TO POST: ${topic.topic}`);

    //TODO: 1. create threads (reply on other threads)
    // const payload = {
    //   "topicID": topic.topicID,
    //   "comment": comment,
    //   "userID": user.ID
    // }

    //TODO: 2. retrieve threads by post id (view all replies)
    //this.threadsCollection = this.afs.collection<Threads>('threads', query => query.where('topicID', '==', topic.topicID));
    //SELECT * FROM threads where ('topicID' == 123);
    //this._threads = this.threadsCollection.valueChanges();
  }
}
