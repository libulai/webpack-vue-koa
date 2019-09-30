<template>
  <div class="d-wrap">
    MVVM
  </div>
</template>

<script>
import utils from '../utils/comUtils'

export default {
  data() {
    return {
   
    };
  },
  methods: {
  
  },
  async created() {
    console.log(this.$store.state)
  }
};
</script>

<style lang='less' scoped>
.d-wrap {
  padding: 50px;
  
}
</style>