import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetComponent } from './forget/forget.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForgetComponent
  ],
  exports:[ForgetComponent
    
  ]
})
export class UserAuthModule { }
