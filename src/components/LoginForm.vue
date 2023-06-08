<template>
  <div>
    <h2>Login</h2>
    <form @submit="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required placeholder="Type your username..." />
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required placeholder="Type your password..."/>
      
      <button type="submit">Login</button>
    </form>
    <p>No account? Sign up <router-link to="/register">here!</router-link></p>
    <div v-if="success" id="success">
          Logged in Successfully
        </div>
  </div>
  
</template>

<script lang="ts">
import axios from "axios";
import router from "@/router";

export default {
  data() {
    return {
      username: "",
      password: "",
      success: false,
    };
  },
  methods: {
    login: async function(event: Event) {
      event.preventDefault();

      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          username: this.username,
          password: this.password
        }).then(response => response.data);

        const accessToken = response.accessToken;

        localStorage.setItem("accessToken", accessToken);

        router.push("/home")

      } catch (error) {
        this.password = "";
        console.error(error);
      }
    }
  }
};
</script>
