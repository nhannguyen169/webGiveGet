import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './login.component';

const routes: Routes =[
    {
        path: '',
        component: LoginComponent
    }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})

export class LoginModule {}
