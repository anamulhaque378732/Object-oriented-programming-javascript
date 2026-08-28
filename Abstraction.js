// Abstraction

class BetterArray {
  constructor() {
    this.items = [];
  }

  getItems() {
    return [...this.items];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToDelete) {
    this.items = this.items.filter((item) => item !== itemToDelete);
  }

  modifyItem(itemToChange, newValue) {
    const index = this.items.indexOf(itemToChange);
    if (index !== -1) {
      this.items[index] = newValue;
    }
  }
}

const array = new BetterArray();

array.addItem("I love Bangladesh");
array.addItem("I love JS");
array.addItem("I love my Madam");
array.modifyItem("I love JS", "I love Golang");
array.removeItem("I love Golang");
