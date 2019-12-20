<template>
  <div id="app">
    <mt-tabbar v-model="selected">
      <mt-tab-item id>
        <i class="iconfont icon-shouye"></i>
        <p>闲鱼</p>
      </mt-tab-item>
      <mt-tab-item id="fishpond">
        <i class="iconfont icon-yutangbiaoshi-danchuang"></i>
        <p>鱼塘</p>
      </mt-tab-item>
      <mt-tab-item id="issue">
        <i class="iconfont icon-bai-zhilei"></i>
        <div class="home_iss">
          <div class="home_issue">
            <i class="iconfont icon-shizicha"></i>
          </div>
        </div>
        <p>发布</p>
      </mt-tab-item>
      <mt-tab-item id="news">
        <i class="iconfont icon-xiaoxi"></i>
        <p>消息</p>
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i class="iconfont icon-Icon_wode"></i>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>

    <transition name="Skright" mode="out-in">
      <keep-alive>
      <router-view ></router-view>
      </keep-alive>
  </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods: {},
  watch: {
    selected(a, b) {
      console.log(a, b);
      this.$router.push({
        path: "/" + a
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.Skright-enter-active,
.Skright-leave-active,
.Skleft-enter-active,
.Sklef-leave-active {
  transition: all 200ms;
}

.Skright-enter,.Skleft-leave-to {
  transform: translateX(100%)
}
.Skright-leave-to,.Skleft-enter{
  transform: translateX(-100%)
}

.mint-tabbar {
  position: fixed;
  z-index: 9;
}
#app{
  padding-bottom:50px; 
  overflow: hidden;
}
#app .mint-tabbar > .mint-tab-item.is-selected {
  font-size: 14px;
  background: none;
  p {
    color: black;
  }
  i {
    color: yellow;
  }
  .icon-shizicha {
    color: black;
  }
}
#app .mint-tab-item {
  padding: 2px 0;
}
#app .mint-tabbar {
  i {
    display: inline-block;
    padding: 3px 0;
  }
  .iconfont {
    font-size: 14px;
  }
  p {
    padding: 2px 0;
  }
  .mint-tab-item {
    position: relative;
  }
  .home_iss {
    width: 30px;
    height: 30px;
    background: #ffffff;
    display: inline-block;
    border-radius: 50%;
    padding: 5px;
    position: absolute;
    top: -16px;
    left: 16px;
    .home_issue {
      width: 30px;
      height: 30px;
      background: yellow;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
