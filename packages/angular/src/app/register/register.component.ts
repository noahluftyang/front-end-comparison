import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form$ = new Subject();

  registerForm;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
    });

    this.authService.registerUser(this.form$).subscribe(response => {
      console.log(response);
      this.registerForm.reset();
    });
  }
}
