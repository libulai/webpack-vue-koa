<template>
  <div id="login">
    <p class="login-title">ZOO</p>
    <div class="login-container">
      <v-form>
        <v-container>
          <v-layout row wrap>

            <v-flex xs12 sm6>
              <v-text-field v-model="username" label="First Name" solo></v-text-field>
            </v-flex>

            <v-flex xs12 sm6>
              <v-text-field v-model="password" label="Last Name" solo></v-text-field>
            </v-flex>

          </v-layout>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // username: '',
        // password: ''
      };
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
    background: url('~@dist/images/login_bg.png') no-repeat 50% fixed;
    background-size: cover;
  }

  .login-container {
    width: 300px;
    height: 400px;
    background: #fff;

  }
</style>