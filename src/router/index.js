import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' 
import CarView from '../views/CarView.vue'
import ContactView from '../views/ContactView.vue'
import AllCarView from '../views/AllCarView.vue'
import NotFoundView from '../views/404View.vue'

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/cars/:id',
            name: 'cars',
            component: CarView,
            children: [
                {
                    "path": "contact",
                    component: ContactView
                }
            ]
        }, 
        {
            path: "/:catchall(.*)*",
            component: NotFoundView
        }
    ] 
})

