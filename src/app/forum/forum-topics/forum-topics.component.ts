import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/shared/services/topic.service';
@Component({
  selector: 'app-forum-topics',
  templateUrl: './forum-topics.component.html',
  styleUrls: ['./forum-topics.component.css']
})
export class ForumTopicsComponent implements OnInit {

  constructor(public authService: TopicService) { }

  topic: any;
  desc: any;

  ngOnInit(): void {
  }

}
