<template>
  <input class="input" type="text" placeholder="Search query..." v-model="query" @input="emitSearchQuery">
</template>



<!-- Need to add timer, check old project -->
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
  height: 60px;
  width: 400px;
  margin-top: 30px;
  margin-left: 60px;
  margin-bottom: 10px;

  border: 1px solid black;
  padding-left: 30px;
  font-size: 25px;
}



</style>
