import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '消息查询' }
                },
                {
                    path: '/KnowledgeBase',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/KnowledgeBase.vue'),
                    meta: { title: '知识库' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '消息界面' }
                },
                //{
                //   path: '/form',
                //   component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                //    meta: { title: '基本表单' }
                //},
                {
                    // 鱼菜共生实时数据管理
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '实时数据管理' }
                },
                {
                    // 鱼菜共生历史数据管理
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: '历史数据管理' }
                },
                {
                    // 水产养殖实时数据管理
                    path: '/watereditor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/WaterEditor.vue'),
                    meta: { title: '实时数据管理' }
                },
                {
                    // 水产养殖历史数据管理
                    path: '/watermarkdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/WaterMarkdown.vue'),
                    meta: { title: '历史数据管理' }
                },
                {
                    // 海水稻实时数据管理
                    path: '/seaeditor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/SeaEditor.vue'),
                    meta: { title: '实时数据管理' }
                },
                {
                    // 海水稻历史数据管理
                    path: '/seamarkdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/SeaMarkdown.vue'),
                    meta: { title: '历史数据管理' }
                },
                {
                    // GrowthModel生长监测模型
                    path: '/GrowthModel',
                    component: () => import(/* webpackChunkName: "model" */ '../components/page/GrowthModel.vue'),
                    meta: { title: '生长监测模型' }
                },
                {
                    // EnvirWarnModel环境监测预警模型
                    path: '/EnvirWarnModel',
                    component: () => import(/* webpackChunkName: "model" */ '../components/page/EnvirWarnModel.vue'),
                    meta: { title: '环境监测预警模型' }
                },
                {
                    // DeviceControlModel设备智能调控模型
                    path: '/DeviceControlModel',
                    component: () => import(/* webpackChunkName: "model" */ '../components/page/DeviceControlModel.vue'),
                    meta: { title: '设备智能调控模型' }
                },
                {
                    // DiswarnDiagModel病害预警诊断模型
                    path: '/DiswarnDiagModel',
                    component: () => import(/* webpackChunkName: "model" */ '../components/page/DiswarnDiagModel.vue'),
                    meta: { title: '病害预警诊断模型' }
                },
                {
                    // KnowledgeGraph知识图谱
                    path: '/KnowledgeGraph',
                    component: () => import(/* webpackChunkName: "model" */ '../components/page/KnowledgeGraph.vue'),
                    meta: { title: '知识图谱' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});