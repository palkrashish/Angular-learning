import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IfelseconditionComponent } from './ifelsecondition/ifelsecondition.component';
import { ForloopComponent } from './forloop/forloop.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,IfelseconditionComponent,ForloopComponent,HeaderComponentComponent],
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
show= false;

}
