import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ToastService} from '../services/toast.service';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';
import {AuthConstants} from '../config/auth-constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  postData = {
    identification_card: '',
    name: '',
    email: '',
    password: '',
    c_password: ''
  };
  // tslint:disable-next-line:max-line-length
  constructor(private authService: AuthService, private toastService: ToastService, private storageService: StorageService, private router: Router) { }

  ngOnInit() {
  }
  validateInputs() {
    console.log(this.postData);
    const name = this.postData.name.trim();
    const password = this.postData.password.trim();
    // tslint:disable-next-line:variable-name
    const c_password = this.postData.c_password.trim();
    const email = this.postData.email.trim();
    return (
        this.postData.name &&
        this.postData.password &&
        this.postData.email &&
        this.postData.c_password &&
        name.length > 0 &&
        email.length > 0 &&
        c_password.length > 0 &&
        password.length > 0
    );
  }

  registerAction() {
    if (this.validateInputs()) {
      this.authService.register(this.postData).subscribe(
          (res: any) => {
            if (res.success) {
              // Storing the User data.
              this.storageService
                  .store(AuthConstants.AUTH, res.userData)
                  .then(response => {
                    this.router.navigate(['home']);
                  });
            } else {
              this.toastService.presentToast(
                  'Data alreay exists, please enter new details.'
              );
            }
          },
          (error: any) => {
            this.toastService.presentToast('Network Issue.');
          }
      );
    } else {
      this.toastService.presentToast(
          'Please enter email, username or password.'
      );
    }
  }

}
