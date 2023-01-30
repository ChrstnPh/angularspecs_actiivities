import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentDisplayComponent } from './comment-display/comment-display.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentDisplayComponent,
    AddCommentComponent,
    ArticleDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
