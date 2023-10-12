import {createWebHistory, createRouter} from "vue-router";
import home from './Pages/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
        meta: {title: 'File Management'}

    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; 