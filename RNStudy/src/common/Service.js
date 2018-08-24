<<<<<<< HEAD
import {Alert} from 'react-native';
import {NavigationActions} from 'react-navigation';
import BaseComponent from '../screen/BaseComponent';

export default class Service {

    static backendAPIMethod() {
        Alert.alert(
            '提示',
            '请求出错，请重新登录',
            [
                {
                    text: '确定', onPress: () => {
                        // 退出到登录界面
                        let resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({routeName: 'Login'})
                            ],
                            key: null
                        });
                        BaseComponent.screen.nav().dispatch(resetAction);
                    }
                }
            ],
            { cancelable: false }
        )
    }
=======
// import {Alert} from 'react-native';
// import {NavigationActions} from 'react-navigation';
// import BaseComponent from '../screen/BaseComponent';
//
// export default class Service {
//
//     static backendAPIMethod() {
//         Alert.alert(
//             '提示',
//             '请求出错，请重新登录',
//             [
//                 {
//                     text: '确定', onPress: () => {
//                         // 退出到登录界面
//                         let resetAction = NavigationActions.reset({
//                             index: 0,
//                             actions: [
//                                 NavigationActions.navigate({routeName: 'Login'})
//                             ],
//                             key: null
//                         });
//                         BaseComponent.screen.nav().dispatch(resetAction);
//                     }
//                 }
//             ],
//             { cancelable: false }
//         )
//     }
//
//
// }

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
    return "https://api.douban.com/v2/movie/in_theaters?city=" + city + "&start=" + start + "&count=" + count
}

/// 查询即将上映的电影
export function comingMovies(city, start, count) {
    return "https://api.douban.com/v2/movie/coming_soon?city=" + city + "&start=" + start + "&count=" + count
>>>>>>> basicStudy
}