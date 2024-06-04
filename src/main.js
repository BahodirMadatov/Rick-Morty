import {
    createApp
} from 'vue'
import {
    createRouter,
    createWebHistory
} from 'vue-router'
import App from './App.vue'
import Cartoons from './components/CartoonCharacters.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: Cartoons
    }]
})

createApp(App).use(router).mount('#app')