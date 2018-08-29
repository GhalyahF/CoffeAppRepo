import { decorate, observable, computed } from "mobx";
import list from "./CoffeList/list";

class Store {
  constructor() {
    this.shopCart = [];
    this.currentShop = 1;
    this.list = list;
    this.detail = {
      drink: 0,
      option: ""
    };
    this.quantity = 0;
  }
  get current() {
    return this.list[1];
  }
  handleOrder() {
    let order = {
      drink: this.detail.drink
    };
    quantity: this.quantity + 1;

    this.shopCart.push(order);
    this.currentShop = this.detail;
    this.quantity++;
  }

  handleRemove() {
    let order = {
      drink: this.detail.drink
    };
    quantity: this.quantity - 1;

    this.shopCart.splice(this.shopCart.indexOf(order), 1);
    this.currentShop = this.detail;
    this.quantity--;
  }
}

decorate(Store, {
  shopCart: observable,
  list: observable,
  quantity: observable,
  current: computed
});

export default new Store();
