<template>
    <div style="width:100%;height:100%;">
        <div class="title">
          <div class="item" @click="toRoute('sms')">
            短信功能
          </div>
          <div class="item" @click="toRoute('list')">
            列表数据
          </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data(){
        return{
            left:0,
        }
    },
    mounted(){
        //this.changeLeft()
    },
    methods:{
        toRoute(path){
            this.$router.push(path)
        }
    }
}
</script>

<style lang="less" scoped>
.title{
    width: 400px;
    display: flex;
    justify-content: space-around;
    margin: 200px auto;
    .item{
        width: 100px;
        height: 100px;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 100px;
        background: #ccd8e485;
        transition:all .5s
    }
    .item:hover{
        color: #fff;
        background: #455d7585;
        transform: scale(1.2);
    }
}
</style>
