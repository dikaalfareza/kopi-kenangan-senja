document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Robusta Brazil", img: "1.jpeg", price: 20000 },
      { id: 2, name: "Arabica Blend", img: "2.jpeg", price: 25000 },
      { id: 3, name: "Primo Passo", img: "3.jpeg", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "4.jpeg", price: 35000 },
      { id: 5, name: "Sumatra Mandheling", img: "5.jpeg", price: 40000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // di check apakah item yang di add sudah ada atau belum
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika item yang di add belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          // jika item berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika item yang di add itu sama
            item.quantity++;
            item.total = item.quantity * item.price;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri satu-satu
        this.items = this.items.map((item) => {
          // jika bukan item yang diklik atau id nya beda
          if (item.id !== id) {
            return item;
          } else {
            // jika item yang diklik sesuai atau id nya sama
            item.quantity--;
            item.total = item.quantity * item.price;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });

  Alpine.store("modal", {
    item: [],
    show(showItem) {
      this.item.push(showItem);

      const itemDetailModal = document.getElementById("item-detail-modal");
      itemDetailModal.style.display = "flex";
    },
    close() {
      this.item = [];
      const itemDetailModal = document.getElementById("item-detail-modal");

      itemDetailModal.style.display = "none";
    },
  });
});

// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
