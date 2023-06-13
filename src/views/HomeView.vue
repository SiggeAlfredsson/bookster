

<!-- -

  It checks if

  Mounted > created bcs need to decide what to load before loading it .. 



-->


<template>

  <div>
    <!-- Search input here or in component? GPT 3.5s lösning på hur man har search här via events -->
    <SearchQuery @searchQueryUpdated="handleSearchQueryUpdate" />
    <UserHome :searchQuery="searchQuery" v-if="getLocalStorage('role') === 'USER'" />
    <AdminHome :searchQuery="searchQuery" v-else-if="getLocalStorage('role') === 'ADMIN' " />
    <GuestHome :searchQuery="searchQuery" v-else/>
  </div>
</template>

<script lang="ts">
import GuestHome from '@/components/GuestHome.vue';
import UserHome from '@/components/UserHome.vue';
import SearchQuery from '@/components/SearchQuery.vue';
// import AdminHome from '@/components/AdminHome.vue';





export default {
  components: {
    GuestHome,
    SearchQuery,
    UserHome,
    // AdminHome
  },
  data() {
    return {
      searchQuery: "",
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
    }
  }
};
</script>

