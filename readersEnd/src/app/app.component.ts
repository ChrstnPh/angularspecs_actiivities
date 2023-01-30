import { Comment } from './comment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memoria';

  commentList: Comment[] = [
    // sample output
    {
      userName : 'moshikurdapya',
      email : 'moshi@gmail.com',
      comments : '¡A la mierda! ¡Trabaja!'  
    }
   
  ]
}
