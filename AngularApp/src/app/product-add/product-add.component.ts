import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	@Input() product: Product = { _id:'',name: '', prix: '', prixachat: '', quantite: '', date: '' };

	constructor(private productService: ProductService, private location: Location) { }

	ngOnInit() {
	}

	save(): void {
		this.productService.addProduct(this.product).subscribe(() => this.goBack());
	}

	goBack(): void {
		this.location.back();
	}

}
