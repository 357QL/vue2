
<template>
  <div>
    <h2>Home</h2>
    <button @click="goToAbout" class="btn btn-success">go to about</button>
  </div>
</template>
<script>
  export  default {
    methods:{
       goToAbout(){
      //跳转到上一次浏览页面
      this.$router.go(-1)
      // 指定跳转地址
      this.$router.replace("/meun")

      // 指定跳转路由的名字下
      this.$router.replace({name:'meunLink'})

      // 通过push 跳转 可以带参数跳转
          this.$router.push({name:'meunLink'})
  }
    }
  }
</script>
