<template>
    <div style="width:100%;height:100%;">
        <div class="title">
           
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
        changeLeft(){
            let left=setInterval(()=>{
                if(this.left>1000){
                    this.left=0
                }
                this.left++
            },)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
