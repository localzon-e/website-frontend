import app from './createEntrypoint'
import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

const messages = {
    de: de,
    en: en
}

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages
})

app.use(i18n)