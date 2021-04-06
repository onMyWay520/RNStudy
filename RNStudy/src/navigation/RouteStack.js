import RegisterScreen from '../screen/RegisterScreen';
import LoginView from '../screen/LoginView';
import SimpleListScreen from '../screen/SimpleListScreen';
import GridLayoutScreen from '../screen/GridLayoutScreen';
import SectionListScreen from '../screen/SectionListScreen';
import CircleList from '../screen/CircleList';
import MultipleChoiceList from '../screen/MultipleChoiceList'
// import listViewSwipe from '../screen/listViewSwipe'
import WebviewPage from '../screen/WebViewPage';

/**
 * title为空，则表示不需要显示title，也可以配置各种页面参数
 * @type
 */
export const Routers = {
    RegisterScreen: {component: RegisterScreen, title: '注册'},
    LoginView: {component: LoginView, title: '登录'},
    SimpleListScreen: {component: SimpleListScreen, title: 'Simple List'},
    GridLayoutScreen: {component: GridLayoutScreen, title: 'Grid Layout'},
    SectionListScreen: {component: SectionListScreen, title: 'Grid Layout'},
    CircleList: {component: CircleList, title: '单选实现'},
    MultipleChoiceList: {component: MultipleChoiceList, title: '多选实现'},
    // listViewSwipe: {component: listViewSwipe, title: '侧滑实现'},
    WebviewPage: {component: WebviewPage, title: '详情'},
};

