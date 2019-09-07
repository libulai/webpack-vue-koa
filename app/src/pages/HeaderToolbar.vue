<template>
  <div class="header">
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon @click="showHideLeftSide"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="back">退出</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    props: {
      title: String
    },
    methods: {
      showHideLeftSide() {
        this.$emit('leftSideShow', document.querySelector('#leftside').style.display === '' ? false : true);
      },
      back() {
        this.$router.push('/')
      }
    }
  };
</script>

<style lang='less' scoped>
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
</style>