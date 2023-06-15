
<!-- 

    Child component to Header (rename to headerComponent ?).
    Checks the username and role, if they exist they combined and returns, else just return guest, to be displayed in top right corner while on homepage

 -->

<template>

<p>Browsing as  {{ userValue }}</p>


</template>
  
  <script lang="ts">

  export default {
    data() {
        return {
          username: "" as string | null,
          role: "" as string | null
        };
    },
    mounted() {
      this.username = localStorage.getItem("username");
      this.role = localStorage.getItem("role");

    },
    computed: {
      userValue() {
        if(this.username === null) {
          return "guest...";
        } else {
          return this.role?.toLowerCase() + ", " + this.username 
        }
      }
    }
  }


  
  </script>