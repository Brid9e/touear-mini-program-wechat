<script setup>
import { computed, useSlots, ref } from 'vue'
import { mergeWith, get } from 'lodash'

// props
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits()

const slots = useSlots()

const currentItemIndex = ref(0)

/**
 * default options
 */
const defaultOptions = computed(() => ({
  useMargin: false,
  usePadding: false,
  useBorderRadius: false,
  useShadow: false,
  useBackground: false,
  useBackgroundImage: true,
  path: {
    backgroundImage: 'backgroundImage'
  },
  data: [],
  uniappSwiperOptons: {
    indicatorDots: true,
    interval: 5000,
    autoplay: true,
    circular: false
  }
}))

/**
 * merge options
 */
const mergeOptions = computed(() => mergeWith({}, defaultOptions.value, props.options))

/**
 * classOptions
 */
const classOptions = computed(() => ({
  'use-margin': mergeOptions.value?.useMargin,
  'use-padding': mergeOptions.value?.usePadding,
  'use-background': mergeOptions.value?.useBackground,
  'use-border-radius': mergeOptions.value?.useBorderRadius,
}))

/**
 * 当swiper滑动时触发
 * @param res
 */
function onSwiperChange (res) {
  currentItemIndex.value = res.detail?.current
  emits('change', mergeOptions.value?.data?.[res.detail?.current], res.detail?.current)
}

/**
 * 点击item时
 * @param item
 * @param index
 */
function onClick (item, index) {
  emits('item-click', item, index)
}
</script>
<template lang='pug'>
.base-swiper
  swiper.base-uni-swiper(:class="classOptions" :interval="mergeOptions.uniappSwiperOptons?.interval" :circular="mergeOptions.uniappSwiperOptons?.circular" :autoplay="mergeOptions.uniappSwiperOptons?.autoplay" easing-function="easeOutCubic" @change="onSwiperChange")
    swiper-item(v-for="(item, index) in mergeOptions.data" :key="index" @click="onClick(item, index)")
      slot(:item="item")
      .base-swiper__bg-image(v-if="mergeOptions?.useBackgroundImage")
        van-image.base-image(:src="get(item, mergeOptions.path.backgroundImage)" fit="cover")
  .base-swiper__indicator-dots(v-if="mergeOptions.uniappSwiperOptons?.indicatorDots")
    .base-swiper__indicator-dots-item(:class="{'dot-active': currentItemIndex === i}" v-for="(dot, i) in mergeOptions.data?.length" :key="dot")
</template>
<style lang="scss" scoped>
.base-swiper {
  height: 100%;
  position: relative;

  .base-uni-swiper {
    height: 100%;
  }

  .base-swiper__bg-image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}

.swiper-item-active-class {
  background-color: var(--c-primary);
}

.base-swiper__indicator-dots {
  width: 100%;
  height: 60rpx;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .base-swiper__indicator-dots-item {
    width: var(--s-4);
    height: var(--s-4);
    border-radius: var(--s-4);
    margin: 0 4rpx;
    background-color: var(--c-pan-bg);
    transition: all 0.3s ease-in-out !important;

    &.dot-active {
      background-color: var(--c-pan-bg);
      width: calc(var(--s-6) * 3);
    }
  }
}
</style>
