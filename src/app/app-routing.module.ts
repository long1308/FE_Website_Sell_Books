import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: ProductsComponent },
      // { path: 'products/:id', component: ProductDetailComponent },
      // { path: 'shop', component: ShopComponent },
      // { path: 'blog', component: BlogComponent },
      // { path: 'about', component: AboutComponent },
      // { path: 'contact', component: ContactComponent },
      // { path: 'cart', component: CartComponent },
      // { path: 'account', component: AccountComponent },
      // { path: 'category/:id', component: ProductsOfCategoriesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
