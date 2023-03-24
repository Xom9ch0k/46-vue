import { createApp } from 'vue'
import App from './App.vue'

import directives from '@/directives'
import components from '@/components'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.mount('#app')