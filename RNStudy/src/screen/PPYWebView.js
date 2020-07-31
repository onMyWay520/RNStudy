import React, { Component } from 'react';
import { AppRegistry,
    WebView,
    StyleSheet,
    Text,
    View,
   } from 'react-native';
var  DEFAULT_URL ='https://www.baidu.com';

// const HTML = `<!DOCTYPEhtml>\n <html>\n <head>\n
//     <title>HTML字符串</title>\n
//     <metahttp-equiv="content-type" content="text/html;charset=utf-8">\n
//     <meta name="viewport"content="width=320, user-scalable=no">\n
//     <style type="text/css">\n
//       body {\n
//         margin: 0;\n
//         padding: 0;\n
//         font: 62.5% arial, sans-serif;\n
//         background: #ccc;\n
//       }\n
//       h1 {\n
//         padding: 45px;\n
//         margin: 0;\n
//         text-align: center;\n
//         color: #33f;\n
//       }\n
//     </style>\n
//   </head>\n
//   <body>\n
//     <h1>加载静态的HTML文本信息</h1>\n
//   </body>\n
//   </html>\`;

export default class PPYWebView extends Component{
    render(){

        return(
            <View style={{flex:1}}>
                <WebView style={styles.webview_style}
                              url={DEFAULT_URL}
                              startInLoadingState={true}
                              domStorageEnabled={true}
                              javaScriptEnabled={true}
                >
                </WebView>
            </View>

        )
       }
}
const styles = StyleSheet.create({

    webview_style: {

        backgroundColor:'#fff',

    }


});