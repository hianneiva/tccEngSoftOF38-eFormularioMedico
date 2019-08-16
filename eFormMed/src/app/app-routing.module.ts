import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pacient-input', loadChildren: './pacient-input/pacient-input.module#PacientInputPageModule' },
  { path: 'form-list', loadChildren: './form-list/form-list.module#FormListPageModule' },
  { path: 'form-sf36', loadChildren: './form-sf36/form-sf36.module#FormSF36PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
