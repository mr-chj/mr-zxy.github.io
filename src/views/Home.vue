<template>
  <div id="home">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="header">
      <div class="header-top">
        <div class="logo">
            <div class="img"><img src="//gw.alicdn.com/tfs/TB13aDCc.T1gK0jSZFrXXcNCXXa-124-60.png"></div>
        </div>
        <div class="solo">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="请输入你要输入的内容">
        </div>
        <div class="sao">
            <span class="iconfont icon-saoyisao"></span>
        </div>
      </div>
      <div class="header-bottom">
        <div class="nav">
          <ul>
            <router-link tag="li" v-for="(i,idx) in home_nav" :key="idx" :to="'/'+i.href">
              <div class="bj">
                <img :src="i.src" alt="海鲜花港 - 郁金香">
              </div>
              <div class="tit">
                  <p>{{i.title}}</p>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
        <img src="//img.alicdn.com/tfs/TB1ij9qnPDpK1RjSZFrXXa78VXa-1040-354.png">
    </div>
    <div class="content">
      <div class="nav">
          <div class="sco">
            <ul ref="con_ul" id="zz">
              <li v-for="(i,idx) in content_nav" :key="idx" ref="con_li" id="con_li">{{i}}</li>
            </ul>
          </div>
      </div>
      <div class="z_cont">
          <z_content></z_content>
      </div>
      
    </div>
            <!-- <HelloWorld>
                  匿名如果想用必须加上default 
                   <template v-slot:todo>
                    任意内容
                    <p>我是匿名插槽 </p>
                  </template> 
                   <template v-slot:todo>
                      任意内容
                    <p>我是匿名插槽</p>
                  </template> 
                  <template v-slot:[dynamicSlotName]>
                    <p>ssss</p>
                  </template> 
                  <template slot-scope="user">
                      {{user}}{{dynamicSlotName}}
                  </template>
                  <template v-slot:todo>aa</template>
            </HelloWorld> -->
</van-pull-refresh>
        
  </div>
</template>
<script>
import no1 from '../assets/no1.png'
import no2 from '../assets/no2.png'
import no3 from '../assets/no3.png'
import no4 from '../assets/no4.png'
import no5 from '../assets/no5.png'
export default {
  name: "home",
  data(){
    return{
      isLoading: false,
      home_nav:[{
        src:no2,title:'二手手机',href:"home/mobile"
      },{
        src:no3,title:'游戏交易',href:"home/game"
      },{
        src:no4,title:'二手图书',href:"home/books"
      },{
        src:no1,title:'潮品',href:"home/shop"
      },{
        src:no5,title:'全部分类',href:"home/classify"
      }],
      content_nav:['关注','新鲜','附近','手机','数码','租房','服装','居家','美妆','运动','家电','玩具乐园','短租'],

    }
  },
  components: {
  },
  methods:{
 onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        console.log('成功了')
      }, 500);
    }
  },
  mounted () {
  this.$refs.con_ul.style.width=this.$refs.con_li[0].offsetWidth*this.$refs.con_li.length+this.$refs.con_li[0].offsetLeft*(this.$refs.con_li.length*2)+40+'px'
  // console.log(getComputedStyle(con_li[0],null).margin)
  // var c=document.getElementById(con_li)

  },
};
</script>
<style lang="scss" scoped>
#home{
  .van-pull-refresh{
    overflow:inherit;
}
  .content{
    .nav{
      padding: 5px 0;
      height: 15px;
      overflow: hidden;
    .sco{
    overflow-x:auto ;
    padding-bottom: 20px;
      }
      width: 100%;
      ul{
      overflow: hidden;      
        li{
          float: left;
          font-size: 14px;
          text-align: center;
          padding: 0px 17px;
          margin: 0 10px;
          }
      }
    }
    
  .z_cont{
    overflow: hidden;
    ul{
      overflow: hidden;
      li{
        width: 50%;
        float: left;
        position: relative;
        top: 10px;
        img{
          width: 100%;
        }
      }
    }
  }
  }
  //banner
  .banner{
    background: rgb(242,243, 242);
    padding: 20px 0 0 0;
    min-height: 122px;
    img{
      width: 100%;
      vertical-align: top;
    }
  }
  //头部
  .header{
    .header-bottom{
      padding: 40px 20px 0 20px;
      background: yellow;
      .nav {
        ul {
          background: #ffffff;
          border-radius: 20px;
          display: flex;
          padding: 5px 0;
          position:relative;
          top: 10px;
          li {
            text-align: center;
            flex: 1;
            font-size: 0px;
            .bj{
              height: 25px;
              padding: 5px 0;
              width: 30px;
              border-radius: 20px;
              display: inline-block;
              overflow: hidden;
              img{
                width: 100%;
              }
            }
            .tit{
              padding: 3px 0;
            }
            .tit p{
              font-size: 12px;
              color: black;
            }
          }
        }
      }
    }
    .header-top{
      padding-top: 5px;
      line-height: 25px;
      display: flex;
      background: yellow;
      position: fixed;
      z-index: 9;
      width: 100%;
      padding-bottom: 3px;
      .logo{
        flex: 2;
        text-align: center;
        .img{
          width: 50px;
          display: inline-block;
          transform:translateY(13%);
        img{
          width: 100%;
          }
        }
        
      }
      .solo{
        flex: 7;
        position: relative;
        padding-top: 3px;
        input{
          width: 85%;
          height: 25px;
          outline: none;
          border: none;
          position: relative;
          top: -3px;
          padding-left:30px; 
          border-radius: 25px;
          color: #cccccc;
        }
        ::-webkit-input-placeholder { 
          font-size: 12px;
          color: #cccccc;
        }
        i{
          font-size: 16px;
          position: absolute;
          z-index: 99;
          top: 2px;
          left: 7px;
          color: #cccccc;
        }
      }
      .sao{
        flex: 1;
        text-align:center;
        span{
          font-size: 24px;
          color: black;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
