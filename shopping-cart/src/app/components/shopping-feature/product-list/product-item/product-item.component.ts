import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/firestore'
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  products: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };
  @Input()
  productItem!: Product; 
  

  constructor(private afs: AngularFirestore,
              private productService: ProductService) { }

  ngOnInit(): void {
   this.afs.collection('products').valueChanges().subscribe(res => {
    this.productItem;
   });
  }
  onSubmit(){
    if(this.products.name != '' && this.products.description != '' && this.products.price != 0 && this.products.imageUrl != ''){
      this.productService.addProduct(this.products);
      this.products.name= '';
      this.products.description= '';
      this.products.price= 0;
      this.products.imageUrl= '';
    }
  }
}
