<template>
  <div id="leftside" v-show="elIsShow">
    <v-navigation-drawer class="" permanent>
      <v-list>
        <v-list-tile v-for="item in list" :key="item.name" @click="goto(item.path)">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        list: [
          {
            name: '首页',
            icon: 'home',
            path: '/home'
          },
          {
            name: '前端技术',
            icon: 'assessment',
            path: '/webSkill'
          }
        ],
        elIsShow: true
      };
    },
    methods: {
      goto(path) {
        this.$router.push(path)
      }
    }
  };
</script>

<style lang='less' scoped>
  #leftside {
    width: 220px;
    /* height: calc(100% - 64px); */
  }
</style>