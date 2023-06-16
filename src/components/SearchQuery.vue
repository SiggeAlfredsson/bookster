<!-- 

  Just a text input, a search bar to display when able to search, either books or users. Anything you want !
  With a timeout to keep the api calls to the low. Search instant when pressing enter

 -->

<template>
  <input class="input" type="text" placeholder="Search query..." v-model="query" @input="handleInput" @keydown.enter="search">
</template>

<script lang="ts">
export default {
  data() {
    return {
      query: '',
      timeout: null as number | null
    };
  },
  methods: {
    handleInput() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.search();
      }, 2000) as number;
    },
    search() {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      // console.log(this.city)

      this.$emit('search', this.query);



    },
  },
};
</script>


<style scoped>
.input {
  height: 40px;
  width: 300px;
  margin-top: 30px;
  margin-left: 60px;
  margin-bottom: 10px;

  border: 1px solid black;
  padding-left: 30px;
  font-size: 25px;
}
</style>
