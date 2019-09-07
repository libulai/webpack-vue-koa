<template>
  <div id="login">
    <div class="login-container">
      <v-app>
        <v-tabs grow color="cyan" dark slider-color="yellow">
          <v-tab centered @click="tabChange(0)">登录</v-tab>
          <v-tab centered @click="tabChange(1)">注册</v-tab>
        </v-tabs>
        <v-form class="login-form">
          <v-text-field v-model="formData.username" :rules="nameRules" label="Username" required></v-text-field>
          <v-text-field v-model="formData.password" :rules="passwordRules" label="Password" required></v-text-field>
        </v-form>
        <v-btn v-if="!IsSignIn" class="login-btn" large color="cyan" @click="signUp">登录</v-btn>
        <v-btn v-else class="login-btn" large color="cyan" @click="signIn">注册</v-btn>
      </v-app>
    </div>
  </div>
</template>

<script>
  import { Sign } from '@/api/fetch';
  import toast from '@/components/common/Toast.vue';

  export default {
    data() {
      return {
        formData: {
          username: '',
          password: ''
        },
        IsSignIn: false,
        nameRules: [
          v => !!v || 'Username is required',
          v => v.length <= 10 || 'Username must be less than 10 characters'
        ],
        passwordRules: [
          v => !!v || 'Password is required'
        ]
      };
    },
    created() {

    },
    methods: {
      tabChange(type) {
        this.IsSignIn = type != 0
      },
      async signIn() {
        if (this.formData.username == '' || this.formData.password == '') return;

        const rs = await Sign.signIn(this.formData);

        this.$toast({
          toastError: rs.status == 0,
          toastTrue: rs.status == !0,
          errorText: rs.msg,
          trueText: rs.msg
        })
      },
      async signUp() {
        if (this.formData.username == '' || this.formData.password == '') return;

        const rs = await Sign.signUp(this.formData);

        if (rs.status == 1) {
          this.$router.push('/main');
        } else {
          this.$toast({
            toastError: true,
            errorText: rs.msg
          })
        }
      }
    }
  };
</script>

<style lang='less' scoped>
  #login {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 30px;
    // background: url('~@dist/images/login_bg.jpg') no-repeat 50% fixed;
    background-size: cover;
    overflow: hidden;
    .login-container {
      width: 300px;
      height: 320px;
      background: #fff;
      .login-form {
        margin: 20px;
      }
      .login-btn {
        color: #fff;
        margin: 20px 20px 0 20px;
        width: calc(100% - 40px);
      }
    }
    .toast {
      top: -8px;
      position: absolute;
      width: 100%;
      text-align: center;
    }
  }
</style>