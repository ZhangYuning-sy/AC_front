<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="mgb20" style="height:252px;">
                    <div class="user-info">
                        <img src="../../assets/img/img.jpg" class="user-avator" alt />
                        <div class="user-info-cont">
                            <div class="user-info-name">{{name}}</div>
                            <div>{{role}}</div>
                        </div>
                    </div>
                    <div class="user-info-list">
                        上次登录时间：
                        <span>2019-12-15</span>
                    </div>
                    <div class="user-info-list">
                        上次登录地点：
                        <span>yantai</span>
                    </div>
                </el-card>
                <el-card shadow="hover" style="height:252px;">
                    <div slot="header" class="clearfix" style="border-radius:10px;">
                        <span>实时消息</span>
                    </div>
                    <span>XXX：设备A不工作了</span><br>
                    <span>XXX：设备B工作正常</span><br>
                    <span>XXX：设备C工作正常</span><br>
                    <span>XXX：设备C工作正常</span><br>
                    <span>XXX：设备C工作正常</span><br>
                    <span>XXX：设备C工作正常</span><br>
                    <span>XXX：设备C工作正常</span><br>
                </el-card>
            </el-col>

            <el-card :span="12">
                <fieldset>
                    <legend>设备情况</legend>
                    <el-row :gutter="18" class="mgb20">
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{padding: '0px',color:'black'}" >
                                <div class="grid-content grid-con-1">
                                    <div class="grid-cont-right " >
                                        <router-link to="/totalEquip" >设备总数量</router-link>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{padding: '0px'}" >
                                <div class="grid-content grid-con-2">
                                    <div class="grid-cont-right" id="page2">
                                        <router-link to="/operating" >运行设备数量</router-link>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="hover" :body-style="{padding: '0px'}">
                                <div class="grid-content grid-con-3">
                                    <div class="grid-cont-right" id="page3">
                                        <router-link to="/abnormal">异常设备数量</router-link>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </fieldset>
                <!--<fieldset>
                   <legend>监测场景</legend>
                   <el-row :gutter="20" class="mgb20">
                       <el-col :span="8">
                           <el-card shadow="hover" :body-style="{padding: '0px'}">
                               <div class="grid-content grid-con-1">
                                   <div class="grid-cont-right">
                                       <div>海水稻</div>
                                   </div>
                               </div>
                           </el-card>
                       </el-col>
                       <el-col :span="8">
                           <el-card shadow="hover" :body-style="{padding: '0px'}" >
                               <div class="grid-content grid-con-2">
                                   <div class="grid-cont-right" >
                                       <div>鱼菜共生</div>
                                   </div>
                               </div>
                           </el-card>
                       </el-col>
                       <el-col :span="8">
                           <el-card shadow="hover" :body-style="{padding: '0px'}">
                               <div class="grid-content grid-con-3">
                                   <div class="grid-cont-right">
                                       <div>水产养殖</div>
                                   </div>
                               </div>
                           </el-card>
                       </el-col>
                   </el-row>
             </fieldset>-->
                <!--<fieldset>
                    <legend>监测场景</legend>
                    <Carousel v-model="value" autoplay loop>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../../assets/img/1.jpg" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../../assets/img/2.jpg"  alt />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../../assets/img/3.jpg"  alt />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">
                                <img src="../../assets/img/4.jpg"  alt />
                            </div>
                        </CarouselItem>
                    </Carousel>
                </fieldset>-->
                <fieldset>
                    <legend>检测场景</legend>
                    <el-carousel :interval="5000" type="card" arrow="always" class="d_jump" :height="imgHeight">
                        <el-carousel-item v-for="item in imgList" :key="item.id">
                            <el-row>
                                <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                </fieldset>

            </el-card>
        </el-row>
        <fieldset>
            <legend>监测指标概览</legend>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div class="content-title">折线图</div>
                        <div id="chartColumn" style="width: 380px; height: 300px;">
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div class="content-title">饼状图</div>
                        <div class="chart">
                            <div id="pieChart" :style="{width: '380px', height: '300px'}"></div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </fieldset>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import echarts from 'echarts'
    import bus from '../common/bus';
    //实例化组件
    export default {
        name: 'dashboard',


        data() {
            return {
                name: localStorage.getItem('ms_username'),
                todoList: [
                    {
                        title: '今天要修复100个bug',
                        status: false
                    },
                    {
                        title: '今天要修复100个bug',
                        status: false
                    },
                    {
                        title: '今天要写100行代码加几个bug吧',
                        status: false
                    },
                    {
                        title: '今天要修复100个bug',
                        status: false
                    },
                    {
                        title: '今天要修复100个bug',
                        status: true
                    },
                    {
                        title: '今天要写100行代码加几个bug吧',
                        status: true
                    }
                ],
                // 图片需要引入, 否则无法显示
                imgList: [
                    { id: 0, idView: require('../../assets/img/3.jpg') },
                    { id: 1, name: '详情', idView: require('../../assets/img/2.jpg') },
                    { id: 2, name: '推荐', idView: require('../../assets/img/1.jpg') },
                    { id: 3, name: '推荐', idView: require('../../assets/img/4.jpg') }
                ],
                value:0,
                data: [
                    {
                        name: '2018/09/04',
                        value: 1083
                    },
                    {
                        name: '2018/09/05',
                        value: 941
                    },
                    {
                        name: '2018/09/06',
                        value: 1139
                    },
                    {
                        name: '2018/09/07',
                        value: 816
                    },
                    {
                        name: '2018/09/08',
                        value: 327
                    },
                    {
                        name: '2018/09/09',
                        value: 228
                    },
                    {
                        name: '2018/09/10',
                        value: 1065
                    }
                ],
                options: {
                    type: 'bar',
                    title: {
                        text: '最近一周各品类销售图'
                    },
                    xRorate: 25,
                    labels: ['周一', '周二', '周三', '周四', '周五'],
                    datasets: [
                        {
                            label: '家电',
                            data: [234, 278, 270, 190, 230]
                        },
                        {
                            label: '百货',
                            data: [164, 178, 190, 135, 160]
                        },
                        {
                            label: '食品',
                            data: [144, 198, 150, 235, 120]
                        }
                    ]
                },
                options2: {
                    type: 'line',
                    title: {
                        text: '最近几个月各品类销售趋势图'
                    },
                    labels: ['6月', '7月', '8月', '9月', '10月'],
                    datasets: [
                        {
                            label: '家电',
                            data: [234, 278, 270, 190, 230]
                        },
                        {
                            label: '百货',
                            data: [164, 178, 150, 135, 160]
                        },
                        {
                            label: '食品',
                            data: [74, 118, 200, 235, 90]
                        }
                    ]
                },
                chartColumn: null,
                charts: "",
                opinion: ["及格人数", "未及格人数"],
                opinionData: [
                    { value: 12, name: "及格人数", itemStyle: "black" },
                    { value: 18, name: "未及格人数", itemStyle: "red" }
                ]
            };
        },
        mounted() {
            this.drawLine();

            this.$nextTick(function() {
                //this.drawPie("pieReport");
            });
            let dom = document.getElementById('pieChart');
            let myChart = this.echarts.init(dom);
            // 绘制图表
            myChart.setOption({
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '75%',
                    data: [{
                        value: 235,
                        name: '视频广告'
                    },
                        {
                            value: 274,
                            name: '联盟广告'
                        },
                        {
                            value: 310,
                            name: '邮件营销'
                        },
                        {
                            value: 335,
                            name: '直接访问'
                        },
                        {
                            value: 400,
                            name: '搜索引擎'
                        }
                    ]
                }]
            });
        },
        components: {
            Schart
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        },

        // created() {
        //     this.handleListener();
        //     this.changeDate();
        // },
        // activated() {
        //     this.handleListener();
        // },
        // deactivated() {
        //     window.removeEventListener('resize', this.renderChart);
        //     bus.$off('collapse', this.handleBus);
        // },
        methods: {
            changeDate() {
                const now = new Date().getTime();//当前日期
                this.data.forEach((item, index) => {
                    const date = new Date(now - (6 - index) * 86400000);
                    item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                });
            },
            drawPie(id) {
                this.charts = this.echarts.init(document.getElementById(id));
                this.charts.setOption({
                    tooltip: {
                        trigger: "item",
                        formatter: "{a}<br/>{b}:{c} ({d}%)"
                    },
                    legend: {
                        bottom: 10,
                        left: "center",
                        data: this.opinion
                    },
                    series: [
                        {
                            name: "状态",
                            type: "pie",
                            radius: "65%",
                            center: ["50%", "50%"],
                            avoidLabelOverlap: false,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: "rgba(0, 0, 0, 0.5)"
                                },
                                color: function(params) {
                                    //自定义颜色
                                    const colorList = ['black', 'red'];
                                    return colorList[params.dataIndex];
                                }
                            },
                            data: this.opinionData
                        }
                    ]
                });
            },
            drawLine(){
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));

                this.chartColumn.setOption({
                    title: { text: 'Column Chart' },
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                });
            }
            // handleListener() {
            //     bus.$on('collapse', this.handleBus);
            //     // 调用renderChart方法对图表进行重新渲染
            //     window.addEventListener('resize', this.renderChart);
            // },
            // handleBus(msg) {
            //     setTimeout(() => {
            //         this.renderChart();
            //     }, 200);
            // },
            // renderChart() {
            //     this.$refs.bar.renderChart();
            //     this.$refs.line.renderChart();
            // }
        }
    };
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }

    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }

    .schart {
        width: 100%;
        height: 300px;
    }
</style>
