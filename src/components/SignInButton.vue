<!-- 

  Just a button with styling and a router link. Same as router.push.
  Used as childcomponent in Header (component).
  
 -->

<template>
  <router-link to="/login">
      <button class="sign-in-button">Sign in</button>
      </router-link>
</template>


<style scoped>
.sign-in-button {
  width: 130px;
  height: 40px;
  font-size: 25px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.sign-in-button:hover {
  background-color: rgb(233, 233, 233);
}
</style>
