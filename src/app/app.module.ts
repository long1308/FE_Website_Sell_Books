import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/client/header/header.component';
import { FooterComponent } from './partials/client/footer/footer.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ProductsComponent } from './components/products/products.component';
import { TagModule } from 'primeng/tag';
import { ItemComponent } from './components/item/item.component';
registerLocaleData(uk);

  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutAdminComponent,
    LayoutClientComponent,
    ProductsComponent,
    ItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AvatarModule,
    InputTextModule,
    CarouselModule,
    TagModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: uk_UA }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
