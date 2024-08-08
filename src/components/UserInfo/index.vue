<script setup>
import BasePanel from '../base/BasePanel.vue'

const avatar = 'https://pic4.zhimg.com/v2-27e193a161f57b4229b0346453abdcfb_r.jpg'

</script>
<template lang='pug'>
.user-info
  BasePanel(:options="{ useMargin: true, useBackground: false, usePadding: false }")
    .user-info__content
      van-image(round fit="cover" width="var(--s-60)" height="var(--s-60)" :src="avatar")
      .user-info__content__box
        .user-info__content__name
          span 登录/注册
        //- .user-info__content__desc
          span nan
</template>
<style lang="scss" scoped>
.user-info__content {
  display: flex;
  align-items: center;

  .user-info__content__box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 var(--s-m-v);

    .user-info__content__name {
      font-weight: var(--f-w-semibold);
    }

    .user-info__content__desc {
      font-size: var(--s-12);
    }
  }
}
</style>
