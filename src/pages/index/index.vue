<script setup>
import { ref, watch, onMounted, getCurrentInstance, computed } from 'vue'
import { useUserStore } from '@/store'
import BasePanel from '@/components/base/BasePanel.vue'
import BaseGrid from '@/components/base/BaseGrid.vue'
import HomeBanner from '@/components/HomeBanner/index.vue'
import BaseButton from '@/components/base/BaseButton.vue'

import icons from '@/assets/icons'

const userStore = useUserStore()

const instance = getCurrentInstance()

const gridOptions = computed(() => ({
  useBackground: false,
  useMargin: true,
  usePadding: false,
  iconSize: 36,
  data: [{
    text: '景区地图',
    icon: icons.map__easyiconnet
  }, {
    text: '世界名胜',
    icon: icons.lagoon__easyiconnet
  }, {
    text: '自驾推荐',
    icon: icons.sea__easyiconnet
  }, {
    text: '本地游玩',
    icon: icons.lake__easyiconnet_1
  }, {
    text: '海港城市',
    icon: icons.sea__easyiconnet_1
  }, {
    text: '线上云游',
    icon: icons.reindeer__easyiconnet
  }, {
    text: '旅拍分享',
    icon: icons.photo_camera__easyiconnet
  }, {
    text: '徒步攻略',
    icon: icons.hills__easyiconnet
  }]
}))

function onClick () {
  console.log('123123123')
  userStore.count++
}

watch(() => userStore.count, (val) => {
  console.log(val)
}, {
  immediate: true
})

onMounted(() => {
  console.log('icons', icons)
})

</script>

<template lang='pug'>
view
  HomeBanner
  BaseGrid(square :options="gridOptions")
  BasePanel(title="今日推荐")
    .recommend-today
      .panel-l
      .panel-rt
      .panel-rb
  BasePanel(title="热门")
    .recommend-today
      .panel-l
      .panel-rt
      .panel-rb
</template>

<style lang="scss" scoped>
.recommend-today {
  display: grid;
  grid-template-areas:
    "left rightTop"
    "left rightBottom";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--s-8);
  height: calc(var(--s-80) * 2);

  .panel-l,
  .panel-rt,
  .panel-rb {
    border-radius: var(--s-4);
  }

  .panel-l {
    grid-area: left;
    background-color: var(--dev-bg);
  }

  .panel-rt {
    grid-area: rightTop;
    background-color: var(--dev-bg);
  }

  .panel-rb {
    grid-area: rightBottom;
    background-color: var(--dev-bg);
  }
}
</style>
