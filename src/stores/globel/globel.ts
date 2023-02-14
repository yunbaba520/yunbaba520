import { defineStore } from 'pinia'
interface IGlobelState {
  isLightTheme: boolean
}
const useGlobel = defineStore('globel', {
  state: (): IGlobelState => ({
    isLightTheme: true
  }),
  actions: {
    // 改变主题色
    changeThemeAction() {
      this.isLightTheme = !this.isLightTheme
    }
  }
})
export default useGlobel
