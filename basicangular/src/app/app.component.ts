import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { ForgetComponent } from './user-auth/forget/forget.component';
import { LikecommentComponent } from './user-auth/likecomment/likecomment.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, ForgetComponent,LikecommentComponent]
})
export class AppComponent {
  title = ', lets learn Angular step by step';

  getname(name:any,secondName: any){
    alert('Button Clicked')
    console.log('clicked')
    alert('name')
    console.log('clicked1')
    alert('secondName')
  }
}
