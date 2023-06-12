<!-- 
        event.preventDefault(); This is to prevent the site to reload after @submit login

        Takes the username and password from the fiels and checks it with the database via axios post request,
        if it matches the role, username and jwt token
        will be saved in the localstorage. and pushes via router to /home

        Need to add something when it does not match

 -->


<template>
  <div>
    <h2>Login</h2>
    <form @submit="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required placeholder="Type your username..." />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required placeholder="Type your password..." />

      <button type="submit">Sign in</button>
    </form>
    <p>No account? Sign up <router-link to="/register">here!</router-link></p>

  </div>
</template>

<script lang="ts">
import axios from "axios";
import router from "@/router";
import jwt_decode from 'jwt-decode';


interface DecodedToken {
  role: string;
  username: string;
}

export default {
  data() {
    return {
      username: "",
      password: "",
      decodedToken: {} as DecodedToken // empty DecodedToken object

    };
  },
  methods: {
    login: async function (event: Event) {
      event.preventDefault();


      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          username: this.username,
          password: this.password
        });

        const accessToken = response.data.accessToken;

        localStorage.setItem("accessToken", accessToken);

        if (accessToken) { 
          this.decodedToken = jwt_decode<DecodedToken>(accessToken);
          localStorage.setItem("username", this.decodedToken.username)
          localStorage.setItem("role", this.decodedToken.role)
        }

        // location.reload();

        router.push("/home")


      } catch (error) {
        this.password = "";
        console.error(error);
      }
    }
  }
};
</script>
