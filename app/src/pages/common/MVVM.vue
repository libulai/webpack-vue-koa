<template>
  <div class="d-wrap">
    <div>{{mvvm}}</div>

    <!-- hook生命周期 -->
    <child @hook:updated="dataChanged"></child>

    <!-- 拷贝文字方法 -->
    <div class="clip" @click="clip">拷贝文字</div>

    <!-- is动态组件 -->
    <ul>
      <li :is="activeComp"></li>
    </ul>

    <!-- mixins -->

    <!-- computed get set -->
    <div>{{conputed}}</div>

    <div v-if="loginType">
      <input placeholder="Enter your username" >
    </div>
    <div v-if="!loginType">
      <input placeholder="Enter your email address" >
    </div>

    <button @click="loginType = !loginType">点</button>
  </div>
</template>

<script>
  import clipboard from "clipboard";
  import child2 from './child2.vue'

  export default {
    mixins: [child2],
    data() {
      return {
        mvvm: "mvvm",
        activeComp: "child",
        loginType: true
      };
    },
    computed: {
      conputed: {
        get() {
          return 'conputed get'
        },
        set(val) {
          this.mvvm = 'mvvm => ' + val
        }
      }
    },
    methods: {
      dataChanged() {
        console.log("updated");
      },
      clip() {
        new clipboard('.clip', {
          text: function (trigger) {
            return 'text';
          }
        });
      }
    },
    async created() {
      /**
       * 生命周期hook
       */

      this.$on('hook:updated', () => {
        console.log('hook:updated')
      })

      this.$on("hook:beforeUpdate", () => {
        console.log("beforeUpdate")
      });

      // setTimeout(() => {
      //   this.mvvm = "parent"
      // }, 1000);

      // coumputed set
      setTimeout(() => {
        this.conputed = 'set'
      }, 1000);
    }
  };
</script>

<style lang='less' scoped>
  .d-wrap {
    padding: 50px;
  }
</style>