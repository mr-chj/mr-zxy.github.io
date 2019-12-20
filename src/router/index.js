import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  //首页跳转路由
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home/mobile",
    name: "home.mobile",
    component:()=>import("../views/home_mobile.vue")
  },
  {
    path: "/home/game",
    name: "home.game",
    component:()=>import("../views/home_game.vue")
  },
  {
    path: "/home/books",
    name: "home.books",
    component:()=>import("../views/home_books.vue")
  },
  {
    path: "/home/shop",
    name: "home.shop",
    component:()=>import("../views/home_shop.vue")
  },
  {
    path: "/home/classify",
    name: "home.classify",
    component:()=>import("../views/home_classify.vue")
  },
  {
    path: "/fishpond",
    name: "fishpond",
    component: () => import("../views/fishpond.vue")
  },
  {
    path: "/issue",
    name: "issue",
    component: () => import("../views/issue.vue")
  },
  // 底部栏消息内容跳转路由
  {
    path: "/news",
    name: "news",
    component: () => import("../views/news.vue")
  },
  {
    path: "/news/tongzhi",
    name: "news.tongzhi",
    component: () => import("../views/news_tongzhi.vue")
  },
  {
    path: "/news/xiaoxi",
    name: "news.xiaoxi",
    component: () => import("../views/news_xiaoxi.vue")
  },
  {
    path: "/news/huodon",
    name: "news.huodon",
    component: () => import("../views/news_huodon.vue")
  },
  {
    path: "/news/yutang",
    name: "news.yutang",
    component: () => import("../views/news_yutang.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/mine.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
