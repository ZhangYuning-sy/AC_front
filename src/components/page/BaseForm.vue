<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 登录信息管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>个人信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="登录名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="真实姓名">
                        <el-input v-model="form.rename"></el-input>
                    </el-form-item>
                    <el-form-item label="角色选择器">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="kfry" label="开发人员" value="kfry"></el-option>
                            <el-option key="xtc" label="管理员" value="xtc"></el-option>
                            <el-option key="imoo" label="临时用户" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="邮箱地址">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item label="日期时间">
                        <el-col :span="10">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="地址选择">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="选择开关">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="工作内容">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="监控" name="type"></el-checkbox>
                            <el-checkbox label="调试" name="type"></el-checkbox>
                            <el-checkbox label="管理" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="工作时长">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="4-6h"></el-radio>
                            <el-radio label="5-7h"></el-radio>
                            <el-radio label="6-9h"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'baseform',
    data() {
        return {
            options: [
                {
                    value: 'liaoning',
                    label: '辽宁省',
                    children: [
                        {
                            value: 'shenyang',
                            label: '沈阳市',
                            children: [
                                {
                                    value: 'tiexi',
                                    label: '铁西区'
                                },
                                {
                                    value: 'yuhong',
                                    label: '于洪区'
                                },
                                {
                                    value: 'dongling',
                                    label: '东陵区区'
                                }
                            ]
                        },
                        {
                            value: 'dalian',
                            label: '大连市',
                            children: [
                                {
                                    value: 'shahekou',
                                    label: '沙河口区'
                                },
                                {
                                    value: 'pulandian',
                                    label: '普兰店区'
                                },
                                {
                                    value: 'xigang',
                                    label: '西岗区'
                                }
                            ]
                        },
                        {
                            value: 'chaoyang',
                            label: '朝阳市',
                            children: [
                                {
                                    value: 'shuangta',
                                    label: '双塔区'
                                },
                                {
                                    value: 'longcheng',
                                    label: '龙城区'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'shandong',
                    label: '山东省',
                    children: [
                        {
                            value: 'qingdao',
                            label: '青岛市',
                            children: [
                                {
                                    value: 'shibei',
                                    label: '市北区'
                                },
                                {
                                    value: 'licang',
                                    label: '李沧区'
                                },
                                {
                                    value: 'shinan',
                                    label: '市南区'
                                }
                            ]
                        },
                        {
                            value: 'jinan',
                            label: '济南市',
                            children: [
                                {
                                    value: 'zhangqiu',
                                    label: '章丘区'
                                },
                                {
                                    value: 'lixia',
                                    label: '历下区'
                                },
                                {
                                    value: 'tianqiao',
                                    label: '天桥区'
                                }
                            ]
                        },
                        {
                            value: 'jining',
                            label: '济宁市',
                            children: [
                                {
                                    value: 'qufu',
                                    label: '曲阜区'
                                },
                                {
                                    value: 'shizhong',
                                    label: '市中区'
                                },
                                {
                                    value: 'rencheng',
                                    label: '任城区'
                                },
                                {
                                    value: 'yutai',
                                    label: '鱼台区'
                                }
                            ]
                        },
                        {
                            value: 'yantai',
                            label: '烟台市',
                            children: [
                                {
                                    value: 'laishan',
                                    label: '莱山区'
                                },
                                {
                                    value: 'laizhou',
                                    label: '莱州市'
                                },
                                {
                                    value: 'laiyang',
                                    label: '莱阳市'
                                },
                                {
                                    value: 'fushan',
                                    label: '福山区'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'guangdong',
                    label: '广东省',
                    children: [
                        {
                            value: 'guangzhou',
                            label: '广州市',
                            children: [
                                {
                                    value: 'tianhe',
                                    label: '天河区'
                                },
                                {
                                    value: 'haizhu',
                                    label: '海珠区'
                                }
                            ]
                        },
                        {
                            value: 'dongguan',
                            label: '东莞市',
                            children: [
                                {
                                    value: 'changan',
                                    label: '长安镇'
                                },
                                {
                                    value: 'humen',
                                    label: '虎门镇'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南省',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区'
                                }
                            ]
                        }
                    ]
                }
            ],
            form: {
                name: '',
                rename:'',
                email:'',
                region: '',
                date1: '',
                date2: '',
                delivery: true,
                type: ['监控'],
                resource: '4-6h',
                desc: '',
                options: []
            }
        };
    },
    methods: {
        onSubmit() {
            // console.log(this.$message);
            this.$message.success('提交成功！');
        }
    }
};
</script>
