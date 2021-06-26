<template>
  <div>
    <header>My Trelloです</header>
    <main>
      <p class="info-line">All: 0 Tasks</p>
      <list-add />
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'

export default {
  components: { ListAdd },
  conponent: {
    ListAdd
  }
}
</script>