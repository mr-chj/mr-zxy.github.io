<template>
  <div id="issue">
    <!--万 《发布》-->
    <div class="content">
      <div class="fphs">
        <!-- <img src="../../public/1_03.gif" alt="" /> -->
        <img src="../assets/w/banen.png" />
        <ul>
          <li>
            <h3>旧衣回收</h3>
            <p>帮助有需要的TA</p>
          </li>
          <li>
            <h3>卡券回收</h3>
            <p>各类电子券加价20%</p>
          </li>
          <li>
            <h3>发布租房</h3>
            <p>免中介费</p>
          </li>
          <li>
            <h3>扫码卖书</h3>
            <p>扫条姓码卖书更方便</p>
          </li>
          <li>
            <h3>手机回收</h3>
            <p>最高多赚520元</p>
          </li>
          <li>
            <h3>免费送</h3>
            <p>换咸鱼币，换好物</p>
          </li>
        </ul>
      </div>
      <div class="sjhs">
        <ul>
          <li>
            <h3>上门回收</h3>
            <p>57类免费上门</p>
          </li>
          <li>
            <h3>淘宝转发</h3>
            <p>一键发布</p>
          </li>
          <li>
            <h3>手机寄卖</h3>
            <p>48小时帮你卖掉</p>
          </li>
        </ul>
        <div class="xiangji">
          <div class="xiangji-content">
            <div class="img">
              <img :src=no1 />
            </div>
            <div class="col">
              <h3>发布闲置</h3>
              <p>相册/拍照/拍视频</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import no1 from '../assets/w/camera.png'
export default {
	data(){
		return{
			no1:no1
		}
	}
};
</script>
<style scoped>
#issue {
  width: 100%;
  height: auto;
}
.content {
  width: 95%;
  height: auto;
  margin: 0 auto;
}
.fphs {
  width: 100%;
  height: 400px;
}
.fphs img {
  width: 100%;
}
.fphs ul li {
  width: 30%;
  height: 60px;
  border-radius: 8px;
  float: left;
}
.fphs ul li:nth-of-type(1) {
  width: 30%;
  height: 60px;
  background: #fff5f4;
  color: #f66a69;
  font-size: 12px;
}
.fphs ul li:nth-of-type(2) {
  width: 35%;
  height: 60px;
  background: #eef7ff;
  margin-left: 5px;
}
.fphs ul li:nth-of-type(3) {
  width: 30%;
  height: 60px;
  background: #eef7ff;
  margin-left: 7px;
}
.fphs ul li:nth-of-type(4) {
  width: 35%;
  height: 60px;
  background: #eef7ff;
  margin-top: 10px;
}
.fphs ul li:nth-of-type(5) {
  width: 30%;
  height: 60px;
  background: #f2fce4;
  margin-left: 7px;
  margin-top: 10px;
}
.fphs ul li:nth-of-type(6) {
  width: 30%;
  height: 60px;
  background: #f6f2ff;
  margin-left: 7px;
  margin-top: 10px;
}
.fphs ul li h3 {
  margin-left: 10px;
  margin-top: 10px;
}
.fphs ul li p {
  margin-left: 10px;
  font-size: 12px;
  margin-top: 5px;
}
.sjhs {
  height: 300px;
}
.sjhs ul {
  height: 70px;
}
.sjhs ul li {
  float: left;
  width: 31%;
  height: auto;
  background: #f8f8f8;
  border-radius: 8px;
}
.sjhs ul li h3 {
  margin-top: 10px;
  text-align: center;
}
.sjhs ul li p {
  margin-top: 10px;
  text-align: center;
}
.sjhs ul li:nth-of-type(2) {
  margin-left: 10px;
}
.sjhs ul li:nth-of-type(3) {
  margin-left: 10px;
}
.xiangji {
  background: #fee71d;
  border-radius: 8px;
  padding: 10px 60px;
}
.xiangji-content {
  display: flex;
  align-items: center;
}
.xiangji-content img {
  width: 100%;
  height: 100%;
}
.xiangji-content h3 {
  margin-left: 10px;
  position: relative;
  top: 3px;
}
.xiangji-content p {
  margin-top: 10px;
  margin-left: 10px;
  position: relative;
  top: -2px;
}
.xiangji-content .img {
  width: 40px;
  height: 60px;
  background: #cccccc;
  flex: 3;
}
.xiangji-content .col {
  flex: 7;
}
</style>