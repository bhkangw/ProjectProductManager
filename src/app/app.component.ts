import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    new Product(1, 'Camera', 499.99, 'https://www.bhphotovideo.com/images/images2500x2500/nikon_1555_d7200_dslr_camera_with_1127272.jpg'),
    new Product(2, 'Macbook', 1299.99, 'https://brain-images-ssl.cdn.dixons.com/3/0/10165803/u_10165803.jpg')
  ];

  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe((products) => {
      this.products = products;
    });
  }
}
