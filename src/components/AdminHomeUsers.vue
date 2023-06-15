<!-- 

  This started as a copy of UserHome component, so the implementation is really alike. Insted of book, there is user.

 -->


<template>
  <div>
    <div class="user-list">
      <ul>
        <!-- Making the titles the same way im making the list, OK to have same class on two divs? -->
        <div class="column-titles">
          <div class="user-username">Username</div>
          <div class="user-role">Role</div>
          <div class="user-purchases">Purchases</div>
          <div class="user-action">Action</div>
        </div>
        <li v-for="user in users">
          <div class="user-info">
            <div class="user-username">{{ user.username }}</div>
            <div class="user-role">{{ user.role }}</div>
            <div class="user-purchases">3 purchases</div>
            <div class="user-action">
              <button class="promote-button" @click="promoteUser(user)">Promote</button>
              <button class="delete-button" @click="deleteUser(user)">Delete</button>

            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import User from "@/model/User"



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
      users: [] as User[],
      // orderQuantity: 0,
    };
  },
  watch: {
    searchQuery(newQ: string) {
      if (newQ !== "") {
        this.searchBooks(newQ);
      } else {
        this.fetchUsers();
      }
    }
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:3000/admin/users', { headers: {
            Authorization: localStorage.getItem("accessToken")
          }})
        .then(response => {
          this.users = response.data.users as User[];
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchBooks(query: string) {
          // make a search function of user in Users
          console.log(query)
    },
    promoteUser(user: User) {

    },
    deleteUser(user: User) {

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