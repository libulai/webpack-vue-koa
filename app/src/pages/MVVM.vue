<template>
  <div class="d-wrap">
    <div>MVVM</div>
    <div>
      
    </div>
  </div>
</template>

<script>
import utils from "../utils/comUtils";

window.pobj = {
  name: 123
}

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  async created() {
    // console.log(this.$store.state)
    // console.log(this.$store.getters.doList)
  }
};
</script>

<style lang='less' scoped>
.d-wrap {
  padding: 50px;
}
</style>