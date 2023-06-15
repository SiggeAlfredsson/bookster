<!-- 

  Just a text input, a search bar to display when able to search, either books or users.

  GPT helped me a little to make emotSearchQuery work.. OK or redo not 100 how it works atm?

 -->

<template>
  <input class="input" type="text" placeholder="Search query..." v-model="query" @input="emitSearchQuery">
</template>

<!-- Need to add timer, check weather app project -->
<script lang="ts">
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    emitSearchQuery() {
      this.$emit('searchQueryUpdated', this.query);
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
