import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './auth/login/login.component';
import { MaterialModule } from './material-module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { InfoProductComponent } from './admin/info-product/info-product.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoProductService } from './admin/info-product.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    LoginComponent,
    ToolbarComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    InfoProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InfoProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
