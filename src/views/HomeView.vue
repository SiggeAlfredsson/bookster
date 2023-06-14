

<!-- -

  It checks if

  Mounted > created bcs need to decide what to load before loading it .. 



-->


<template>
  <div>
    <!-- Search input here or in component? GPT 3.5s lösning på hur man har search här via events -->
    <SearchQuery @searchQueryUpdated="handleSearchQueryUpdate" />
    <UserHome :searchQuery="searchQuery" v-if="getLocalStorage('role') === 'USER'" />
    <div v-else-if="getLocalStorage('role') === 'ADMIN'">
        <button class="add-book-button" v-if="activeButton === 'books'"> Add new Book</button>
        <nav>
          <button @click="setActiveButton('books')" :class="{ active: activeButton === 'books' }">Books</button>
          <button @click="setActiveButton('users')" :class="{ active: activeButton === 'users' }">Users</button>
        </nav>
      <AdminHomeBooks v-if="activeButton === 'books'" :searchQuery="searchQuery" />
      <AdminHomeUsers v-if="activeButton === 'users'" :searchQuery="searchQuery" />
    </div>

    <GuestHome :searchQuery="searchQuery" v-else />
  </div>
</template>

<script lang="ts">
import GuestHome from '@/components/GuestHome.vue';
import UserHome from '@/components/UserHome.vue';
import SearchQuery from '@/components/SearchQuery.vue';
import AdminHomeBooks from '@/components/AdminHomeBooks.vue';
import AdminHomeUsers from '@/components/AdminHomeUsers.vue';





export default {
  components: {
    GuestHome,
    SearchQuery,
    UserHome,
    AdminHomeBooks,
    AdminHomeUsers,
  },
  data() {
    return {
      searchQuery: "",
      activeButton: "books",
    };
  },
  mounted() {


  },
  methods: {
    getLocalStorage(key: string): string | null {
      return localStorage.getItem(key);
    },
    handleSearchQueryUpdate(query: string) {
      this.searchQuery = query;
    },
    setActiveButton(btn: string) {
      this.activeButton = btn;
    }
  }
};
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

