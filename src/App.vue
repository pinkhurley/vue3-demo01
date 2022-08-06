<script setup>
import { ref } from 'vue';

let search_input = ref('')
let tableData = ref([
  {
      id: "1",
      name: 'July',
      age: 'boy',
      sex: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: "2",
      name: 'Ana',
      age: 'girl',
      sex: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: "3",
      name: 'Seven',
      age: 'man',
      sex: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: "4",
      name: 'Ming',
      age: 'woman',
      sex: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
])
let multipleSelection = ref([])
let dialogFormVisible = ref(false)
let formLabelWidth = ref(50)
let tableForm = ref({
  name: '',
  age: '',
  sex: '',
  city: '',
  address: ''
})
let dialogType = ref('add')


const handleSelectionChange = (val)=>{
  // multipleSelection.value = val
  multipleSelection.value = []
  val.forEach(item => {
    multipleSelection.value.push(item.id)
  });
  console.log(multipleSelection.value)
}

const handleAdd = () =>{
  dialogFormVisible.value = true
}

const dialogConfirm = () =>{
  dialogFormVisible.value = false

  // 判断是新增还是编辑
  if(dialogType === 'add'){
    tableData.value.push({
    id: (tableData.value.length + 1).toString(),
    ...tableForm.value
  })
  }else{
    let index = tableData.value.findIndex(item => item.id === tableForm.value.id)
    console.log(index)
    tableData.value[index] = tableForm.value
  }
  
}

const dialogEdit =(row) =>{
  console.log(row)
  dialogFormVisible.value = true
  dialogType.value = 'edit'
  tableForm.value = {...row}

}

const tableRowDel = ({id}) => {
  // console.log(id)
  let rowIndex = tableData.value.findIndex(item=>item.id === id)
  tableData.value.splice(rowIndex, 1)
}

const tableDelChoose = ()=>{
  multipleSelection.value.forEach(id=>{
    tableRowDel({id})
  })
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
      <el-input class="search_input" v-model="search_input" placeholder="请输入姓名搜索" />
      <div class="btn_list">
        <el-button type="primary" @click="handleAdd">增加</el-button>
        <el-button type="danger" @click="tableDelChoose" v-if="multipleSelection.length > 0">删除选中</el-button>
      </div>
    </div>
    <div class="demo_table">
      <el-table 
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange" 
      border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="120" />
        <el-table-column prop="sex" label="性别" width="120" />
        <el-table-column prop="city" label="城市" width="120" />
        <el-table-column prop="address" label="地址" width="600" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default="scope">
            <el-button link type="primary" size="small" @click="tableRowDel(scope.row)" style="color:#F56C6C">删除</el-button>
            <el-button link type="primary" size="small" @click="dialogEdit(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 新增弹窗 -->
      <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'">
        <el-form :model="tableForm">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="tableForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="tableForm.age" autocomplete="off" />
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <el-input v-model="tableForm.sex" autocomplete="off" />
          </el-form-item>
          <el-form-item label="城市" :label-width="formLabelWidth">
            <el-input v-model="tableForm.city" autocomplete="off" />
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="tableForm.address" autocomplete="off" />
          </el-form-item>
         </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogConfirm"
              >Confirm</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
  
  
</template>

<style scoped>
.table_box{
  width: 800px;
  margin: 20px auto;
}
.demo_title{
  text-align: center;
}
.demo_search{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.search_input{
  width: 200px;
}
.dialog_box{
  width: 300px;
}
</style>
