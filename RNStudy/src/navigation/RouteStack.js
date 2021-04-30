import RegisterScreen from '../screen/RegisterScreen';
import LoginView from '../screen/LoginView';
import SimpleListScreen from '../screen/SimpleListScreen';
import GridLayoutScreen from '../screen/GridLayoutScreen';
import SectionListScreen from '../screen/SectionListScreen';
import CircleList from '../screen/CircleList';
import MultipleChoiceList from '../screen/MultipleChoiceList'
import WebviewPage from '../screen/WebViewPage';
import MainView from  '../screen/MainView';
import ScrollTopTabView from '../screen/ScrollTopTabView'
/**
 * title为空，则表示不需要显示title，也可以配置各种页面参数
 * @type
 */
export const Routers = {

    MainView: {component: MainView, title: '首页'},
    ScrollTopTabView: {component: ScrollTopTabView, title: '滑动Tab'},
    RegisterScreen: {component: RegisterScreen, title: '注册'},
    LoginView: {component: LoginView, title: '登录'},
    SimpleListScreen: {component: SimpleListScreen, title: 'Simple List'},
    GridLayoutScreen: {component: GridLayoutScreen, title: 'Grid Layout'},
    SectionListScreen: {component: SectionListScreen, title: 'Grid Layout'},
    CircleList: {component: CircleList, title: '单选实现'},
    MultipleChoiceList: {component: MultipleChoiceList, title: '多选实现'},
    WebviewPage: {component: WebviewPage, title: '详情'},
};

