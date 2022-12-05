<template>
    <div class='artist'>
        <div class="artist-container">
            <div class="artist-main">
                <div class="list-container" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
                    <template v-for="item in list">
                        <artist-item :item="item"></artist-item>
                    </template>
                    <template v-if="isLoading">
                        <Loading />
                    </template>
                </div>
            </div>
            <div class="aside-box">
                <el-affix :offset="140">
                    <div class="aside-menu">
                        <div class="filter">
                            <div class="filter-item">
                                <span v-for="(item, index) in initial" :key="index" :class=" index === initialIndex ? 'active' : ''" @click="selectType('initial', index)">{{item.label}}</span>
                            </div>
                            <div class="filter-item">
                                <span v-for="(item, index) in area" :key="index" :class=" index === areaIndex ? 'active' : ''" @click="selectType('area', index)">{{item.label}}</span>
                            </div>
                            <div class="filter-item">
                                <span v-for="(item, index) in type" :key="index" :class=" index === typeIndex ? 'active' : ''" @click="selectType('type', index)">{{item.label}}</span>
                            </div>
                        </div>
                    </div>
                </el-affix>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '@components/Loading.vue';
import ArtistItem from '@components/ArtistItem.vue';
import { onMounted, getCurrentInstance, watchEffect, reactive, toRefs } from '@vue/runtime-core';
export default {
    name: 'Artist',
    components: {
        Loading,
        ArtistItem
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const info = reactive({
            type: [{ label: '全部', val: -1 }, { label: '男歌手', val: 1 }, { label: '女歌手', val: 2 }, { label: '乐队', val: 3 }],
            area: [{ label: '全部', val: -1 }, { label: '华语', val: 7 }, { label: '欧美', val: 96 }, { label: '日本', val: 8 }, { label: '韩国', val: 16 }, { label: '其他', val: 0 }],
            initial: [{ label: '热门', val: -1 }, { label: '#', val: 0 }],
            typeIndex: 0,
            areaIndex: 0,
            initialIndex: 0,
            params: {
                area: '',
                type: '',
                initial: '',
                limit: 30,
                offset: 0
            },
            list: [],
            isLoading: true,
            busy: true
        });

        const renderInitial = () => {
            const alphabet = []
            for (let i = 0; i < 26; i++) {
                alphabet.push({
                    label: String.fromCharCode(65 + i),
                    val: String.fromCharCode(97 + i)
                })
            }
            info.initial = [info.initial[0], ...alphabet, info.initial[1]]
        };

        const selectType = (type, index) => {
            info[type + 'Index'] = index
            info.list = []
            info.params.offset = 0
            info.params[type] = info[type][index].val
        };

        const getArtist = async(params) => {
            const { data: res } = await proxy.$http.artistList(params)

            if (res.code !== 200) {
                return proxy.$msg.error('数据请求失败')
            }
            info.list = info.params.offset !== 0 ? [...info.list, ...res.artists] : res.artists
            info.busy = !res.more
            info.isLoading = res.more
        };

        const loadMore = () => {
            info.busy = true
            info.params.offset = info.list.length
        }

        onMounted(() => {
            info.params.area = info.area[info.areaIndex].val
            info.params.type = info.type[info.typeIndex].val
            info.params.initial = info.initial[info.initialIndex].val
            renderInitial();
        })

        watchEffect(() => {
            getArtist(info.params);
        });

        return {
            ...toRefs(info),
            selectType,
            getArtist,
            loadMore
        }
    }
}
</script>
<style scoped lang="less">
.artist-container {
    display: flex;
    padding-top: 40px;

    .artist-main {
        flex: 1;
    }
}
.aside-menu {
    padding: 20px 20px 1px;
    margin-bottom: 25px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
}

.filter-item {
    font-size: 0;
    padding-bottom: 20px;

    span {
        display: inline-block;
        padding: 0 12px;
        font-size: 14px;
        line-height: 30px;
        margin-right: 6px;
        vertical-align: top;
        cursor: pointer;
        border-radius: 3px;

    
    }
}

.list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 40px;
    margin-right: -40px;

}

</style>
