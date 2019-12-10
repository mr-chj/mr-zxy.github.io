<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>赵旭阳</p>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    我第二次修改了
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
