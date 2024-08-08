<script>
import { useSystemInfo } from '@/store'
export default {
  onLaunch: function () {
    const systemInfo = useSystemInfo()
    systemInfo.safeArea = uni.getSystemInfoSync()?.safeArea
    systemInfo.menuButtonInfo = uni.getMenuButtonBoundingClientRect()
    systemInfo.window = { width: uni.getSystemInfoSync()?.windowWidth, height: uni.getSystemInfoSync()?.windowHeight }
    systemInfo.statusBarHeight = uni.getSystemInfoSync()?.statusBarHeight
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>
<style>
@import './wxcomponents/vant/dist/common/index.wxss';
@import './app.wxss';
</style>
