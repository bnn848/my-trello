
<template>
  <form @submit.prevent="addList" class="addlist">
    <input
      type="text"
      v-model="title"
      class="text-input"
      placeholder="Add new list"
    >
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<!--
submit.prevent <--- submit時にリロードしないようにする。
@submit="addList" <--- scriptで記述するaddListメソッドを実行する。
v-model <--- v-vind:title + v-on:title = $event.target.valueと等価。

-->

<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },

  methods: function() {
    this.$store.dispath('addlist', {title: this.title})
    this.title = ''
  }
}
</script>

<!--
this.$store.dispath('addlist', {title: this.title})
$storeに対してaction(addListのこと)を投げる。引数2にdataのtitleを渡す。

-->