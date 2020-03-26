<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i>数据管理</el-breadcrumb-item>
                <el-breadcrumb-item>鱼菜共生实时数据管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-row">
                <div class="handle-box">
                    <!--<el-col :span="10" style="padding-right:0px">
                        <Select v-model="model11" filterable>
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </el-col>-->
                    <!--<el-col :span="8">
                        <el-date-picker type="date" placeholder="Select date" style="width: 200px"></el-date-picker>
                    </el-col>-->
                    <el-cascader :options="deviceOptions" v-model="deviceOptions" span="10"></el-cascader>
                    <!--日期时间-->
                    <el-col :span="10">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="date1"
                                    value-format="yyyy-MM-dd"
                                    style="width: 25%;"
                            ></el-date-picker>
                        </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="10">
                            <el-time-picker
                                    placeholder="选择时间"
                                    v-model="date2"
                                    style="width: 25%;"
                            ></el-time-picker>
                        </el-col>
                    <!--日期时间结束-->
                    <el-button type="choose">确定</el-button>
                    <el-button type="out">导出</el-button>
                </div>
                <el-table :data="unread" width="100%">
                    <el-table-column label="序号">
                        <template slot-scope="scope">
                            <span class="message-title">{{scope.row.title}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="age" label="采集时间" width="150"></el-table-column>
                    <el-table-column prop="date" label="date" width="150"></el-table-column>
                    <el-table-column prop="Nicknome1" label="指标1" width="150"></el-table-column>
                    <el-table-column prop="Nicknome2" label="溶解氧" width="150"></el-table-column>
                    <el-table-column prop="Nicknome3" label="水温" width="150"></el-table-column>
                    <el-table-column prop="Nicknome4" label="PH值" width="150"></el-table-column>
                    <el-table-column label="操作" width="120">
                        <template slot-scope="scope">
                            <el-button size="small" @click="handleRead(scope.$index)">图表展示</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <el-row :gutter="20">
                    <!--<el-col :span="8">
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
                    </el-col>-->
                    <!--<el-card :span="16">
                        <legend>设备情况</legend>
                        <el-row :gutter="18" class="mgb20">
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px',color:'black'}" >
                                    <div class="grid-content grid-con-1">
                                        <div class="grid-cont-right">
                                            <div>设备总数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px'}" >
                                    <div class="grid-content grid-con-2">
                                        <div class="grid-cont-right" >
                                            <div>运行设备数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px'}">
                                    <div class="grid-content grid-con-3">
                                        <div class="grid-cont-right">
                                            <div>异常设备数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
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
                        <legend>设备情况</legend>
                        <el-row :gutter="18" class="mgb20">
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px',color:'black'}" >
                                    <div class="grid-content grid-con-1">
                                        <div class="grid-cont-right">
                                            <div>设备总数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px'}" >
                                    <div class="grid-content grid-con-2">
                                        <div class="grid-cont-right" >
                                            <div>运行设备数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                            <el-col :span="8">
                                <el-card shadow="hover" :body-style="{padding: '0px'}">
                                    <div class="grid-content grid-con-3">
                                        <div class="grid-cont-right">
                                            <div>异常设备数量</div>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
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
                    </el-card>-->
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
                    <el-card :span="12">
                        <fieldset>
                            <legend>监测指标概览</legend>
                            <el-row :gutter="20">
                                <el-col :span="10">
                                    <el-card shadow="hover">
                                        <div class="content-title">饼状图</div>
                                        <div class="chart">
                                            <div id="pieChart" :style="{width: '380px', height: '330px'}"></div>
                                        </div>
                                    </el-card>
                                </el-col>
                                <el-col :span="12">
                                    <el-card shadow="hover">
                                        <div class="content-title">柱状图</div>
                                        <div class="echart-box" id="b" style="width: 380px; height:330px"></div>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </fieldset>
                    </el-card>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    import bus from '../common/bus';
    export default {
        data () {
            return {
                date1:'',
                date2:'',
                deviceOptions:[
                    {
                        value: 'device1',
                        label: '传感器1'
                    },
                    {
                        value: 'device2',
                        label: '传感器2'
                    },
                    {
                        value: 'device3',
                        label: '传感器3'
                    },
                ],
                cityList: [
                    {
                        value: '传感器',
                        label: '传感器'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: '',
                message: 'first',
                showHeader: true,
                unread: [{
                    age: '40',
                    Nicknome1: 'Peldi',
                    Nicknome2:'2.1',
                    Nicknome3:'17℃',
                    Nicknome4:'6.4',
                    date: '2018-04-19 20:00:00',
                    title: 'Giacomo Guilizzoni',
                },{
                    age: '38',
                    Nicknome1: '',
                    Nicknome2:'2.2',
                    Nicknome3:'15℃',
                    Nicknome4:'6.8',
                    date: '2018-04-19 20:00:00',
                    title: 'Mareo Botton',
                }, {
                    age: '33',
                    Nicknome1: 'Patato',
                    Nicknome2:'2.2',
                    Nicknome3:'16℃',
                    Nicknome4:'7.2',
                    date: '2018-04-19 20:00:00',
                    title: 'Better Haif',
                },{
                    age: '41',
                    Nicknome1: 'Monitor',
                    Nicknome2:'2.0',
                    Nicknome3:'',
                    Nicknome4:'7.6',
                    date: '2018-04-19 20:00:00',
                    title: 'Han Nan',
                }],
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
                }
            }
        },
        components: {
            Schart
        },
        mounted() {
            //let myChart = this.echarts.init(document.getElementById('myChart'))
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

            let dom1 = document.getElementById('b');
            let myChart1 = this.echarts.init(dom1);
            myChart1.setOption({
                color:['#4ED8DA'],
                title : {
                    text: '每月检修统计',
                    x:15,
                    y:15,
                    textStyle:{
                        fontSize: 16,
                        fontWeight: 'bolder',
                        color: '#333'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                grid:{
                    borderWidth:0,
                    x:'10%',
                    y:'20%',
                    x2:'5%',
                    y2:'15%',
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        axisLine:{
                            show:false,
                        },
                        splitLine:{
                            show:false,  //不显示分割线
                        },
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine:{
                            show:false,
                        }
                    }
                ],
                series : [
                    {
                        name:'数量',
                        type:'bar',
                        data:[2, 4, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3],
                    }
                ]
            });
        }
    };
</script>
<style scoped>
    .handle-box {
        margin-bottom: 0px;
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

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

</style>
