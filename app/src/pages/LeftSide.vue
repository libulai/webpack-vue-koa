<template>
  <div id="leftside" v-show="elIsShow">
    <v-navigation-drawer class="" permanent>
      <v-list>
        <v-list-tile 
          v-for="(item, index) in list"
          :key="index" 
          @click="goto(item)" 
          :class="{'active': item.path === active}">
          <v-list-tile-action>
            <v-icon :class="{'active': item.name === active}">{{item.icon}}</v-icon>
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
            name: 'echarts',
            icon: 'home',
            path: '/home'
          },
          {
            name: '爬虫',
            icon: 'assessment',
            path: '/webSkill'
          },
          {
            name: 'MVVM',
            icon: 'subject',
            path: '/MVVM'
          },
          {
            name: '节流防抖',
            icon: 'event',
            path: '/debounce'
          }
        ],
        elIsShow: true
      };
    },
    props: ['active'],
    methods: {
      goto(item) {
        this.$router.push(item.path)
      }
    }
  }
</script>

<style lang='less' scoped>
  #leftside {
    width: 220px;
    position: fixed;
    height: 100%;
    /* height: calc(100% - 64px); */
    aside{
      background: rgb(48, 65, 86);
    }
  }
  .v-list>div{
    color: rgb(191, 203, 217);
  }
  .v-icon{
    color: rgb(191, 203, 217)!important;
  }
  .active{
    color: #fff!important;
    .v-icon{
      color: #fff!important;
    }
  }
</style>