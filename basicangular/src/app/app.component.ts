import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { ForgetComponent } from './user-auth/forget/forget.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, ForgetComponent]
})
export class AppComponent {
  title = ', lets learn Angular step by step';
}
