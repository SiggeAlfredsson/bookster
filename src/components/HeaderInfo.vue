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
          return "guest";
        } else {
          return this.role?.toLowerCase() + " " + this.username 
        }
      }
    }
  }


  
  </script>