import {createWebHistory, createRouter} from "vue-router";
import home from './Pages/Home.vue';
import createFolder from './components/CreateFolder.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
        meta: {title: 'File Management'}

    },
    {
        path: '/folder/create',
        name: 'CreateFolder',
        component: createFolder,
        meta: {title: 'Create folder'}

    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router; 