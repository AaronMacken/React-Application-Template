import { action, computed, observable } from "mobx";

class CartStore {
  static create(rootStore) {
    return new CartStore(rootStore);
  }

  constructor(rootStore) {
    Object.assign(this, { rootStore });
  }

  @observable cartItems = [];
}

export default CartStore;
