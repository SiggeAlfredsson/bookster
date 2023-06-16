<!-- 

  This view is showed when at /home and signed in as USER
  A view that displays the bookList component. 
 -->
 


<template>
  <BookList/>
</template>

<script lang="ts">
import BookList from '@/components/BookList.vue';

export default {
  components: {
    BookList,
  }
}

</script>

<style scoped>

</style>