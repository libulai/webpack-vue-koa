<template>
  <div class="d-wrap">
    <v-form>
      <div style="margin-bottom: 50px">
        <v-text-field
          v-model="key1"
          label="防抖"
          @input="debounce"
        ></v-text-field>
        <span>{{ handleKey1 }}</span>
      </div>
      <div>
        <v-text-field
          v-model="key2"
          label="节流"
          @input="throttle"
        ></v-text-field>
        <span>{{ handleKey2 }}</span>
      </div>
    </v-form>
  </div>
</template>

<script>
import utils from '../utils/comUtils'

export default {
  data() {
    return {
      key1: '',
      key2: '',
      handleKey1: '',
      handleKey2: ''
    };
  },
  methods: {
    debounce() {
      utils.debounce(() => {
        this.handleKey1 = this.key1
      }, 1000)
    },
    throttle() {
      utils.throttle(() => {
        this.handleKey2 = this.key2
      }, 1000)
    }
  }
};
</script>

<style lang='less' scoped>
.d-wrap {
  padding: 50px;
  .v-form {
    width: 300px;
  }
}
</style>