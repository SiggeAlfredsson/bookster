<template>
  <button @click="isOpen = true">Add new book</button>

  <transition name="modal-animation">
    <div class="modal" v-if="isOpen">
      <transition name="modal.animation-inner">
        <div class="modal-inner" v-if="isOpen">
          <div>
            <h1>Edit book</h1>
            <h2>Title</h2>
            <input type="text" v-model="title" placeholder="Insert new title..." />
            <h2>Author</h2>
            <input type="text" v-model="author" placeholder="Insert new author..." />
            <h2>Quantity</h2>
            <input type="number" v-model="quantity" placeholder="Insert new quantity..." />
          </div>
          <button @click="addBook">Save changes</button>
          <button @click="discardChanges">Discard changes</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { bookService } from "@/service/BookService";
import type Book from "@/model/Book";

export default {
  data() {
    return {
      isOpen: false,
      title: "",
      author: "",
      quantity: 0,
    };
  },
  computed: {
    book(): Book {
      return {
        title: this.title,
        author: this.author,
        quantity: this.quantity,
        orderQuantity: 0,
      };
    },
  },
  methods: {
    addBook() {
      bookService.addBook(this.book);
      this.isOpen = false;
      this.clearInputs();
    },
    discardChanges() {
      this.isOpen = false;
      this.clearInputs();
    },
    clearInputs() {
      this.title = "";
      this.author = "";
      this.quantity = 0;
    },
  },
};
</script>

<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s;
}

.modal-animation-enter,
.modal-animation-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-inner {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
}

.modal-inner button {
  margin-top: 10px;
}
</style>
