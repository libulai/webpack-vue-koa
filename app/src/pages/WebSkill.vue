<template>
  <v-container fluid grid-list-md>
    <div style="margin-bottom: 20px">
      <v-btn color="info" @click="getInfos">添加数据</v-btn>
      <v-btn color="error">清空全部</v-btn>
      <v-btn color="success" style="float:right">图表展示</v-btn>
    </div>
    <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout"
      row wrap>
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title>
            <h4>{{ timeFormate(props.item.create_time) }}</h4>
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense v-for="(value, key, index) in props.item.keyword">
            <v-list-tile>
              <v-list-tile-content>{{ key }}</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ value }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        rowsPerPageItems: [4, 8, 12],
        pagination: {
          rowsPerPage: 12
        },
        items: []
      }
    },
    computed: {
      timeFormate() {
        return function (val) {
          return val.replace(/T1/ig, ' ')
        } 
      }
    },
    mounted() {
      this.getWebList()
    },
    methods: {
      async getInfos() {
        await this.$fetch.post({
          url: 'api/v1/getWebInfos',
          data: { keyword: 'vue,react,angular,jquery,node,微信小程序,koa,express,react native,flutter' }
        })
        this.getWebList()
      },
      async getWebList() {
        let rs = await this.$fetch.post({
          url: 'api/v1/getWebList'
        })
        
        this.items = rs.data
      }
    }
  }
</script>

<style lang='less' scoped>
</style>