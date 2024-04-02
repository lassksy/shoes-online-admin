<template>
    <div id="header">
        <div class="logo-box">
            ShoesOnline
        </div>
        <div class="right-box">
            <div class="title">后台管理系统</div>
            <div class="avater-box">
                <el-avatar :src="userInfoStore.userinfo?.avater" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/stores/userinfo.store';

const userInfoStore = useUserInfoStore();
</script>

<style lang="scss" scoped>
#header {
    background-color: #2b2c44;
    color: #fff;
    display: flex;
    justify-content: space-between;

    .logo-box {
        width: 200px;
        text-align: center;
        line-height: 60px;
        font-size: 22px;
        font-weight: bold;
        color: #e73267;
    }

    .right-box {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;

        .el-avater {
            margin-right: 10px;
        }
    }
}
</style>