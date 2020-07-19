<template>
  <div class="d-wrap">
    <div>{{child}}</div>
    <div>
      
    </div>
  </div>
</template>

<script>


export default {
  name: 'child',
  data() {
    return {
      child: 'child'
    };
  },
  computed: {},
  methods: {
    
  },
  async created() {
    setTimeout(()=> {
      this.child = 'i am child'
    },1000)
  }
};


</script>

<style lang='less' scoped>

</style>