<!-- 

  User list component. Loads in every user from the api and display in Columns and rows.
  Can only be shown when signed in as ADMIN .

 -->


<template>
  <searchQuery @search="searchUsers" />

  <div class="user-list">
    <ul>
      <!-- Making the titles the same way im making the list, OK to have same class on two divs? -->
      <div class="column-titles">
        <div class="user-username">Username</div>
        <div class="user-role">Role</div>
        <div class="user-purchases">Purchases</div>
        <div class="user-action">Action</div>
      </div>
      <li v-for="user in searchedUsers">
        <div class="user-info">
          <div class="user-username">{{ user.username }}</div>
          <div class="user-role">{{ user.role }}</div>
          <div class="user-purchases">3 purchases</div>
          <div class="user-action">
            <!-- These appears as buttons -->
            <PromoteUserModal :user="user" />
            <DeleteUserModal :user="user" />

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import type User from "@/model/User"
import { userService } from "@/service/UserService";
import SearchQuery from "./SearchQuery.vue";
import PromoteUserModal from "./PromoteUserModal.vue";
import DeleteUserModal from "./DeleteUserModal.vue";



export default {
  components: {
    SearchQuery,
    PromoteUserModal,
    DeleteUserModal,
  },
  data() {
    return {
      users: [] as User[],
      searchedUsers: [] as User[],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      userService.fetchUsers()
        .then(users => {
          this.users = users;
          this.searchedUsers = users;
        });

    },
    searchUsers(query: string) {
      if (query) {
        this.searchedUsers = this.users.filter(user =>
          user.username.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.searchedUsers = this.users; // Reset filteredUsers if query is empty
      }
    },
  }
  };
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.user-list {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

}

.user-username,
.user-role,
.user-purchases,
.user-action {
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


.user-info,
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
</style>