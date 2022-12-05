<template>
    <header class="header">
        <ul class="nav">
            <li><router-link to="/" class="logo"><img src="@assets/img/a1.jpg" alt="" style="width: 150px;"></router-link></li>
            <li :class="{'is-active' : menuActive.indexOf(item.path) >= 0}" v-for="item in menuList" :key="item.path" @click="selectMenu(item.path)">
                <i :class="['iconfont', `icon-${item.path}`]"></i><span>{{item.name}}</span>
            </li>
        </ul>
    </header>
</template>
<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { reactive, computed } from 'vue'

    const route = useRoute();
    const router = useRouter();
    const menuList = reactive([{
            name: '首页',
            path: 'index'
        }, {
            name: '歌单',
            path: 'playlist'
        },  {
            name: '歌手',
            path: 'artist'
        }, 
            {
            name:'关于我们',
            path:'my'
            }
        ]);
    // 当前选择菜单
    const menuActive = computed(() => route.path);

    // 切换导航跳转
    const selectMenu = (item) => {
        router.push({
                path: '/' + item
        })
    };
  
  
</script>

<style lang="less" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
}

.logo {
    width: 120px;
}

.nav {
    list-style: none;
    padding-top: 30px;
    border-top: 1px solid #f5f5f5;
    
  
    li {
        margin-left: 50px;
        float: left;
        padding: 10px 50px;
        color: var(--color-text-main);
        border-radius: 20px;
        text-align: left;
        font-weight: 300;
        cursor: pointer;

        &.is-active {
            height: 50px;
            font-weight: 800;
            background-color: rgb(216, 209, 203);
            box-shadow: 0 20px 27px rgb(0 0 0 / 5%);

            .iconfont {
                color: #fff;
                background-color: var(--color-text-height);
            }
        }

        span {

            display: inline-block;
            line-height: 50px;
        }
    }

    .iconfont {
        display: inline-flex;
        width: 32px;
        height: 32px;
        background-color: #fff;
        box-shadow: 0 4px 6px rgb(0 0 0 / 12%);
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        font-size: 18px;
        color: var(--color-text);
       
    }
}

.info {
    padding: 30px 0;
    font-weight: bold;
    text-align: left;

    p {
        padding-top: 20px;
    }

    a {
        display: block;
        line-height: 24px;
        color: var(--color-text-height);
    }
}


</style>