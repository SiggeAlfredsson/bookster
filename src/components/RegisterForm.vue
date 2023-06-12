<template>
  <div>
    <h2>Register</h2>
    <form @submit="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required placeholder="Type your username..."/>
      
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required placeholder="Type your password..."/>
      
      <button type="submit">Register</button>
    </form>
    <p>Already have an account? Sign in <router-link to="/login">here!</router-link></p>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async register(event: Event) {
      event.preventDefault();

      try {
        const response = await axios.post("localhost:3030/auth/login", {
          username: this.username,
          password: this.password
        });
        // console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
