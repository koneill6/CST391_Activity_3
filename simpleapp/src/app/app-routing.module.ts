import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'register', component: RegisterComponent }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
