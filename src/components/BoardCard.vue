<template>
  <router-link
    class="board-card"
    :to="{ name: 'board', params: { name, id }}"
  >
    <span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'Board-card',
  props: {
    id: String,
    name: String
  }
}
</script>

<style scoped>
  .board-card{
    background-color: #546e7a;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
    0 2px 5px 0 rgba(49,49,93,.1),
    0 1px 2px 0 rgba(0,0,0,.08);
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    margin: 0.5rem 1.5rem;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: all 600ms ease;
    width: 100%;
    height: 100%;
  }
  @media screen and (mix-width: 600px) {
    .board-card {
      width: 33%
    }
  }
  @media screen and (min-width: 1024px) {
    .board-card{
      width: 250px;
    }
  }
  .board-card:hover{
    background-color: #90a4ae;
    font-weight: bold
  }
  .board-card-title {
    font-size: 1.2rem;
  }

</style>
