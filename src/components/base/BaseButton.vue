<script setup>
import { useAttrs } from 'vue'

const emits = defineEmits()

const attrs = useAttrs()

/**
 * 点击时
 */
function onClick () {
  emits('click')
}

</script>
<template lang='pug'>
van-button(v-bind="attrs" @click="onClick")
  slot
</template>
<style scoped></style>
