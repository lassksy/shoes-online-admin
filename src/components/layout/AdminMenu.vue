<template>
  <div id="menu">
    <el-menu active-text-color="#fff" background-color="#2b2c44" class="el-menu-vertical-demo" default-active="2"
      text-color="#c1c1c1">
      <component :is="item.children?ElSubMenu:ElMenuItem" v-for="item in menulist" :key="item.id" :index="item.index">
        <template v-if="item.children" #title>
          <el-icon v-if="item.icon">
            <component :is="item.icon"> </component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <span v-if="!item.children">
          <el-icon v-if="item.icon">
            <component :is="item.icon"> </component>
          </el-icon>
          <span>{{ item.name }}</span></span>
        <el-menu-item v-for="subItem  in item.children" :key="subItem.id" :index="subItem.index">
          {{ subItem.name }}
        </el-menu-item>
      </component>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { House, User, Goods } from '@element-plus/icons-vue';
import { ElSubMenu, ElMenuItem } from 'element-plus';
interface MenuItem {
  id: number,
  name: string,
  index: string,
  icon?: Component,
  children?: MenuItem[];
}

const menulist: MenuItem[] = [
  {
    id: 1,
    name: "首页",
    index: "/home/admin-home",
    icon: House,
  },
  {
    id: 2,
    name: "用户管理",
    index: "/home/users",
    icon: User,
  },
  {
    id: 101,
    name: "商品管理",
    index: "/prouduct-management",
    icon: Goods,
    children: [
      {
        id: 102,
        name: "产品列表",
        index: "/home/goods",
      },
      {
        id: 103,
        name: "品牌列表",
        index: "/home/brand",
      },
      {
        id: 104,
        name: "类型列表",
        index: "/home/type",
      },
      {
        id: 105,
        name: "颜色列表",
        index: "/home/color",
      },
      {
        id: 106,
        name: "尺寸列表",
        index: "/home/size",
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>