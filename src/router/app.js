import mainpage from '@/views/mainpage';
var appRouter = [{
        path: '/',
        name: 'mainpage',
        meta: {
            icon: '_cbqk',
            title: '主页面',
            keepAlive: false
        },
        component: mainpage,
        children: [{
            path: 'dcOnemap',
            name: 'dcOnemap',
            meta: {
                title: '调查一张图',
                keepAlive: false
            },
            components: { withMap: (resolve) => require(["@/views/dcOnemap"], resolve) }

        }]
    },
    {
        path: '/',
        name: 'mainpage',
        meta: {
            icon: '_cbqk',
            title: '主页面',
            keepAlive: false
        },
        component: mainpage,
        children: [{
            path: 'dcTask',
            name: 'dcTask',
            meta: {
                title: '调查任务',
                keepAlive: false
            },
            components: { widthMap: () =>
                    import ('@/views/dcTask.vue') }
        }]

    },

    {
        path: '/',
        name: 'mainpage',
        meta: {
            icon: '_cbqk',
            title: '主页面',
            keepAlive: false
        },
        component: mainpage,
        children: [{
            path: 'taskCheck',
            name: 'taskCheck',
            meta: {
                title: '任务审核与查看',
                keepAlive: false
            },
            component: () =>
                import ('@/views/taskCheck.vue')
        }]
    }, {
        path: '/',
        name: 'mainpage',
        meta: {
            icon: '_cbqk',
            title: '主页面',
            keepAlive: false
        },
        component: mainpage,
        children: [{
            path: 'zjdStatis',
            name: 'zjdStatis',
            meta: {
                title: '宅基地统计',
                keepAlive: false
            },
            component: () =>
                import ('@/views/zjdStatis.vue')
        }]


    }, {
        path: '/',
        name: 'mainpage',
        meta: {
            icon: '_cbqk',
            title: '主页面',
            keepAlive: false
        },
        component: mainpage,
        children: [{
            path: 'dataImport',
            name: 'dataImport',
            meta: {
                title: '数据导入',
                keepAlive: false
            },
            component: () =>
                import ('@/views/dataImport.vue')
        }]

    }
]
export default appRouter