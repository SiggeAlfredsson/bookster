<template>
  <div>
    <div class="book-list">
      <ul>
          <!-- Making the titles the same way im making the list -->
          <div class="column-titles">
            <div class="book-title">Title</div>
            <div class="book-author">Author</div>
            <div class="book-availability">Availability</div>
          </div>
        <li v-for="book in books" :key="book.title">
          <div class="book-info">
            <div class="book-title">{{ book.title }}</div>
            <div class="book-author">{{ book.author }}</div>
            <div class="book-availability" v-if="book.quantity > 0">{{ book.quantity }} left</div>
            <div class="book-availability" v-else>Out of stock</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import SearchQuery from './SearchQuery.vue';

interface Book {
  title: string;
  author: string;
  quantity: number;
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
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchBooks(query: string) {
      axios.get(`http://localhost:3000/library/books/search?q=${query}`)
        .then(response => {
          this.books = response.data.books as Book[];
        })
        .catch(error => {
          console.error(error);
        });
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
.book-availability {
  background-color: lightgray;
  padding: 30px;
  margin: 1px;
  width: 750px;
  /* fix width to scale */

  display: flex;
  align-items: center;
  justify-content: center;
}


.book-info, .column-titles {
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


</style>
