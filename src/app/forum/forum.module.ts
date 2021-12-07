import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumThreadComponent } from './forum-thread/forum-thread.component';
import { ForumCreateTopicComponent } from './forum-create-topic/forum-create-topic.component';
import { ForumTopicsComponent } from './forum-topics/forum-topics.component';


@NgModule({
  declarations: [
    ForumMainComponent,
    ForumThreadComponent,
    ForumCreateTopicComponent,
    ForumTopicsComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ForumMainComponent,
    ForumCreateTopicComponent,
  ]
})
export class ForumModule { }
