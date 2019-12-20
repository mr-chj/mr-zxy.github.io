<template>
  <div class="fishpond">
    <div class="nav">
      <router-link to="c_fishpond_seek">
        <mt-button style="float: left;font-size: 20px;" size="small">🔍</mt-button>
      </router-link>
      <mt-button size="small" @click.native.prevent="active = 'tab-container1'">
        <!-- {{active}} tab-container1  -->
        <span :class="{c_bian:active=='tab-container1'}">我加入的</span>
      </mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container2'">
        <span :class="{c_bian:active=='tab-container2'}">推荐</span>
      </mt-button>
      <mt-button size="small" @click.native.prevent="active = 'tab-container3'">
        <span :class="{c_bian:active=='tab-container3'}">找鱼塘</span>
      </mt-button>
      <mt-button
        style="float: right; background: white;border-radius:18px; padding: 0 10px;"
        size="small"
      >发布</mt-button>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
          <!-- 我加入的 -->
          <div class="header">
            <div class="header_cont">
              <div style="padding: 12px;">
                <h3>最近访问的鱼塘</h3>
                <div style="display: flex;">
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--bodys-->
          <div class="bodys">
            <div class="bodys_cont">
              <h3>为你推荐的鱼塘</h3>
              <div class="b_cont_item" v-for="(i,idx) in c_no1" :key="idx">
                <div style="flex: 2;padding:0 6px">
                  <img style="width:100%; border-radius: 10px;" :src="i.img" alt />
                </div>
                <div style="flex: 5;">
                  <p>{{i.tit}}</p>
                  <p style="font-size:12px;line-height:34px">{{i.con}}</p>
                </div>
                <div style="flex: 3;text-align: right;">
                  <mt-button type="default">进鱼塘</mt-button>
                </div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container2">
          <!-- 推荐 -->
          <div class="header">
            <div class="header_cont">
              <div style="padding: 12px;">
                <h3>最近访问的鱼塘</h3>
                <div style="display: flex;">
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                  <div class="cont_item">
                    <img
                      src="http://img3.imgtn.bdimg.com/it/u=1020771565,2453337692&fm=26&gp=0.jpg"
                      alt
                    />
                    <div style="font-size: 12px;">翡翠发烧友</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bodys">
            <div class="bodys_cont">
              <div class="b_c_box">
                <div class="b_c_item" v-for="(i,idx) in c_s_list" :key="idx">
                  <div style="padding:0px 5px">
                    <img :src="i.img" alt />
                  </div>
                  <p style="color:black;font-weight:800;font-szie:12px">{{i.tit}}</p>
                  <p style="color:red;font-weight:800">￥{{i.pre}}</p>
                </div>
              </div>
            </div>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="tab-container3">
          <!-- 找鱼塘 -->
          <div class="c_z_no3">
            <div class="header">
              <div class="header_cont">
                <div style="padding: 12px;">
                  <h3>
                    <span style="line-height: 0.88rem;">分类找鱼塘</span>
                    <span style="flex:1;text-align: right;">
                      <mt-button size="small">全部鱼塘></mt-button>
                    </span>
                  </h3>
                  <ul class="c_header_list">
                    <li v-for="(i,$index) in c_no3_list" :key="$index">
                      <span>
                        <img :src="i.img" alt />
                      </span>
                      <span>{{i.tit}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- no3_bodys -->
            <div class="c_no3_bodys">
              <div class="c_no3_bodys_box">
                <h3>
                  <span style="line-height: 0.88rem;">魚塘任意門</span>
                  <span style="flex:1;text-align: right;">
                    <mt-button size="small">換一換☺</mt-button>
                  </span>
                </h3>
                <div class="c_no3_b_cont">
                  <div style="width: 270%;display: flex;">
                    <div
                      class="c_no3_b_cont_item"
                      v-for="(i,$index) in c_no3_b_cont_banner"
                      :key="$index"
                    >
                      <div class="c3_b_left">
                        <img :src="i.img" alt />
                      </div>
                      <div class="c3_b_right">
                        <p>{{i.tit}}</p>
                        <p>{{i.cont}}</p>
                        <p>{{i.rush}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
              <!--chj_yutang1开始  -->
                <chj_yutang1></chj_yutang1>
              <!--chj_yutang1结束  -->
            <!-- no3_bodys -->
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-tab-container",
  data() {
    return {
      active: "tab-container1",
      c_no3_b_cont_banner: [
        {
          uid: 0,
          img:
            "http://img5.imgtn.bdimg.com/it/u=575218490,1854413661&fm=26&gp=0.jpg",
          tit: "大學生了沒",
          cont: "66.3萬大學生在這裡",
          rush: "匆匆那年，校園閒置.."
        },
        {
          uid: 1,
          img:
            "http://img5.imgtn.bdimg.com/it/u=221138849,1448348988&fm=15&gp=0.jpg",
          tit: "大學生了沒",
          cont: "66.3萬大學生在這裡",
          rush: "匆匆那年，校園閒置.."
        },
        {
          uid: 2,
          img:
            "http://img3.imgtn.bdimg.com/it/u=1409211898,3326417295&fm=15&gp=0.jpg",
          tit: "大學生了沒",
          cont: "66.3萬大學生在這裡",
          rush: "匆匆那年，校園閒置.."
        }
      ],
      c_no3_list: [
        {
          uid: 0,
          img:
            "http://img3.imgtn.bdimg.com/it/u=1883505472,3797175453&fm=26&gp=0.jpg",
          tit: "穿搭"
        },
        {
          uid: 1,
          img:
            "http://img5.imgtn.bdimg.com/it/u=2885006664,1641131637&fm=26&gp=0.jpg",
          tit: "數碼家電"
        },
        {
          uid: 2,
          img:
            "http://img1.imgtn.bdimg.com/it/u=2998991841,2871858728&fm=26&gp=0.jpg",
          tit: "美食旅行"
        },
        {
          uid: 3,
          img:
            "http://img3.imgtn.bdimg.com/it/u=2127096240,2909283673&fm=26&gp=0.jpg",
          tit: "美妝"
        },
        {
          uid: 4,
          img:
            "http://img0.imgtn.bdimg.com/it/u=2216205495,2371369945&fm=26&gp=0.jpg",
          tit: "母嬰"
        },
        {
          uid: 5,
          img:
            "http://img2.imgtn.bdimg.com/it/u=2573457294,518440418&fm=11&gp=0.jpg",
          tit: "運動"
        },
        {
          uid: 6,
          img:
            "http://img5.imgtn.bdimg.com/it/u=3114920784,1876548627&fm=11&gp=0.jpg",
          tit: "二次元"
        },
        {
          uid: 7,
          img:
            "http://img5.imgtn.bdimg.com/it/u=836455311,2609649818&fm=11&gp=0.jpg",
          tit: "文化藝術"
        },
        {
          uid: 8,
          img:
            "http://img4.imgtn.bdimg.com/it/u=1688713371,1598843233&fm=26&gp=0.jpg",
          tit: "文玩"
        },
        {
          uid: 9,
          img:
            "http://img1.imgtn.bdimg.com/it/u=2043292100,3065695293&fm=26&gp=0.jpg",
          tit: "復古"
        }
      ],
      c_no1: [
        {
          img:
            "http://img0.imgtn.bdimg.com/it/u=3256100974,305075936&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=1321463267,128419202&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img3.imgtn.bdimg.com/it/u=1912113785,1587702892&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img4.imgtn.bdimg.com/it/u=2946044863,354150627&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=1808414103,3902583560&fm=11&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=2369017631,3935728806&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img5.imgtn.bdimg.com/it/u=4263563147,154474882&fm=11&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        },
        {
          img:
            "http://img4.imgtn.bdimg.com/it/u=1478500166,2908207380&fm=26&gp=0.jpg",
          tit: "大学生鄙俚圈",
          con: "33.5万大学生都在这里"
        }
      ],
      c_s_list: [
        {
          uid: 0,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01rYISs41Lfo8qTJL79_!!0-fleamarket.jpg",
          tit: "台湾释迦摩尼果净重大果",
          pre: "11.80"
        },
        {
          uid: 1,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01hW0Haj206uB3Bsb7Q_!!0-fleamarket.jpg",
          tit: "怡思丁防晒霜50ml",
          pre: "59.00"
        },
        {
          uid: 2,
          img:
            "http://img.alicdn.com/bao/uploaded/i3/O1CN010KnN3D1g3tIO67e2D_!!0-fleamarket.jpg",
          tit: "欧舒丹护手霜30ml*3礼盒装 (全新)",
          pre: "60.00"
        },
        {
          uid: 3,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01NDSdF61lxpknUSVkX_!!0-fleamarket.jpg",
          tit: "毒包装 aj1 白丝绸 铜线",
          pre: "238.00"
        },
        {
          uid: 4,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01AGhGXX1KZZ8qkpubE_!!0-fleamarket.jpg",
          tit: "阿玛尼405.402",
          pre: "65.00"
        },
        {
          uid: 5,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01WPiwcR1mo2tU911ON_!!0-fleamarket.jpg",
          tit: "正宗牛肉干 西藏手撕牦牛肉干 风干牛肉干",
          pre: "59.90"
        },
        {
          uid: 6,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01sV1yi51qpCMolquNz_!!0-fleamarket.jpg",
          tit: "祖玛珑祖马龙香水小样五件套装盒专柜正品蓝风铃橙花英国梨小苍兰",
          pre: "85.00"
        },
        {
          uid: 7,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/O1CN01reqHMh1uvOAoZ9I5B_!!0-fleamarket.jpg",
          tit: "帝奥椰子500黑武士骨白色炭黑海盐雾蓝沙漠黄米丁黄白灰色海",
          pre: "168.00"
        },
        {
          uid: 8,
          img:
            "http://img.alicdn.com/bao/uploaded/i4/TB2wNI4sGAoBKNjSZSyXXaHAVXa_!!0-fleamarket.jpg",
          tit: "紫米面包",
          pre: "18.90"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.fishpond {
  background: #f2f3ee;
}

.page-tab-container {
  padding-bottom: 10px;
  margin-top: -50px;
}

.nav {
  padding-top: 10px;
  text-align: center;
  background: #fee70f;
  min-height: 50px;
  padding-bottom: 60px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  .mint-button--default {
    background: transparent;
    .c_bian {
      border-bottom: 2px solid black !important;
      padding-bottom: 5px !important;
    }
  }
}

.header {
  position: relative;
  padding-bottom: 10px;
  .header_cont {
    width: 94%;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    .cont_item {
      flex: 1;
      padding-right: 30px;
      text-align: center;
      img {
        width: 50px;
      }
    }
  }
}

.bodys {
  width: 94%;
  margin: 0 auto;
  .bodys_cont {
    .b_cont_item {
      display: flex;
      padding: 15px 0px;
      border-bottom: 1px solid #cccccc;
    }
    padding: 15px;
    background: white;
    border-radius: 20px;
    overflow: hidden;
    h3 {
      font-size: 18px;
    }
    .b_c_box {
      display: flex;
      flex-wrap: wrap;
      .b_c_item {
        width: 50%;
        float: left;
        img {
          width: 100%;
          border-radius: 10px;
        }
        p {
          line-height: 30px;
        }
      }
    }
  }
}
.c_z_no3 {
  .header_cont {
    h3 {
      display: flex;
    }
    .c_header_list {
      display: flex;
      flex-wrap: wrap;
      li {
        float: left;
        width: 18%;
        text-align: center;
        padding: 10px 1%;
        span {
          font-size: 12px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .c_no3_bodys {
    width: 94%;
    margin: 0 auto;
    border-radius: 30px;
    background: white;
    .c_no3_bodys_box {
      background-image: url("https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3322506931,1176740860&fm=26&gp=0.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    h3 {
      display: flex;
      padding: 0 12px;
    }
    .c_no3_b_cont {
      width: 100%;
      overflow-y: auto;
      .c_no3_b_cont_item {
        flex: 1;
        border-radius: 10px;
        padding: 10px;
        overflow: hidden;
        background: white;
        margin: 15px 10px;
      }
      .c3_b_left {
        width: 30%;
        float: left;
        img {
          width: 100%;
        }
      }
      .c3_b_right {
        padding-left: 34%;
      }
    }
  }
}
</style>