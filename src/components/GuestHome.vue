<template>
  <div>
    <h2>Books</h2>
    <ul>
      <li v-for="book in books" :key="book.title">
        <h3>{{ book.title }}</h3>
        <p>Author: {{ book.author }}</p>
        <p>Quantity: {{ book.quantity }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

interface Book {
  title: string;
  author: string;
  quantity: number;
}

export default ({
  data() {
    return {
      books: [] as Book[],
    };
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
  },
});
</script>
