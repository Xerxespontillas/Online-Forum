import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumMainComponent } from './forum/forum-main/forum-main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: ForumMainComponent,
    canActivate: [AuthGuard]  
  },
  {
    path: "account",
    component: AccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
