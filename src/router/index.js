import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', redirect: '/index'},
    { path: '/index', name: 'index', component: () => import('@views/index/Index.vue')},
    { path: '/playlist', name: 'playlist', component: () => import('@views/playlist/Index.vue')},
    { path: '/playlist/detail', name: 'playlistdetail', component: () => import('@views/playlist/Detail.vue')},

    { path: '/artist', name: 'artist', component: () => import('@views/artist/Index.vue')},
    { path: '/my', name: 'my', component: () => import('@views/us/Index.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router