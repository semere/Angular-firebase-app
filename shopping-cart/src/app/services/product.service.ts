import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemsCollection: AngularFirestoreCollection<Product>;
  //itemsDoc: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Product>('products');
    //this.itemsDoc = afs.collection<Product>('products').doc();
    this.products = this.itemsCollection.valueChanges();
    this.getAddProduct;
   }

   getProducts(){
    return this.products;
  }

   getAddProduct(){
    this.products = this.itemsCollection.snapshotChanges().pipe(map((changes: any) => {
        return changes.map((a: any) => {
        const data = a.payload.doc.data() as Product;
        data.id = a.paylaod.doc.id;
        return data;
      });
    }));
   }

   addProduct(products: Product){
    this.itemsCollection.add(products);
   }

  //  deleteItem(products: Product){
  //   //this.itemsDoc = this.afs.doc(`products/${products.id}`);
  //   //this.itemsDoc.delete();
  //   this.itemsDoc = this.afs.doc(`products/${products.id}`);
  //   this.itemsDoc.delete();
  //  }
}
