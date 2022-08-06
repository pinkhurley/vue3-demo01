<script setup>
import { ref } from 'vue';

let search_input = ref('')
let tableData = ref(
  [
    {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  ]
)
let multipleSelection = ref([])

const handleClickBtn = () =>{
  console.log("click")
} 

const handleSelectionChange = (val)=>{
  multipleSelection.value = val
}

</script>

<template>
  <div class="table_box">
    <!-- 标题区域 -->
    <div class="demo_title">
      <h2>最简单的表单demo</h2>
    </div>
    <!-- 搜索区域 -->
    <div class="demo_search">
      <el-input v-model="search_input" placeholder="请输入姓名搜索" />
      <el-button type="primary">增加</el-button>
    </div>
    <div class="demo_table">
      <el-table 
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange" 
      border>
        <el-table-column type="selection" width="55" />
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClickBtn"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
  </el-table>
    </div>
  </div>
  
  
</template>

<style scoped>
.table_box{
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}
.demo_title{
  text-align: center;
}
.demo_search{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.el-input{
  width: 200px;
}
</style>
