/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { SetupCalendar } from 'v-calendar';
import 'v-calendar/dist/style.css';

// Composables
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
registerPlugins(app)

app.mount('#app')
