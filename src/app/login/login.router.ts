import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexGuard } from '../guards/index.guard';
import { LoginPage } from './login.page';

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        canActivate: [IndexGuard],
        children: [
            /*{
                path: 'login',
                loadChildren: () =>
                    import('../pages/login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: 'signup',
                loadChildren: () =>
                    import('../pages/signup/signup.module').then(m => m.SignupPageModule)
            }*/
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRouter {}
