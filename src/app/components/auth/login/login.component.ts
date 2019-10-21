import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  constructor(
    private userService: UserService,
    public router: Router
  ) {
    super();
  }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
    this.userService.login(this.user).subscribe(result => {
      this.submitted = false;
      if (result) {
        this.showMessages.success = result
        this.messages.push('Inicio de sesión exitoso')
        localStorage.setItem('token', JSON.stringify(result.data.token))
        this.router.navigateByUrl('activities')
      }
    }, error => {
      this.submitted = false;
      this.showMessages.error = error
      this.errors.push(error.error.message)
    })
  }
}
