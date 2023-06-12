<!-- 
        event.preventDefault(); This is to prevent the site to reload after @submit login

        Takes the username and password from the fiels and checks it with the database via axios post request,
        if it matches the role, username and jwt token
        will be saved in the localstorage. and pushes via router to /home

        Need to add something when it does not match

 -->


<template>
  <div class="container">
    <header>
      <h2>Login</h2>
    </header>
    <form class="form" @submit="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required placeholder="Type your username..." />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required placeholder="Type your password..." />
      <p>No account? Sign up <router-link to="/register">here!</router-link></p>
      <button class="sign-in-button" type="submit">Sign in</button>
      <router-link to="/home">
      <button class="guest-button">Proceed as guest user</button>
      </router-link>
      
    </form>
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

<style scoped>
.container {
  /* border: 1px solid red; */
  width: 550px;
  height: 460px;

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

.sign-in-button {
  background-color: grey;
  color: white;
}

.sign-in-button:hover {
  background-color: rgb(114, 114, 114);
}

.guest-button {
  font-weight: bold;
}

.guest-button:hover {
  background-color: rgb(226, 226, 226);
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
