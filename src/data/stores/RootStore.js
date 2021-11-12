import UiStore from "./UiStore";
import CartStore from "./CartStore";

class RootStore {
  static create() {
    return new RootStore();
  }

  constructor() {
    this.uiStore = UiStore.create(this);
    this.cartStore = CartStore.create(this);
  }
}

export default RootStore;
