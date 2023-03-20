<template>
  <ul>
    <todo-item v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </ul>
</template>

<script>
export default {
  name: 'todo-list',
  props: ['todos'],
}
</script>

<!-- scoped -> es solo para este componente -->
<style scoped>
ul {
  list-style-type: none;
}
</style>