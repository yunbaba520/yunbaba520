import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import type {themeValue} from "@/types/globel/globel";
interface IGlobelState {
  theme: themeValue
}
const useGlobel = defineStore('globel', {
  state: (): IGlobelState => ({
    theme: 'light'
  }),
  actions: {
    // 改变主题色
    changeThemeAction(value: themeValue) {
      this.theme = value
      localCache.setCache('theme',value)
    }
  }
})
export default useGlobel
