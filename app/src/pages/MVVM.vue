<template>
  <div class="d-wrap">
    <div>{{mvvm}}</div>
    <child @hook:updated="dataChanged"></child>
  </div>
</template>

<script>
import child from './MVVMchild.vue';

export default {
  components:{child},
  data() {
    return {
      mvvm: 'mvvm'
    };
  },
  computed: {},
  methods: {
    dataChanged() {
      console.log('updated')
    }
  },
  async created() {
    /**
     * 生命周期hook
    */

    // this.$on('hook:updated', ()=>{
    //   console.log(3333)
    // })

    this.$on('hook:beforeUpdate', ()=>{
      console.log('beforeUpdate')
    })

    setTimeout(()=> {
      this.mvvm = 'parent'
    },1000)
  }
};


</script>

<style lang='less' scoped>
.d-wrap {
  padding: 50px;
}
</style>