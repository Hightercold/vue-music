import api from './instance'
// 首页轮播图
const getBanner = () => { return api.get('/banner', {}) }
// 音乐是否可用
const checkSong = ({ id = '' }) => { return api.get(`/check/music?id=${id}`, {}) }

/* ********* 歌单 ********* */
// 热门歌单分类
const hotList = () => { return api.get('/playlist/hot', {}) }
// 歌单列表
const playList = ({ order = 'hot', cat = '', limit = 50, offset = 0 }) => { return api.get(`/top/playlist?limit=${limit}&order=${order}&cat=${cat}&offset=${offset}`, {}) }
// 推荐歌单
const personalized = (limit = 30) => { return api.get(`/personalized?limit=${limit}`, {}) }
// 精品歌单
const highquality = (limit = 20, before = 0) => { return api.get(`/top/playlist/highquality?limit=${limit}&before=${before}`, {}) }
// 精品歌单标签
const highqualitytag = () => { return api.get('/playlist/highquality/tags', {}) }
// 歌单分类
const catlist = () => { return api.get('/playlist/catlist', {}) }
// 歌单详情
const playlistdetail = ({ id = '', s = 8 }) => { return api.get(`/playlist/detail?id=${id}&s=${s}`, {}) }
// 相关歌单推荐
const playlistRelated = ({ id = '' }) => { return api.get(`/related/playlist?id=${id}`, {}) }


/* ********* 歌曲 ********* */
// 歌曲详情 多个id , 隔开
const songDetail = ({ ids = '', timestamp = 0 }) => { return api.post(`/song/detail?timestamp=${timestamp}`, { ids: ids }) }
// 获取音乐URL
const songUrl = ({ id = '' }) => { return api.get(`/song/url?id=${id}`, {}) }
// 喜欢歌曲
const likeSong = ({ id = '', like = false }) => { return api.get(`/like?id=${id}&like=${like}`, {}) }
// 歌词
const lyrics = ({ id = '' }) => { return api.get(`/lyric?id=${id}`, {}) }
// 获取相似音乐
const simiSong = ({ id = '' }) => { return api.get(`/simi/song?id=${id}`, {}) }
// 包含这首歌的歌单
const simiPlayList = ({ id = '' }) => { return api.get(`/simi/playlist?id=${id}`, {}) }



/* ********* 歌手 ********* */
// 歌手介绍
const artistDesc = ({ id = '' }) => { return api.get(`/artist/desc?id=${id}`, {}) }
// 歌手热门歌曲
const artists = ({ id = '' }) => { return api.get(`/artists?id=${id}`, {}) }
// 收藏/取消收藏歌手
const artistSub = ({ id = '', t = '1' }) => { return api.get(`/artist/sub?id=${id}&t=${t}`, {}) }
// 获取歌手专辑
const artistAlbum = ({ id = '', limit = 50, offset = 0 }) => { return api.get(`/artist/album?id=${id}&limit=${limit}&offset=${offset}`, {}) }
// 获取歌手 mv
const artistMv = ({ id = '', limit = 50, offset = 0 }) => { return api.get(`/artist/mv?id=${id}&limit=${limit}&offset=${offset}`, {}) }
// 获取歌手列表
const artistList = ({ type = -1, area = -1, initial = '', limit = 50, offset = 0 }) => { return api.get(`/artist/list?type=${type}&area=${area}&initial=${initial}&limit=${limit}&offset=${offset}`, {}) }

// 热门话题
const hotTopic = (limit = 20, offset = 0) => { return api.get(`/hot/topic?limit=${limit}&offset=${offset}`, {}) }
// 热门歌手
const topArtists = ({ limit = 30, offset = 0 }) => { return api.get(`/top/artists?limit=${limit}&offset=${offset}`, {}) }

// 热门电台
const getHotDj = ({ limit = 30, offset = 0 }) => { return api.get(`/dj/hot?limit=${limit}&offset=${offset}`, {}) } 

export {
    getBanner,
    checkSong,
    hotList,
    playList,
    catlist,
    playlistdetail,
    playlistRelated,
    songDetail,
    songUrl,
    likeSong,
    lyrics,
    simiSong,
    simiPlayList,
    artistDesc,
    artists,
    artistSub,
    artistAlbum,
    artistMv,
    artistList,
    personalized,
    highquality,
    highqualitytag,
    hotTopic,
    topArtists,
    getHotDj
}
