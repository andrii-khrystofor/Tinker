import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './types/enums/app-routes.enum';

const routes: Routes = [
  {
    path: AppRoutes.EMPTY,
    redirectTo: `${AppRoutes.ROOT}`,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.ROOT,
    loadChildren: () =>
      import('./root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
