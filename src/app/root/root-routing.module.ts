import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { ModalLayoutComponent } from '../layouts/modal-layout/modal-layout.component';
import { RootRoutes } from '../types/enums/root-routes.enum';
import { FeatureExampleComponent } from './feature-example/feature-example.component';
import { ModalFeatureExampleComponent } from './modal-feature-example/modal-feature-example.component';
import { RootComponent } from './root.component';
import { AuthGuardService as AuthGuard } from '../core/guards/auth-guard.service';


const routes: Routes = [
  {
    path: RootRoutes.EMPTY,
    component: RootComponent,
    children: [
      {
        path: RootRoutes.MAIN,
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: RootRoutes.MESSENGER,
            loadChildren: () =>
              import('./messenger/messenger.module').then((m) => m.MessengerModule),
          }
        ],
      },
      {
        path: RootRoutes.MODAL,
        component: ModalLayoutComponent,
        outlet: RootRoutes.MODAL_OUTLET_NAME,
        children: [
          {
            path: RootRoutes.DELETE_THIS_MODAL_EXAMPLE,
            component: ModalFeatureExampleComponent,
          },
          {
            path: RootRoutes.AUTH,
            loadChildren: () =>
              import('./auth/auth.module').then((m) => m.AuthModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule { }
