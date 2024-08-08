<script setup>
import { computed } from 'vue'
import BaseSwiper from '@/components/base/BaseSwiper.vue';
import { useSystemInfo } from '@/store'

const systemInfo = useSystemInfo()

const navBarHeight = computed(() => ((systemInfo.navBarHeight * 100) / systemInfo.window.height) + 'vh')

const swiperOptions = computed(() => ({
  uniappSwiperOptons: {
    indicatorDots: true,
    circular: true,
  },
  data: [{
    test: 'Swiper Item',
    backgroundImage: 'https://img.zcool.cn/community/01e2bb5df4daa1a801219cceb955ab.jpg@1280w_1l_2o_100sh.jpg'
  }, {
    test: 'Swiper Item',
    backgroundImage: 'https://img.zcool.cn/community/01e2bb5df4daa1a801219cceb955ab.jpg@1280w_1l_2o_100sh.jpg'
  }, {
    test: 'Swiper Item',
    backgroundImage: 'https://img.zcool.cn/community/01e2bb5df4daa1a801219cceb955ab.jpg@1280w_1l_2o_100sh.jpg'
  }]
}))
</script>
<template lang='pug'>
.home-banner
  BaseSwiper(:options="swiperOptions")
</template>
<style lang="scss" scoped>
.home-banner {
  width: 100%;
  height: calc(var(--s-80) * 2 + v-bind(navBarHeight));
  overflow: hidden;
}
</style>
