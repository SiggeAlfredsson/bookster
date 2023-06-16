<!-- 

  Modal to edit an existing book. Is only shown when pressing edit in the BookList. (can only do when signed in as admin)

 -->

<template>
  <button @click="isOpen = true">Edit</button>

  <transition name="modal-animation">
    <div class="modal" v-if="isOpen">
      <transition name="modal.animation-inner">
        <div class="modal-inner" v-if="isOpen">
          <div>
            <h1>Edit book</h1>
            <h2>Title - {{ book.title }}</h2>
            <input type="text" v-model="newTitle" placeholder="Insert new title...">
            <h2>Author - {{ book.author }}</h2>
            <input type="text" v-model="newAuthor" placeholder="Insert new author...">
            <h2>Quantity - {{ book.quantity }}</h2>
            <input type="number" v-model="newQuantity" placeholder="Insert new quantity...">
          </div>
          <button @click="editBook">Save changes</button>

          <button @click="isOpen = false;">Discard changes</button>

        </div>
      </transition>
    </div>

  </transition>
</template>

<script lang="ts">
import { bookService } from "@/service/BookService";
import type Book from "@/model/Book";



export default {
  props: {
    book: {
      type: Object as () => Book, // Define the prop type as Book
      required: true,
    }
  },
  data() {
    return {
      isOpen: false,
      newTitle:"",
      newAuthor:"",
      newQuantity:NaN,
      editedBook: {} as Book
    }
    
  },
  created() {
    this.editedBook = this.book;
  },
  methods: {
    editBook() {
      const updatedBook: Book = {
        ...this.editedBook, // ... ?
        title: this.newTitle,
        author: this.newAuthor,
        quantity: this.newQuantity
      };
      const book = this.book;
      bookService.editBook(book, updatedBook);
      this.isOpen = false;
    }
  }
}

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