<script setup>
import { ref, watch, onMounted, getCurrentInstance, computed } from 'vue'
import { useUserStore } from '@/store'
import BasePanel from '@/components/base/BasePanel.vue'
import BaseGrid from '@/components/base/BaseGrid.vue'
import HomeBanner from '@/components/HomeBanner/index.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const userStore = useUserStore()

const instance = getCurrentInstance()

const gridOptions = computed(() => ({
  useBackground: false,
  useMargin: false,
  data: [{
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
  }, {
    text: '应用名称',
    icon: 'eye-o'
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
  console.log('instance', instance)
})

</script>

<template lang='pug'>
view
  HomeBanner
  BasePanel(title="景区介绍")
    text 这是面板
  BaseGrid(:options="gridOptions")
  BasePanel(title="景区介绍")
    text 这是面板
  BasePanel(title="景区介绍")
    text 这是面板
  BasePanel(title="景区介绍")
    text 这是面板
  BasePanel(title="景区介绍")
    text 这是面板
  BasePanel(title="景区介绍")
    text 这是面板
</template>
