/**
 * Nuxt.js 配置文件
 */

module.exports = {
    router: {
        linkActiveClass: 'active',//组件默认的激活类名,高亮
        //自定义路由表规则
        extendRoutes(routes, resolve) {
            //routes是数组，里面是所有默认生成的路由对象，先清除
            routes.splice(0)
            routes.push(...[
                {
                  path: '/',
                  component: resolve(__dirname, 'pages/layout'),
                  children:[
                    {
                        path: '/',// 默认子路由
                        name: 'home',
                        component: resolve(__dirname, 'pages/home')
                    },
                    {
                        path: '/login',
                        name: 'login',
                        component: resolve(__dirname, 'pages/login')
                    },
                    {
                        path: '/register',
                        name: 'register',
                        component: resolve(__dirname, 'pages/login')
                    },
                    {
                        path: '/profile/:username',
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile')
                    },
                    {
                        path: '/settings',
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings')
                    },
                    {
                        path: '/editor',
                        name: 'editor',
                        component: resolve(__dirname, 'pages/editor')
                    },
                    {
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article')
                    }
                  ]
                }
            ])
        }
    },

    server: {
        host: '0.0.0.0', //localhost的话只能本地访问，0.0.0.0可以监听所有的网卡地址
        port: 9000
    },

    plugins:[
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}