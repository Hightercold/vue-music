<template>
    <div class="play-bar-main">
        <transition name="fade-bar">
            <bar 
            v-if="barType == 'Bar'"
            @audioHandler="playSongStates" 
            @playAudioMode="playAudioMode"
            @setvolumeProgress="setvolumeProgress"
            @setVolumeHandler="setVolumeHandler"></bar>
        </transition>
     
        <audio-box ref="audioRef" @setCurrentTime="setCurrentTime"></audio-box>
    </div>
</template>

<script>
import AudioBox from '@components/PlayBarTmp/AudioBox.vue';
import Bar from '@components/PlayBarTmp/Bar.vue';
import { provide, ref } from 'vue';

export default {
    name:'PlayBar',
    setup() {
        const audioRef = ref(null);
        const currentTime = ref(0);
        const barType = ref('Bar');

        // 歌曲播放操作； 播放、暂停、上一首、下一首
        const playSongStates = (state) => {
            audioRef.value.playAudioType(state);
        };

        // 歌曲播放类型：循环、单曲、随机
        const playAudioMode = (mode) => {
            audioRef.value.playAudioMode(mode);
        };

        // 拖拽音量进度条
        const setvolumeProgress = (progress) => {
            audioRef.value.setvolumeProgress(progress);
        };
        // 设置音量
        const setVolumeHandler = (state) => {
            audioRef.value.setVolumeHandler(state);
        };

        // 拖拽音频进度条
        const setAudioProgress = (t) => {
            audioRef.value.setAudioProgress(t);
        };

        // 当前音频的播放时长
        const setCurrentTime = (t) => {
            currentTime.value = t;
        };

        const changeMini = (type) => {
            barType.value = type;
        }

        // 下发当前音频时间戳
        provide('currentTime', currentTime);

        return {
            barType,
            audioRef,
            changeMini,
            setCurrentTime,
            playSongStates,
            playAudioMode,
            setVolumeHandler,
            setAudioProgress,
            setvolumeProgress
        }
    },
    components: {
        AudioBox,
        Bar
    }
}
</script>
<style scoped lang="less">


</style>
