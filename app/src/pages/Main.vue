<template>
  <div id="main">
    <v-app>
      <!-- 导航 -->
      <HeaderToolbar
        :title="top_title"
        @leftSideShow="isleftSideShow"
      ></HeaderToolbar>
      <div class="v-container">
        <LeftSide
          ref="LeftSide"
          :active="active"
        ></LeftSide>
        <!-- mode模式 -->
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view class="rv"></router-view>
        </transition>
      </div>
    </v-app>
  </div>
</template>

<script>
import HeaderToolbar from "@/pages/HeaderToolbar.vue";
import LeftSide from "@/pages/LeftSide.vue";

export default {
  data() {
    return {
      top_title: "ZOO",
      active: "/webSkill"
    };
  },
  methods: {
    isleftSideShow(type) {
      this.$refs.LeftSide.elIsShow = type;
    }
  },
  watch: {
    // 检测路由
    $route(to, from) {
      this.active = to.path;
    }
  },
  created() {
    this.active = this.$route.path;
  },
  components: {
    HeaderToolbar,
    LeftSide
  }
};
</script>

<style lang='less'>
#main {
  .v-container {
    display: flex;
    height: 100%;
    margin-top: 64px;
  }
}

.rv {
  padding: 20px;
  margin-left: 220px !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 0.4s;
  transform: translateX(30px);
}
</style>