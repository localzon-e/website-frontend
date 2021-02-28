import app from './createEntrypoint'
import { createI18n } from 'vue-i18n'

import de from './locales/de.json'
import en from './locales/en.json'
import it from './locales/it.json'
import ru from './locales/ru.json'

const messages = {
    de: de,
    en: en,
    it: it,
    ru: ru
}

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages
})

app.use(i18n)