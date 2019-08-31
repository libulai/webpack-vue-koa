<template>
  <div id="main">
    <v-app>
      <!-- 导航 -->
      <HeaderToolbar :title="top_title" @leftSideShow="isleftSideShow"></HeaderToolbar>
      <div class="v-container">
        <LeftSide ref="LeftSide"></LeftSide>
        <router-view></router-view>
      </div>
    </v-app>
  </div>
</template>

<script>
  import HeaderToolbar from '@/pages/HeaderToolbar.vue';
  import LeftSide from '@/pages/LeftSide.vue';

  export default {
    data() {
      return {
        top_title:'ZOO'
      };
    },
    methods: {
      isleftSideShow(type){
        this.$refs.LeftSide.elIsShow = type;
      }
    },
    components: {
      HeaderToolbar,
      LeftSide
    }
  };
</script>

<style lang='less' scoped>
  #main {
    .v-container{
      display: flex;
      height: 100%;
      margin-top: 64px;
    }
  }
</style>