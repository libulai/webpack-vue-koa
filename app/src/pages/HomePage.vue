<template>
  <div class="myChart">
    <div id="echarts1"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      echarts1: null
    };
  },
  mounted() {
    this.getWebInfo();
    this.drawLine();
  },
  methods: {
    drawLine() {
      const echarts1 = this.echarts1 = this.$echarts.init(document.getElementById("echarts1"));

      echarts1.setOption({
        backgroundColor: "#fafafa",
        visualMap: {
          show: false,
          min: 200,
          max: 1100,
          inRange: {
            colorLightness: [0, 1]
          }
        }
      });
    },
    async getWebInfo() {
      const rs = await this.$fetch.post({
        url: 'api/v1/getWebList'
      })

      let list = rs.data[0].keyword, iscludes = ['vue', 'react', 'angular']

      let newlist = Object.keys(list).reduce((total, item) => {
        if (iscludes.includes(item)) total.push({name: item, value: Number(list[item])})
        return total
      }, [])

      this.initCharts1(newlist);
    },
    initCharts1(list) {
      this.echarts1.hideLoading();
      this.echarts1.setOption({
        series: [
          {
            name: "one",
            type: "pie",
            radius: "55%",
            data: list,
            roseType: "angle",
            label: {
              normal: {
                textStyle: {
                  color: "#999"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#999"
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#b3d4fc",
                shadowBlur: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      })
    }
  }
};
</script>

<style lang='less' scoped>
.myChart {
  height: 100%;
  width: 100%;
  div {
    width: 100%;
    height: 70%;
  }
}
</style>