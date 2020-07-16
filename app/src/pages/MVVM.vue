<template>
  <div class="d-wrap">
    <div>{{mvvm}}</div>
    <child @hook:updated="dataChanged"></child>
    <div class="clip" @click="clip">复制代码</div>
  </div>
</template>

<script>
import child from "./MVVMchild.vue";
import clipboard from "clipboard";

export default {
  components: { child },
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




