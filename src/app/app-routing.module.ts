import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandComponent} from './pages/land/land.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {AuthGuard} from './auth/auth.guard';



const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LandComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
