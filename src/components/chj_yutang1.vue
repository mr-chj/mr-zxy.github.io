<template>
    <div class="chj_yutang1">
        <div class="chj_com_item">
            <div class="chj_item_title">
                <p>TOP 10 </p>
                <p>文玩爱好者聚集地</p>
            </div>
            <div class="chj_item_cont">
                <ul class="chj_item_cont_ul" v-for="(a,$index) in chj_yutang" :key="$index">
                    <li style="flex:1;padding:7% 0"><span>{{a.num}}</span></li>
                    <li style="flex:2"><img :src="a.logo" alt=""></li>
                    <li style="flex:7;padding-left: 10px;">
                        <p>{{a.logo_tit}}</p>
                        <p>{{a.logo_cont}}</p>
                        <p>{{a.logo_style}}</p>
                    </li>
                </ul>
                <div style="text-align: center;padding:10px 0px">
                   <span>查看更多</span>
                </div>
            </div>
        </div>
    </div>

</template>  

<script>

export default{
    data(){
        return {
            chj_yutang:[
                {uid:0,num:1,logo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435648396,3879384970&fm=26&gp=0.jpg',logo_tit:'复古',logo_cont:'37.4万复古达人在这里',logo_style:'港风复古范'},
                {uid:1,num:2,logo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2804047907,2377496587&fm=26&gp=0.jpg',logo_tit:'复古',logo_cont:'37.4万复古达人在这里',logo_style:'港风复古范'},
                {uid:2,num:3,logo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4177665583,3954494687&fm=26&gp=0.jpg',logo_tit:'复古',logo_cont:'37.4万复古达人在这里',logo_style:'港风复古范'},
            ],
        }
    }
}
</script>



<style lang="scss" scoped>
.chj_yutang1{
    width: 94%;
    margin: 0 auto;
    padding:15px 0px;
    .chj_com_item{
        border-radius: 15px;
        overflow: hidden;
        background: white;
        .chj_item_title{
            background-image:url('https://f10.baidu.com/it/u=1726574660,189006746&fm=72');
            background-size: cover;
            background-repeat: no-repeat;
            padding: 12px;
            color: white;
        }
        .chj_item_cont{
            padding: 12px;
            .chj_item_cont_ul{
                padding: 18px 0;
                display: flex;
                li{
                    span{
                        display: inline-block;
                        padding: 0px 8px;
                        background: red;
                        color: white;
                    }
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
}

</style>