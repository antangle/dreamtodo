/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import {Calendar, DatePicker, SetupCalendar} from "v-calendar";

export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(SetupCalendar, {})
    .use(Calendar)
    .use(DatePicker)
}
