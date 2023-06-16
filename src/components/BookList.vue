<template>

  <SearchQuery @search="searchBooks"/>

  <div class="book-list">
    <ul>
      <!-- Making the titles the same way im making the list, OK to have same class on two divs? -->
      <div class="column-titles">
        <div class="book-title">Title</div>
        <div class="book-author">Author</div>
        <div class="book-availability">Availability</div>
        <div class="book-order" v-if="getLocalStorage('role') === 'USER' || getLocalStorage('role') === 'ADMIN'" >Order</div>
        <div class="book-action" v-if="getLocalStorage('role') === 'ADMIN'" >Action</div>
      </div>
      <li v-for="book in books">
        <div class="book-info">
          <div class="book-title">{{ book.title }}</div>
          <div class="book-author">{{ book.author }}</div>
          <div class="book-availability" v-if="book.quantity > 0">{{ book.quantity }} left</div>
          <div class="book-availability" v-else>Out of stock</div>
          <div class="book-order" v-if="getLocalStorage('role') === 'USER' || getLocalStorage('role') === 'ADMIN'">
            <button class="remove-button" @click="removeOrderQuantity(book)">-</button>
            <input class="number-input" type="number" v-model="book.orderQuantity" readonly>
            <button class="add-button" @click="addOrderQuantity(book)">+</button>
            <button class="place-order-button" @click="placeOrder(book)">Order</button>
          </div>
          <div class="book-action" v-if="getLocalStorage('role') === 'ADMIN'">
            <button class="edit-button" @click="editBook(book)">Edit</button>
            <button class="delete-button" @click="deleteBook(book)">Delete</button>
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from "axios"; //remove later
import type Book from "@/model/Book";
import { bookService } from "@/service/BookService";
import SearchQuery from "./SearchQuery.vue";

export default {
  components: {
    SearchQuery
  },
  data() {
    return {
      books: [] as Book[],
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    getLocalStorage(key: string): string | null {
      return localStorage.getItem(key);
    },
    fetchBooks() {
      bookService.fetchBooks()
      .then(books  => {
        this.books = books;
      });
    },
    searchBooks(query: string) {
      bookService.searchBooks(query)
      .then(books => {
        this.books = books;
      });
    },
    removeOrderQuantity(book: Book) {
      if (book.orderQuantity > 0) {
        book.orderQuantity--;
      }
    },
    addOrderQuantity(book: Book) {
      if (book.quantity > book.orderQuantity)
        book.orderQuantity++;
    },
    placeOrder(book: Book) {
      if (book.orderQuantity <= book.quantity && book.quantity > 0) {
        axios.post("http://localhost:3000/library/user/books", {
          title: book.title,
          quantity: book.orderQuantity
        }, {
          headers: {
            Authorization: localStorage.getItem("accessToken")
          }
        })
          .then(response => {
            // console.log(book.)
            // location.reload();
            this.fetchBooks();
            // This updated the availability but the search q is still there while everything is showing
          })
      }
    },
    editBook(book: Book) {

    },
    deleteBook(book: Book) {

    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.book-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}

.book-title,
.book-author,
.book-availability,
.book-order,
.book-action {
  background-color: lightgray;
  padding: 30px;
  margin: 1px;
  width: 200px;
  height: 10px;
  /* fix width to scale */

  display: flex;
  align-items: center;
  justify-content: center;
}


.book-info,
.column-titles {
  display: flex;
  flex-direction: row;
  /* padding: 10px; */
}

.column-titles div {
  background-color: grey;
  font-size: 30px;
  color: white;
  font-weight: light;
}

.remove-button,
.add-button {
  width: 12px;
}

.number-input {
  width: 30px;
}

.place-order-button {
  margin: 10px;
}
</style>