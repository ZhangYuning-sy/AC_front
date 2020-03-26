<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-global"></i>异常设备数据</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" align="center"></el-table-column>
            <el-table-column prop="number" label="序号" width="55" align="center"></el-table-column>
            <el-table-column prop="date" label="采集时间"></el-table-column>
            <el-table-column prop="DisOxygen" label="溶解氧"></el-table-column>
            <!--<el-table-column label="账户余额"><template slot-scope="scope">￥{{scope.row.money}}</template></el-table-column>-->
            <el-table-column prop="temperature" label="水温"></el-table-column>
            <el-table-column prop="electrical" label="电导率"></el-table-column>
            <el-table-column prop="ph" label="PH值"></el-table-column>
            <el-table-column prop="andan" label="氨氮"></el-table-column>
            <el-table-column prop="zhuodu" label="浊度"></el-table-column>
            <el-table-column prop="yewei" label="液位"></el-table-column>
            <el-table-column prop="chlorophyll" label="叶绿素"></el-table-column>
        </el-table>
        <!--<table id="targetTable" class="table table-bordered">
            <thead>
            <tr>
                <th>序号</th>
                <th>采集时间</th>
                <th>溶解氧</th>
                <th>水温</th>
                <th>电导率</th>
                <th>PH</th>
                <th>氨氮</th>
                <th>浊度</th>
                <th>液位</th>
                <th>叶绿素</th>
            </tr>
            </thead>
        </table>-->
    </div>
</template>


<style scoped>

</style>
