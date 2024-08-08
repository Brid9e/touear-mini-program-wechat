import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0
  })
})

export const useSystemInfo = defineStore('systemInfo', {
  state: () => ({
    safeArea: {},
    menuButtonInfo: {},
    window: {},
    statusBarHeight: 0
  }),
  getters: {
    navBarHeight: (state) =>
      state.statusBarHeight +
      state.menuButtonInfo.height +
      (state.menuButtonInfo.top - state.statusBarHeight) * 2
  }
})
