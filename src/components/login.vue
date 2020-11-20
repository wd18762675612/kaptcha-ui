<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td colspan="2">
              <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
            </td>
          </tr>
          <tr>
            <td>
              <el-input v-model="user.captcha" placeholder="请输入验证码"></el-input>
            </td>
            <td>
              <el-image style="width: 148px; height: 36px;border-radius: 3px;" :src="url" @click="imgRefresh()"></el-image>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return{
        user:{
          username:'',
          password:'',
          captcha:'',
        },
        url: 'http://localhost:7779/wd/kaptcha/image'
      }
    },
    methods:{
      //登录
      doLogin(){
        this.$http.post('/sys/login',this.user).then((res)=>{
          this.$message.error(res.data);
          this.imgRefresh();
        })
      },
      //验证码更新
      imgRefresh(){
        this.url = `http://localhost:7779/wd/kaptcha/image?uuid=${this.getUUID()}`
      },
      getUUID(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
        })
      }
    }
  }
</script>