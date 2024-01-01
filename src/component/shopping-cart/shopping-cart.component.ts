import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  products = [
    { id: 1, productName: 'mouse', description: 'a very beautiful mouse' },
    {
      id: 2,
      productName: 'keyboard',
      description: 'a very beautiful keyboard',
    },
    { id: 3, productName: 'monitor', description: 'a very beautiful monitor' },
    { id: 4, productName: 'printer', description: 'a very beautiful printer' },
  ];
  cart: { id: number; productId: number; quantity: number }[] = [];

  addShoppingCart(productId: number) {
    !this.cart.find((product) => product.productId == productId)
      ? this.cart.push({
          id: this.cart.length > 0 ? this.cart[this.cart.length - 1].id + 1 : 1,
          productId: productId,
          quantity: 1,
        })
      : (this.cart.find(
          (product) => product.productId == productId
        )!.quantity += 1);
  }

  findProduct(productId: number) {
    return this.products.find((product) => product.id == productId);
  }

  findCartProduct(id:number){
    return this.cart.find(product=>product.id==id);
  }

  productQuantityPlus(id:number){
    this.findCartProduct(id)!.quantity++;
  }

  productQuantityMinus(id:number){
    this.findCartProduct(id)?.quantity != 1 ? this.findCartProduct(id)!.quantity-- : this.deleteCartProduct(id);
  }

  deleteCartProduct(id: number) {
    let deleteProductIndex = this.cart.findIndex((product) => product.id == id);
    this.cart.splice(deleteProductIndex,1);
  }
}
