<!-- 

  Basic register form. Feel like its a little close to the LoginForm. Maybe could divide into smaller components? Sends a axios post to api with details.
  It does not log in after, but it pushes the user to the login page.

 -->

<template>
  <div class="container">
    <header>
      <h2>Register</h2>
    </header>
    <form class="form" @submit="register">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required placeholder="Type your username..." />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required placeholder="Enter a password..." />
      <p>Already have an account? Sign in <router-link to="/login">here!</router-link></p>
      <button class="button" type="submit">Register new account</button>
    </form>
  </div>
</template>

<script lang="ts">
import router from "@/router";
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
        const response = await axios.post("http://localhost:3000/auth/register", {
          username: this.username,
          password: this.password
        });
        alert("Account created");
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  /* border: 1px solid red; */
  width: 550px;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: lightgray;
  
}

header {

  margin-top: 15px;

  width: 90%;
  height: 80px;
  margin-bottom: 30px;
  /* border: 1px solid blue; */
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
}

.form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* flex grow? */
  /* border: 1px solid green; */
  width: 85%;
  /* align-items: center; */

}

.form button {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
}



.button {
  background-color: grey;
  color: white;
}

.button:hover {
  background-color: rgb(114, 114, 114);
}

.form p {
  /* color: red; */
}

.form label {
  font-size: 20px;
  padding-left: 30px;
  margin-bottom: 5px;
}

.form input {
  outline: none;
  border: none;
  height: 40px;
  padding-left: 25px;
  font-size: 20px;

}



/* space beetween the two inputs */
#username {
  margin-bottom: 30px;
}


</style>
