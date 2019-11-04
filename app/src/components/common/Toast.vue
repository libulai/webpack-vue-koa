<template>
  <div id="toastBox" v-show="show">
    <v-alert :value="true" type="success" class="toast" id="toast-true" v-if="toastTrue" ref="toast">{{ trueText }}</v-alert>
    <v-alert :value="true" type="error" class="toast" id="toast-error" v-if="toastError" ref="toast">{{ errorText }}</v-alert>
  </div>
</template>

<script>
  var timer = null;

  export default {
    data() {
      return {
        trueText: '',
        errorText: '',
        toastTrue: false,
        toastError: false,
        show: true
      };
    },
    watch: {
      toastTrue(val) {
        if(timer) clearTimeout(timer);
        this.show = true;
        timer = setTimeout(() => {
          this.show = false;
          this.toastTrue = false;
        }, 3000)
      },
      toastError(val) {
        if(timer) clearTimeout(timer);
        this.show = true;
        timer = setTimeout(() => {
          this.show = false;
          this.toastError = false;
        }, 3000)
      }
    }
  };
</script>

<style lang='less'>
  #toastBox {
    position: absolute;
    top: -4px;
    width: 100%;
    text-align: center;
  }
</style>