const baseURL = 'https://api.douban.com/v2/';      // API 前缀
export default {

    // 图书搜索
    book_search: baseURL + 'book/search',
    // 图书详情
    book_search_id: baseURL + 'book/',

    // 音乐搜索
    music_search: baseURL + 'music/search',
    // 音乐详情
    music_search_id: baseURL + 'music/',

    // 电影搜索
    movie_search: baseURL + 'movie/search',
    // 电影详情
    movie_search_id: baseURL + 'movie/subject/',

};
export function queryMovies(city, start, count) {
    return "http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a" + "&city="+city +"&start=" + start + "&count=" + count
}

/// 查询即将上映的电影
export function comingMovies(city, start, count) {
    return "http://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a"+ "&city="+city + "&start=" + start + "&count=" + count
}
