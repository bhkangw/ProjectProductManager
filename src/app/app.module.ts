import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { ProductService } from './product.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductEditComponent,
    ProductLandingComponent,
    ProductListComponent,
    ProductNewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule, // <-- Include module in our AppModules
    AppRoutingModule, // <--- Our routing rules
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
