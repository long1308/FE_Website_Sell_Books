import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/service/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products!: Iproduct[];
  newProducts!: Iproduct[];
  featuredProducts!: Iproduct[];

  responsiveOptions!: any[];

  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products: any) => {
      this.products = products.docs;
      this.featuredProducts = this.products.filter(
        (product) => product.featured && product.isVisible
      );
      this.newProducts = this.products.filter(
        (product) => product.isNew && product.isVisible
      );
    });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

}
