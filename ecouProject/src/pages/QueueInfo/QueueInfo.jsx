import Taro, { getApp } from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView} from '@tarojs/components'
import { AtTabBar, AtSearchBar, AtAvatar, AtTabs, AtTabsPane, AtButton } from 'taro-ui'
import classNames from 'classnames';
import {setGlobalData, getGlobalData} from "../../globaldata"
import './QueueInfo.scss'

import play_pic from '../../img/play_pic.jpg'

export default class Queueinfo extends Component {

  

  render () {

    var top_height = wx.getSystemInfoSync().statusBarHeight+40;

    return (
      <View className='queue-info-page' style={{backgroundImage:`url(${play_pic})`}}/* 这个标签主要是用来放background*/>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <View className='at-col bg-red'>1</View>
          <View className='at-row'>1</View>
          <View className='at-row'>1</View>
        </View>
      </View>
    )
  }
}
