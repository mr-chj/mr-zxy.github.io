<template>
<div id="z_content">
    <div class="box" ref="z_home_box">
		<ul v-for="i in 2" :key="i" ref="z_home_ul"></ul>
	</div>
</div>
</template>
<script>
export default {
    data(){
        return{
			arr:[],
            n:1,
			item:'',
			list:[
					{src:'https://cbu01.alicdn.com/img/ibank/2019/507/435/11856534705_905054364.220x220.jpg',title:"吊具 吊篮 输液 输液瓶用吊具 50ml 100ml 250ml 500ml输液套"},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/144/195/12427591441_1436047495.220x220.jpg',title:"厂家定做批发一次性杯子9盎司定制logo订做加厚广告纸杯水杯印字"},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/628/883/12052388826_246538573.220x220.jpg',title:'企业宣传单印刷画册印唰设计彩印折页北京画册印制公司产品说明书'},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/137/369/12364963731_1135677412.220x220.jpg',title:'厂家直销30mm宽2米电动车捆绑行李绳摩托车绑带乳胶丝高弹力拉绳'},
					{src:"https://cbu01.alicdn.com/img/ibank/2019/480/474/12551474084_338307474.220x220.jpg",title:"创意地域古风建筑烫金和纸胶带定制装饰手账胶带贴纸来图订做印刷"},
					{src:"https://cbu01.alicdn.com/img/ibank/2019/950/883/12473388059_338307474.220x220.jpg",title:'彩色手撕不留胶广告宣传促销礼品赠品和纸胶带套装胶带定制'},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/739/740/12392047937_1705237702.220x220.jpg',title:'PET耐高温不脱胶电镀喷漆遮蔽绝缘保护33米 绿色高温胶带'},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/136/006/11309600631_772165893.220x220.jpg',title:'厂家批发手提5kg大米袋 大米包装袋塑料纸袋定制杂粮袋小米袋定做'},
					{src:'https://cbu01.alicdn.com/img/ibank/2019/594/594/10843495495_1628351514.220x220.jpg',title:'华联工厂休闲食品包装袋定做镀铝箔零食防潮彩印干果坚果饼干佳果'},
					]
        }
    },
    methods: {
        creat(){
            for(var i=0;i<this.list.length;i++){
                var oLi = document.createElement('li');
				var img=document.createElement('img')
				var op=document.createElement('p')
					img.style.width=100%
					oLi.appendChild(img)
					oLi.appendChild(op)
					this.list[i].title.length>=12?op.innerHTML=this.list[i].title.slice(0,12)+'...':this.list[i].title;
					img.src=this.list[i].src
                this.arr[0].appendChild(oLi);
				this.arr.sort((a,b)=>{
					return a.offsetHeight - b.offsetHeight;
				})
			}
        }
    },
    mounted(){ 
		for(var i=0;i<this.$refs.z_home_ul.length;i++){
            this.arr[i] =this.$refs.z_home_ul[i];
        }
        this.creat()
    }
}
</script>
<style lang="scss">
#z_content{
	.box{
		ul{
			width: 50%;
			float: left;
			li{
				margin: 4px;
				min-height: 20px;
				background: #ffffff;
				position: relative;
				img{
					width: 100%;
					vertical-align: top;
				}
				p{
					padding: 10px 0;
					font-size: 12px;
					position:absolute;
					bottom: 0px;
					background: rgba(5, 5, 5, 0.8);
					color: #ffffff;
					width: 100%;
					text-align: center;
				}
			}
		}
	}
}
</style>