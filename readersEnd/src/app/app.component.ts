import { Comment } from './comment';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memoria';
  isAddComment = false;

  commentList: Comment[] = [
    // sample output
    {
      userName : 'moshikurdapya',
      email : 'moshi@gmail.com',
      comments : '¡A la mierda! ¡Trabaja!'  
    }
  ]

  addComment(comment:Comment){
    this.commentList.push(comment);
    this.isAddComment = false;
  }

  addNewComment(){
    this.isAddComment = true;
  }
}
