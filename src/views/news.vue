<template>
  <div id="news" style="background:#fff;">
    <div style="width:100%;height:150px;background:yellow;position:relative;   ">
      <div style="padding:10px 0">
        <h3 style="text-align:center;font-size:26px;">消息</h3>
      </div>
      <div class="clearfix qq" style="width:90%; background:#fff;border-radius:20px;z-index:999;position:absolute;top:50px;left:5%;box-shadow: 5px 5px 5px #ccc">
        <!-- <div style="width:20%;float:left;font-size:16px;"> -->
        <div>
            <img src="../assets/y/1.png" style="width:80px;" />
            <p><a href="#/news/tongzhi" style="color:#000">通知消息</a></p>
        </div>
        <div>
          <img src="../assets/y/2.png" style="width:80px;" />
          <p><a href="#/news/xiaoxi" style="color:#000">互动消息</a></p>
        </div>
        <div>
          <img src="../assets/y/3.png" style="width:80px;" />
          <p><a href="#/news/huodon" style="color:#000">活动消息</a></P>
        </div>
        <div>
          <img src="../assets/y/4.jpg" style="width:80px;" />
          <p><a href="#/news/yutang" style="color:#000">鱼塘消息</a></p>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <div style="min-height:550px;background:pink">
        <!-- <div class="clearfix" style="width:100%;background:blue;height:150px;margin-top:100px;">
          <div style="float:left; width:20%;">
              <img src="../assets/y/10.png">
          </div>
          <div style="width:70%;float:left">
            <div style="">
                <p style="font-size:20px;">我现在等等</p>
                <P style="font-size:20px;color:#ccc;">哈哈哈哈哈哈哈</P>
                  <P>2天前</P>       
            </div>
            <div style="float:left;">
              <img src="../assets/y/11.png" style="">
            </div>
          </div>
         

        </div> -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
  clear: both;
}
.clearfix {
  zoom: 1;
}
.qq div {
  float: left;
  font-size: 16px;
  width: 20%;
  /* height:150px; */
  /* margin-left:15px;  */
  /* padding:10px; */
  padding: 20px 8px;
  text-align: center;
 
}
</style>