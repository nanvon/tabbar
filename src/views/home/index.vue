<template>
  <div>
    <h2>首页</h2>
    <p>Store is {{ $store.getters.powerCounter }}</p>
    当前IP为{{ data.origin }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "index",
  data() {
    return {
      data: ''
    }
  },
  created() {
    axios({
      url: "https://httpbin.org/ip",
      method: "GET"
    }).then(res => {
      console.log('获取成功' + res.data.origin);
      console.log(res)
      this.data = res.data;
    });
  }
}
</script>

<style scoped>

</style>
