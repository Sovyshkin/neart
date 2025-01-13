/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
import { getData, setData } from 'nuxt-storage/local-storage'
;(() => {
  const prefersDark = matchMedia('(prefers-color-scheme: light)').matches
  const setting = getData('vueuse-color-scheme') || 'auto'
  if (prefersDark && setting !== 'light')
    document.documentElement.classList.toggle('light', true)
})()
