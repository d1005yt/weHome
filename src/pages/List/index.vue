<template>
    <div style="width:100%;height:100%">
        <el-button class="back" type="primary" @click="back" icon="el-icon-back" circle></el-button>
        <div class="title">
            <el-button class="titleButton" style="margin:0" @click="routerTo" round>短信功能</el-button>
            <el-button class="titleButton" style="margin:0;background: #c559;" round>列表数据</el-button>
         </div>
        <el-table border v-loading="loading" :data="tableData" style="width: 40%; margin: 100px auto;max-width:500px" :row-class-name="tableRowClassName">
            <el-table-column prop="id" align="center" label="序号" min-width="30">
            </el-table-column>
            <el-table-column prop="name" align="center" label="姓名" min-width="100">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import  {reqSMSInfo} from '@/api/index'
export default {
  name: '',
    data(){
        return{
            tableData:[],
            loading:true
        }
    },

    mounted(){
        this.getSMSInfo()
    },

    methods:{
        async getSMSInfo(){
            let res = await reqSMSInfo()
            this.tableData=res
            this.loading=false
        },

        tableRowClassName({row, rowIndex}) {
            if (rowIndex%4 == 1) {
                return 'warning-row';
            } else if (rowIndex%4 == 3) {
                return 'success-row';
            }
            return '';
        },

        routerTo(){
            this.$router.push('/sms')
        },
        
        back(){
            this.$router.push('/')
        }
    }
}
</script>

<style lang="less" scoped>
.back{
    position:absolute;
    left: 20px;
    top: 50%;
     margin-top:-20px;
}
.title{
    position:absolute;
    right: 20px;
    top: 50%;
    display: flex;
    flex-direction: column;
    height: 110px;
    margin-top:-55px;
    justify-content: space-between;
    .titleButton{
        background: #ffffff57;
        border: 2px solid #eee;
        color: #fff;
        font-size: 16px;
    }
    .titleButton:hover{
        background: #ffffff99;
        border: 2px solid #eee;
    }
}
/deep/.el-table .warning-row {
    background: oldlace;
  }

 /deep/.el-table .success-row {
    background: #f0f9eb;
  }
</style>
