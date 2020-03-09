import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from '../config/auth-constants';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { ToastService } from './../services/toast.service';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    postData = {
        identification_card: '',
        password: ''
    };

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private authService: AuthService, private storageService: StorageService, private toastService: ToastService, public menuController: MenuController) { }

    ngOnInit() {}
    validateInputs() {
        const username = this.postData.identification_card.trim();
        const password = this.postData.password.trim();
        return (
            this.postData.identification_card &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0
        );
    }

    loginAction() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe(
                (res: any) => {
                    if (res.success) {
                        // Storing the User data.
                        this.storageService.store(AuthConstants.AUTH, res.success);
                        this.toastService.presentToast('Connected.');
                        this.router.navigate(['/notes/index']);
                    } else {
                        this.toastService.presentToast('Incorrect username and password.');
                    }
                },
                (error: any) => {
                    this.toastService.presentToast('Network Issue.');
                }
            );
        } else {
            this.toastService.presentToast(
                'Please enter username or password.'
            );
        }
    }

    ionViewWillEnter() {
        this.menuController.enable(false);
    }
}
