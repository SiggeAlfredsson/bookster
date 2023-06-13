<!-- 

  Fråga jakob om orderquantity, den resetas varje order som tas..
 -->


<template>
  <div>
    <div class="book-list">
      <ul>
        <!-- Making the titles the same way im making the list, OK to have same class on two divs? -->
        <div class="column-titles">
          <div class="book-title">Title</div>
          <div class="book-author">Author</div>
          <div class="book-availability">Availability</div>
          <div class="book-order">Order</div>
        </div>
        <li v-for="book in books" :key="book.title">
          <div class="book-info">
            <div class="book-title">{{ book.title }}</div>
            <div class="book-author">{{ book.author }}</div>
            <div class="book-availability" v-if="book.quantity > 0">{{ book.quantity }} left</div>
            <div class="book-availability" v-else>Out of stock</div>
            <div class="book-order">
              <button class="remove-button" @click="removeOrderQuantity(book)">-</button>
              <input class="number-input" type="number" v-model="book.orderQuantity" readonly>
              <button class="add-button" @click="addOrderQuantity(book)">+</button>
              <button class="place-order-button" @click="placeOrder(book)">Order</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

interface Book {
  title: string;
  author: string;
  quantity: number;
  orderQuantity: number;
}

export default {
  components: {

  },
  props: {
    searchQuery: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      books: [] as Book[],
      // orderQuantity: 0,
    };
  },
  watch: {
    searchQuery(newQ: string) {
      if (newQ !== "") {
        this.searchBooks(newQ);
      } else {
        this.fetchBooks();
      }
    }
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost:3000/library/books')
        .then(response => {
          this.books = response.data.books as Book[];
          this.books.forEach((book: Book) => {
            book.orderQuantity = 0;
          })
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchBooks(query: string) {
      axios.get(`http://localhost:3000/library/books/search?q=${query}`)
        .then(response => {
          this.books = response.data.books as Book[];
          this.books.forEach((book: Book) => {
            book.orderQuantity = 0;
          })
        })
        .catch(error => {
          console.error(error);
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
.book-order {
  background-color: lightgray;
  padding: 30px;
  margin: 1px;
  width: 450px;
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