import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   name: string = "";
   products: Product[] = [];

  constructor(private productService: ProductService) { 
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
  });
}
searchWord() {
  if (this.name == "") {
    this.ngOnInit();
  } else {
    this.products = this.products.filter(res => {
       return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
}
//deleteItem(products: Product){
    //this.productService.deleteItem(products);
//}
}
