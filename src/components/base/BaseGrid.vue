<script setup>
import { mergeWith, get } from 'lodash'
import { computed, useAttrs, useSlots } from 'vue'

// props
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits()

const slots = useSlots()

/**
 * default options
 */
const defaultOptions = computed(() => ({
  useMargin: true,
  usePadding: true,
  useBorderRadius: true,
  useShadow: true,
  useBackground: true,
  useBorder: false,
  path: {
    icon: 'icon',
    text: 'text'
  },
  data: []
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
 * 点击item时
 * @param item
 */
function onClick (item) {
  emits('item-click', item)
}
</script>
<template lang='pug'>
.base-grid(:class="classOptions")
  van-grid(:border="mergeOptions?.useBorder")
    van-grid-item(v-for="(item, index) in mergeOptions.data" :key="index" :icon="get(item, mergeOptions.path.icon)" :text="get(item, mergeOptions.path.text)" @click="onClick(item)")
</template>
<style lang="scss" scoped>
.base-grid {
  --grid-item-content-background-color: transparent !important;
  --grid-item-text-color: var(--c-font-color);
}
</style>
