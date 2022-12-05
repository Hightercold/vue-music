<template>
    <el-container>
        <el-main>
            <Header />
            <router-view></router-view>
        </el-main>
        <Login v-show="loginDialogVisible" />
        <play-bar></play-bar>
    </el-container>
</template>
<script setup>
    import Header from '@components/Header.vue';
</script>
<style>

</style>
