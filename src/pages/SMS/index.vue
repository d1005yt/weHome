<template>
    <div style="width:100%;height:100%">
         <el-button class="back" type="primary" @click="back" icon="el-icon-back" circle></el-button>
         <div class="title">
            <el-button class="titleButton" style="margin:0;background: #c559;" round>短信功能</el-button>
            <el-button class="titleButton" style="margin:0" @click="routerTo" round>列表数据</el-button>
         </div>
        <el-form :model="this" status-icon :rules="rules" ref="ruleForm" style="margin: 150px;text-align: center;" label-width="100px" class="demo-ruleForm">
            <el-col :span="10" :offset="6">
                <el-form-item label="短信签名" prop="signName">
                    <el-select v-model="signName" placeholder="请选择">
                        <el-option
                        v-for="(item,index) in nameList"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="10" :offset="6">
                <el-form-item label="短信模板" prop="templateCode">
                    <el-select v-model="templateCode" placeholder="请选择">
                        <el-option
                        v-for="(item,index) in templateList"
                        :key="index"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="10" :offset="6">
                <el-form-item label="手机号" prop="phoneNo">
                    <el-input v-model.number="phoneNo"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="10" :offset="6">
                <el-form-item label="内容" prop="templateParam">
                    <el-input v-model.trim="templateParam" autosize></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="10" :offset="6">
                <el-form-item>
                    <el-button type="danger" round @click="submitForm('ruleForm')">提交</el-button>
                    <el-button round @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>

<script>
import  {reqSendSMS} from '@/api/index'
export default {
    data(){
        return {
            signName: '',
            templateCode: '',
            phoneNo: '',
            templateParam: '',
            nameList:[{
                value: '流星',
                label: '流星'
                }, {
                value: '张豹的私人服务',
                label: '张豹的私人服务'
            }],
            templateList:[{
                value: 'SMS_129485523',
                label: '您有新的消息${product}摘要，请注意查收！'
                }, {
                value: 'SMS_127164105',
                label: '尊敬的${name}，欢迎使用短信服务。'
            }],
            rules:{
                signName:[
                    {required:true,message:'请选择短信签名',trigger:['change']}
                ],
                templateCode:[
                    {required:true,message:'请选择短信模板',trigger:['change']}
                ],
                phoneNo:[
                    {required:true,message:'请输入手机号',trigger:['blur']},
                    {pattern:/^1[3456789]\d{9}$/,message:'手机号格式错误',trigger:['blur','change']}
                ],
                templateParam:[
                    {required:true,message:'请输入内容',trigger:['blur']}
                ],
            }
        }
    },

    methods:{
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.getSendSMS()
            } else {
                this.$message.error('请填写正确信息');
                return false;
            }
            });
        },

        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

        async getSendSMS(){
            const {phoneNo,templateParam,signName,templateCode}=this
            let data={phoneNo,templateParam,signName,templateCode}
            let res = await reqSendSMS(data)
            if(res=='OK'){
                return this.$message.success('发送成功！')
            }else{
                return this.$message.error(res)
            }
        },

        routerTo(){
            this.$router.push('/list')
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
/deep/.el-select {
    display: inline-block;
    position: relative;
    width: 100%;
}
/deep/.el-form-item__error {
    color: #ff0000;
}
</style>
