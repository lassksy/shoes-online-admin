<template>
    <div id="users">
     <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
     </el-breadcrumb>
     <el-card>
      <div class="header">
        <el-input
      v-model="keyword"
      style="max-width: 600px"
      placeholder="请输入关键词"
      class="input"
    >
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
      </div>
        <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Date" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Name" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
     </el-card>
    </div>
</template>

<script setup lang="ts">
import { ElementPlus } from '@element-plus/icons-vue';
import { ArrowRight , Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
const keyword=ref<string>();



import { Timer } from '@element-plus/icons-vue'

interface User {
  "avater": "string",
  "createTime": "2024-04-14T12:17:34.045Z",
  "email": "string",
  "gender": 0,
  "id": 0,
  "integration": 0,
  "isDeleted": 0 | 1,
  "nickname": "string",
  "phoneNumber": "string",
  "status": 0 | 1,
  "updateTime": "2024-04-14T12:17:34.045Z",
  "username": "string"
  "password": "string",
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',

  },
]


</script>

<style lang="scss" scoped>
    #users {
            .el-breadcrumb {
              margin-bottom: 20px;
            }

            .header {
              .input {
                width: 30%;
              }
            }
    }

</style>