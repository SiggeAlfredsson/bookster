<template>
  <nav>
    <!-- Make to component? -->
    <button @click="setActiveButton('books')" :class="{ active: activeButton === 'books' }">Books</button>
    <button @click="setActiveButton('users')" :class="{ active: activeButton === 'users' }">Users</button>
  </nav>

  <BookList v-if="activeButton === 'books'" />
  <UserList v-if="activeButton === 'users'" />
</template>

<script lang="ts">
import BookList from '@/components/BookList.vue';
import UserList from '@/components/UserList.vue';


export default {
  data() {
    return {
      activeButton: "books",
    }
  },
  components: {
    BookList
  },
  methods: {
    setActiveButton(btn: string) {
      this.activeButton = btn;
    }
  }
}
</script>

<style scoped>
button {
  width: 130px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
}

button.active {
  background-color: rgb(83, 83, 83);
  color: white;
}

button.active:hover {
  background-color: rgb(66, 66, 66);
}

.add-book-button {
  float: left;
  margin-left: 60px;
}

nav {
  float: right;
}
</style>
