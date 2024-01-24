import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counterApp';
count = 0;
  // counter(){
  //   this.count++
  // }
  // counter1(){
  //   this.count--
  // }
  counter(type:any){
    type==='add'?this.count++:this.count--;

  }
}
