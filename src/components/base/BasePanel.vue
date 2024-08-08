<script setup>
import { mergeWith } from 'lodash'
import { computed, useSlots } from 'vue'

// props
const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ''
  }
})

const slots = useSlots()

/**
 * default options
 */
const defaultOptions = computed(() => ({
  useMargin: true,
  usePadding: true,
  useBorderRadius: true,
  useShadow: true,
  useBackground: true
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
</script>
<template lang='pug'>
.base-panel(:class="classOptions")
  .base-panel__title(v-if="slots?.title || title")
    slot(v-if="slots?.title" name="title")
    span(v-else) {{ title }}
  slot
</template>
<style lang="scss" scoped>
.base-panel {
  overflow: hidden;

  .base-panel__title {
    margin-bottom: var(--s-8);
    font-weight: var(--f-w-semibold);
    font-size: var(--s-14);
  }
}
</style>
