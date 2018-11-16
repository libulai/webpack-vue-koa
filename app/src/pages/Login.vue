<template>
  <div id="login">
    <p class="login-title">ZOO</p>
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
    methods: {
      tabChange(type) {
        type == 0 ? this.IsSignIn = false : this.IsSignIn = true;
      },
      async signIn() {
        if(this.formData.username == '' || this.formData.password == '') return;
        await Sign.signIn(this.formData);
      },
      async signUp() {
        if(this.formData.username == '' || this.formData.password == '') return;
        await Sign.signUp(this.formData);
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
    background: url('~@dist/images/login_bg.jpg') no-repeat 50% fixed;
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
  }
</style>