<script setup>
import { computed } from 'vue'
import BaseSwiper from '@/components/base/BaseSwiper.vue';

const swiperOptions = computed(() => ({
  uniappSwiperOptons: {
    indicatorDots: true,
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
  height: 40vh;
}
</style>
