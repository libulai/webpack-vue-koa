<template>
  <div class="d-wrap">
    <div>{{mvvm}}</div>
    <!-- hook生命周期 -->
    <child @hook:updated="dataChanged"></child>
    <!-- 拷贝文字方法 -->
    <div class="clip" @click="clip">拷贝文字</div>

  </div>
</template>

<script>
import clipboard from "clipboard";

export default {
  data() {
    return {
      mvvm: "mvvm"
    };
  },
  computed: {},
  methods: {
    dataChanged() {
      console.log("updated");
    },
    clip() {
      new clipboard('.clip', {
        text: function(trigger) {
          return 'text';
        }
      });
    }
  },
  async created() {
    /**
     * 生命周期hook
     */

    // this.$on('hook:updated', ()=>{
    //   console.log(3333)
    // })

    this.$on("hook:beforeUpdate", () => {
      console.log("beforeUpdate");
    });

    setTimeout(() => {
      this.mvvm = "parent";
    }, 1000);

    
  }
};
</script>

<style lang='less' scoped>
.d-wrap {
  padding: 50px;
}
</style>




