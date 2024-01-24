import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetComponent } from './forget/forget.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LikecommentComponent } from './likecomment/likecomment.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ForgetComponent, UserEditComponent,LikecommentComponent],
  exports: [ForgetComponent, UserEditComponent,LikecommentComponent],
})
export class UserAuthModule {}
