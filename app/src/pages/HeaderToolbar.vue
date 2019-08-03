<template>
  <div>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click="showHideLeftSide"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>退出</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      };
    },
    props: {
      title: String
    },
    methods: {
      showHideLeftSide() {
        this.$emit('leftSideShow', $('#leftside').css('display')==='block'? false : true);
      }
    }
  };
</script>

<style lang='less' scoped>
  #main {}
</style>