import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    var systemInfo = wx.getSystemInfoSync();
	  var screenHeight = systemInfo.screenHeight;
    var windowHeight = systemInfo.windowHeight;
    var statusBarHeight = systemInfo.statusBarHeight;

    console.log(`The windows height is ${windowHeight}`);
    console.log(`The screen  height is ${screenHeight}`);
    console.log(`The status height is ${statusBarHeight}`)

    Taro.hideTabBar();
    return (
      <View className='index'>
        <Text>Main page!</Text>
      </View>
    )
  }
}
