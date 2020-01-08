import { Component } from '@angular/core';

import { products } from '../../assets/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(name) {
    //window.alert('The product has been shared!');
    console.log('The product '+ name +' has been shared!');
  }

  onNotify(name){
    console.log('The product '+ name +' has been notified!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/