document.addEventListener(`alpine:init`, () => {
  Alpine.data(`products`, () => ({
    items: [
      { id: 1, name: `Choccolate`, img: `1.jpg`, price: 2 },
      { id: 2, name: `Penuts`, img: `2.jpg`, price: 2 },
      { id: 3, name: `Strawberry`, img: `3.jpg`, price: 2.21 },
      { id: 4, name: `Carramel`, img: `4.jpg`, price: 2.5 },
      { id: 5, name: `Cheese`, img: `5.jpg`, price: 3 },
    ],
  }));

  Alpine.store(`shoppingCart`, {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;

            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi Mata Uang
const dollar = (number) => {
  return new Intl.NumberFormat(`en-IN`, {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
    minimumFractionDigits: 0,
  }).format(number);
};
