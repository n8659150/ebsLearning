import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/main/home'
import payables from '@/components/main/payables'
import processing from '@/components/main/processing'
import purchases from '@/components/main/purchases'
import receivables from '@/components/main/receivables'
import sales from '@/components/main/sales'
import results from '@/components/main/results'
import videoPlayer from '@/components/main/videoPlayer'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/payables',
            name: 'payables',
            component: payables
        },
        {
            path: '/processing',
            name: 'processing',
            component: processing
        },
        {
            path: '/purchases',
            name: 'purchases',
            component: purchases
        },
        {
            path: '/receivables',
            name: 'receivables',
            component: receivables
        },
        {
            path: '/sales',
            name: 'sales',
            component: sales
        },
        {
            path: '/results',
            name: 'results',
            component: results
        },
        {
            path: '/video/:vid',
            name: 'videoPlayer',
            component: videoPlayer
        }

        // 404
        // {
        //     path: '*',
        //     name: 'defaultPage',
        //     component: sales
        // }

    ]
})