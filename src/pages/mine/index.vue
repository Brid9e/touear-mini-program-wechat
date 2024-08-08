<script setup>
import { computed, onActivated, onMounted } from 'vue'
import { useSystemInfo } from '@/store'
import BaseGrid from '@/components/base/BaseGrid.vue'
import BasePanel from '@/components/base/BasePanel.vue'
import UserInfo from '@/components/UserInfo'

const systemInfo = useSystemInfo()

const navBarHeight = computed(() => ((systemInfo.navBarHeight * 100) / systemInfo.window.height) + 'vh')

const gridOptions = computed(() => ({
  useBackground: true,
  useMargin: false,
  data: [{
    text: '待付款',
    icon: 'balance-pay'
  }, {
    text: '待评价',
    icon: 'comment-o'
  }, {
    text: '已付款',
    icon: 'paid'
  }, {
    text: '已取消',
    icon: 'failure'
  }]
}))

const handleOptions = computed(() => ({
  useBackground: true,
  useMargin: false,
  data: [{
    text: '浏览记录',
    icon: 'browsing-history-o'
  }, {
    text: '联系客服',
    icon: 'phone-circle-o'
  }, {
    text: '收藏',
    icon: 'star-o'
  }, {
    text: '设置',
    icon: 'setting-o'
  }]
}))

onMounted(() => {
  console.log(systemInfo)
})
</script>
<template lang='pug'>
.mine
  UserInfo
  BasePanel(title="我的订单")
    BaseGrid(:options="gridOptions")
      template(#icon="{item}")
        van-icon(:name="item.icon")
  BasePanel(title="功能服务")
    BaseGrid(:options="handleOptions")
      template(#icon="{item}")
        van-icon(:name="item.icon")
</template>
<style lang="scss">
.mine {
  padding-top: v-bind(navBarHeight);

}
</style>
