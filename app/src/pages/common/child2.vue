<template>
  <div class="d-wrap">
    <div>{{child}}</div>
  </div>
</template>

<script>


export default {
  name: 'child2',
  data() {
    return {
      child: 'child2'
    };
  },
  computed: {},
  methods: {
    
  },
  async created() {
    // setTimeout(()=> {
    //   this.child = 'i am child2'
    // },1000)
  }
};


</script>

<style lang='less' scoped>

</style>