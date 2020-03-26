import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面


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
                    component: () => import(/* webpackChunkName: "KnowledgeBase" */ '../components/page/KnowledgeBase.vue'),
                    meta: { title: '知识库' }
                },
                {
                    path: '/totalEquip',
                    component: () => import(/* webpackChunkName: "totalEquip" */ '../components/page/TotalEquipment.vue'),
                    meta: { title: '设备总数量' }
                },
                {
                    path: '/operating',
                    component: () => import(/* webpackChunkName: "operating" */ '../components/page/OperatingEquipment.vue'),
                    meta: { title: '运行设备数量' }
                },
                {
                    path: '/abnormal',
                    component: () => import(/* webpackChunkName: "abnormal" */ '../components/page/AbnormalEquipment.vue'),
                    meta: { title: '运行设备数量' }
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
                    component: () => import(/* webpackChunkName: "watereditor" */ '../components/page/WaterEditor.vue'),
                    meta: { title: '实时数据管理' }
                },
                {
                    // 水产养殖历史数据管理
                    path: '/watermarkdown',
                    component: () => import(/* webpackChunkName: "watermarkdown" */ '../components/page/WaterMarkdown.vue'),
                    meta: { title: '历史数据管理' }
                },
                {
                    // 海水稻实时数据管理
                    path: '/seaeditor',
                    component: () => import(/* webpackChunkName: "seaeditor" */ '../components/page/SeaEditor.vue'),
                    meta: { title: '实时数据管理' }
                },
                {
                    // 海水稻历史数据管理
                    path: '/seamarkdown',
                    component: () => import(/* webpackChunkName: "seamarkdown" */ '../components/page/SeaMarkdown.vue'),
                    meta: { title: '历史数据管理' }
                },
                {
                    // GrowthModel生长监测模型
                    path: '/GrowthModel',
                    component: () => import(/* webpackChunkName: "/GrowthModel" */ '../components/page/GrowthModel.vue'),
                    meta: { title: '生长监测模型' }
                },
                {
                    // EnvirWarnModel环境监测预警模型
                    path: '/EnvirWarnModel',
                    component: () => import(/* webpackChunkName: "EnvirWarnModel" */ '../components/page/EnvirWarnModel.vue'),
                    meta: { title: '环境监测预警模型' }
                },
                {
                    // DeviceControlModel设备智能调控模型
                    path: '/DeviceControlModel',
                    component: () => import(/* webpackChunkName: "DeviceControlModel" */ '../components/page/DeviceControlModel.vue'),
                    meta: { title: '设备智能调控模型' }
                },
                {
                    // DiswarnDiagModel病害预警诊断模型
                    path: '/DiswarnDiagModel',
                    component: () => import(/* webpackChunkName: "DiswarnDiagModel" */ '../components/page/DiswarnDiagModel.vue'),
                    meta: { title: '病害预警诊断模型' }
                },
                {
                    // KnowledgeGraph知识图谱
                    path: '/KnowledgeGraph',
                    component: () => import(/* webpackChunkName: "KnowledgeGraph" */ '../components/page/KnowledgeGraph.vue'),
                    meta: { title: '知识图谱' }
                },
                {
                    path:'/manage',
                    component: () => import(/* webpackChunkName: "UserControl" */ '../components/page/UserControl.vue'),
                    meta: { title: '用户信息管理' }
                },
                {
                    path:'/baseform',
                    component: () => import(/* webpackChunkName: "baseform" */ '../components/page/BaseForm.vue'),
                    meta: { title: '个人信息管理' }
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
                    component: () => import(/* webpackChunkName: "charts" */ '../components/page/BaseCharts.vue'),
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
                    component: () => import(/* webpackChunkName: "dialog" */ '../components/page/DragDialog.vue'),
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
    ],
});

