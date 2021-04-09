export default {
  pages: [
    'pages/StoreInfo/StoreInfo',
    'pages/index/index'
  ],
  window: {
    navigationStyle: "custom",
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list:[{
      pagePath: 'pages/StoreInfo/StoreInfo',
      text: 'queue'
    }, {
      pagePath: 'pages/index/index',
      text: '+'
    }, {
      pagePath: 'pages/StoreInfo/StoreInfo',
      text: 'my'
    }]
  }
}
