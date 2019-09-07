<template>
  <v-container fluid grid-list-md>
    <div style="margin-bottom: 20px">
      <v-btn color="info" @click="dialog=true">添加数据</v-btn>
      <v-btn color="error">清空全部</v-btn>
      <v-btn color="success" style="float:right">图表展示</v-btn>
    </div>
    <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout"
      row wrap>
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-card-title style="display: flex;justify-content: space-between">
            <h4>{{ timeFormate(props.item.create_time) }}</h4>
            <span @click="deleteItem(props.item.web_uuid)">
              <v-icon style="cursor: pointer;font-size: 20px">delete_outline</v-icon>
            </span>
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

    <v-dialog v-model="dialog" max-width="400px">
      <v-card>
        <v-card-title>添加数据</v-card-title>
        <div style="margin: 0 20px">
            <v-textarea name="input-1" label="请输入查询项" textarea v-model="searchData" rows=13></v-textarea>
        </div>
        <v-card-text style="text-align: right">
          <v-btn color="primary" dark @click.stop="submit">确定</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
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
        items: [],
        dialog: false,
        searchData: 'vue\nreact\nangular\njquery\nnode\n微信小程序\nkoa\nexpress\nreact native\nflutter\nweex'
      }
    },
    computed: {
      timeFormate() {
        return function (val) {
          return new Date(val).toLocaleDateString().replace(/\//ig, '-')
        }
      }
    },
    mounted() {
      this.getWebList()
    },
    methods: {
      submit() {
        let news = this.searchData.replace(/\n/g, ',')
        this.getInfos(news)
        this.dialog = false
      },
      async deleteItem(id) {
        let rs = await this.$fetch.post({
          url: 'api/v1/deleteWebItems',
          data: {id}
        })

        this.getWebList()

        this.$toast({
          toastTrue: rs.status == !0 ? true : false,
          trueText: rs.msg
        })
      },
      async getInfos(searchData) {
        await this.$fetch.post({
          url: 'api/v1/getWebInfos',
          data: { keyword: searchData},
          onSuccess(rs) {}
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