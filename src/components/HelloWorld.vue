<template>
  <div class="hello">
      全局组件
      <!-- <slot name="todo">我是默认值</slot> -->
      <!-- <slot :user="user">{{ user}}</slot> -->
      <slot :data="data"></slot>
      <slot name="todo"></slot>
  </div>
</template>

<script>
export default {
 data(){
   return{
    //  user:10
    data:['1','2','3','4','5']
   }
 }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
