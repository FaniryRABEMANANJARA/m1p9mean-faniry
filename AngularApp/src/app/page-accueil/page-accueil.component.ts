import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {

  products: Product[] = [];

	constructor(private route: ActivatedRoute, private productService: ProductService) { }

	ngOnInit() {
		this.getProducts();
	}

	getProducts(): void {
    this.productService.getProducts().subscribe(products=>{
      console.log(products);
      this.products=products
    });
	}

}
