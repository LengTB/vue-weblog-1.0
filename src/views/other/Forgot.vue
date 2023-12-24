<template>
  <div class="forgotPwd">
   <img src="@/assets/memes/找个劳坐.jpg" alt="">
  </div>
</template>

<script>
export default {
    name:"ForgotPwd",

    created(){
      setTimeout(()=>{
        this.$message.info("我也是服了！回去想想吧！")
      },1000)
      //定时器，定时3后跳转
      setTimeout(()=>{
        this.$router.push("/login");
      },3000)
    }
}
</script>

<style lang="less" scoped>

.forgotPwd{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
}
</style>>
