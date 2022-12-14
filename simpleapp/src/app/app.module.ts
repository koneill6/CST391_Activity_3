import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    InfoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
