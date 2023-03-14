import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from 'src/app/types/enums/auth-routes.enum';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: AuthRoutes.EMPTY,
    component: AuthComponent,
        children: [
          {
            path: AuthRoutes.SIGN_IN,
            component: SignInComponent,
          },
          {
            path: AuthRoutes.LOGIN,
            component: LoginComponent
          },
          {
            path: AuthRoutes.SIGN_UP,
            component: SignUpComponent
          }
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
