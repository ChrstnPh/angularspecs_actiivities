import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentDisplayComponent } from './comment-display/comment-display.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import { DeleteBtnComponent } from './delete-btn/delete-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentDisplayComponent,
    AddCommentComponent,
    ArticleDisplayComponent,
    DeleteBtnComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
