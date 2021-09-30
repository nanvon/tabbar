<template>
  <div>
    <h2>首页</h2>
    <p>Store is {{ $store.getters.powerCounter }}</p>
    当前IP为{{ data.origin }}
  </div>
</template>

<script>

import axios from "axios";

axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 5000;

export default {
  name: "index",
  data() {
    return {
      data: ''
    }
  },
  created() {
    // axios({
    //   url: "https://httpbin.org/ip",
    //   method: "GET"
    // }).then(res => {
    //   console.log('获取成功' + res.data.origin);
    //   console.log(res)
    //   this.data = res.data;
    // });

    // axios发送并发请求
    /*axios.all([axios({
      url: '/user-agent'
    }), axios({
      url: '/ip'
    })]).then(res => {
        console.log('ip agent successfully')
        const [userAgent, ip] = res
        console.log(userAgent.data['user-agent'])
        console.log(ip.data['origin'])
      }
    )*/
  }
}
</script>

<style scoped>

</style>
