import { Component ,inject} from '@angular/core';
import { FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  isLoading =false;
  errorMessage ='';


  loginForm =this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    rememberMe: [false]

  });
 
  onlogin()  {
    if(this.loginForm.invalid) return;
    this.isLoading =true;
    this.errorMessage = '';
    //Temporary FAKE LOGIN,REMOVE WHEN YOU CONNECT THE DATABASE
    const {email,password} = this.loginForm.value;
    setTimeout(()) => {
      this.isLoading =false;
      if (email == 'test@test.com' && password === '123456') {
        localStorage.setItem('token', 'fake-token-123');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    },1000);
  }
};