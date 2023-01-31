import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { Comment } from '../comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {

  // title = 'Yay! Feel free to express yourself.';
  ngOnInit(){
    this.commentForm.reset();
  }

  @Output() commentOut = new EventEmitter();
  commentForm = new FormGroup({
    mycomment: new FormControl('')
  })

  addComment(){
    this.commentOut.emit(this.commentForm.value)
  }
}
