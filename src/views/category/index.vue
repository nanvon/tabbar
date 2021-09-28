<template>
  <div>
    <h2>分类</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <p>{{ $store.getters.powerCounter }}</p>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
