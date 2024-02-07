import { watchEffect } from "vue"
import { useLocalStorage } from "@vueuse/core";
import i18n from "@/i18n";
const { locale } = i18n.global

const LOCALE_KEY = '__locale__'

type LocaleType = typeof locale.value

locale.value = localStorage.getItem(LOCALE_KEY) as LocaleType || 'en'
document.documentElement.lang = localStorage.getItem(LOCALE_KEY) as LocaleType || 'en'

watchEffect(() => {
  document.documentElement.lang = locale.value
})

useLocalStorage(LOCALE_KEY, locale)

export const toggleLang = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}