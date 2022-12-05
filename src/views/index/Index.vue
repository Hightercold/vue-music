<template>
    <div class="home">
        <Banners />

        <div class="hot-list">
            <div class="h_title">
                <h3>热门推荐</h3>
                <span v-for="(item, index) in playlist_tags" :key="item.id" :class="index == playlist_index ? 'active' : ''" @click="choosePlayListType(index)">{{item.name}}</span>
            </div>
            <div class="wrapper">
                <play-list :playList="playlist_list" :loading="playlist_loading" :num="playlist_count"></play-list>
            </div>
        </div>


        <div class='top_list'>
            <rank-list />
        </div>

       

        <div class="dj-artist">
            <div class="dj-list">
                <div class="h_title">
                    <h3>热门电台</h3>
                </div>
                <dj-list />
            </div>
            <div class="artist-list">
                <div class="h_title">
                    <h3>热门歌手</h3>
                </div>
                <artist-list />
            </div>
        </div>
    </div>
</template>

<script>
import Banners from '@views/index/Banner.vue';

import PlayList from '@components/PlayList.vue';

import DjList from '@views/index/DjList.vue'
import ArtistList from '@views/index/ArtistList.vue'
import hot_recom from '@assets/js/index/hot_recom';
import new_album from '@assets/js/index/new_album';

import { toRefs } from '@vue/reactivity';

export default {
    name:'Index',
    setup() {
        // -------------- 推荐歌单
        const { playlist_info, choosePlayListType } = hot_recom();

        // -------------- 新碟
        const { album_info, chooseAlbumType } = new_album();



        return {
            ...toRefs(playlist_info),
            ...toRefs(album_info),
          
            choosePlayListType,
            chooseAlbumType,
  
        }
    },
    components: {
        Banners,
        PlayList,


        DjList,
        ArtistList,
    }
}
</script>
<style lang="less" scoped>
.h_title {
    padding: 20px 0 10px;

    h3 {
        display: inline-block;
        padding-right: 50px;
        font-size: 28px;
        font-weight: 700;
    }

    span {
        display: inline-block;
        font-size: 16px;
        margin: 0 40px 0 0;
        color: var(--color-text-main);
        cursor: pointer;


    }
}

.hot-list, .album_list, .mv_list, .dj-list, .artist-list {
    padding: 0 20px;
    margin-bottom: 25px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
}

.top_list {
    margin-bottom: 25px;   
}
.dj-artist {
    display: flex;
}
.dj-list {
    flex: 1;
    margin-right: 20px;
}
.artist-list {
    width: 440px;
}
</style>