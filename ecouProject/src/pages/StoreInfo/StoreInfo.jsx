import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView} from '@tarojs/components'
import { AtTabBar, AtSearchBar, AtAvatar, AtTabs, AtTabsPane} from 'taro-ui'

import './StoreInfo.scss'

import store_pic from '../../img/storepic.png'
import auth_pic from '../../img/auth.png'
import clock_pic from '../../img/clock_icon.png'
import position_icon from '../../img/position_icon.png'

class StoreInfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      value: ''
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    
    var systemInfo = wx.getSystemInfoSync()
	  var screenHeight = systemInfo.screenHeight;
    var windowHeight = systemInfo.windowHeight;
    var statusBarHeight = systemInfo.statusBarHeight;
    var pixelRatio = systemInfo.pixelRatio;
    const tabbarHeight = ( screenHeight - windowHeight - statusBarHeight ) * pixelRatio
    console.log(screenHeight)
    console.log(windowHeight)


    var top_height = wx.getSystemInfoSync().statusBarHeight+41;
    var system_width = wx.getSystemInfoSync().screenWidth/3;
    var screen_height = wx.getSystemInfoSync().screenHeight;
    var view_height = windowHeight - 200 - 41 - statusBarHeight;
    const scrollTop = 0
    const Threshold = 100
    var scrollStyle = {
      height: `${view_height}px`
    }

    return (
      <View className='store-info-page'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <View className='at-col store-info-background'>
            <AtSearchBar
              showActionButton
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
            />
            <View className='at-row store-info-background-img'>
              <View className='at-row store-pic-position-info' style={{width: `${system_width}px`}}> 
                <AtAvatar className='store-pic-info' image={store_pic}></AtAvatar>
              </View>
              <View className='at-col'> 
                <View className='at-col store-name-position-info'>
                  京剧馆·剧本杀·狼人杀
                </View>
                <View className='at-col store-auth-position-info'>
                  <image className='store-auth-info' src={auth_pic}></image>
                </View>
                <View className='at-col store-clock-position-info'>
                  <image className='store-clock-pic-info' src={clock_pic}></image>
                   营业时间：周一至周日11:00-24:00
                </View>
                <View className='at-col store-address-position-info'>
                  <image className='store-address-pic-info' src={position_icon}></image>
                  <text style='padding-left:1%'>上海市浦东新区川和路333弄万科翡翠公园6期31号楼501 </text>
                </View>
              </View>
            </View>
          </View>
          <View className='at-row' style='background-color:#ffffff'>
            <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              current={this.state.current}
              scroll
              tabList={[
                { title: '今天 04-10', queueNum: 1},
                { title: '周日 04-11', queueNum: 0},
                { title: '周一 04-12', queueNum: 0},
                { title: '周二 04-13', queueNum: 1},
                { title: '周三 04-14', queueNum: 1},
                { title: '周四 04-15', queueNum: 1}
              ]}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0}>
                <ScrollView
                  className='scrollview'
                  scrollY
                  scrollWithAnimation
                  scrollTop={scrollTop}
                  style={scrollStyle}
                  lowerThreshold={Threshold}
                  upperThreshold={Threshold}
                  onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                  onScroll={this.onScroll}
                >
                  <View className='at-row queue-tab-info'></View>
                  <View className='at-row queue-tab-info'></View>
                  <View className='at-row queue-tab-info'></View>
                  <View className='at-row queue-tab-info'></View>
                  <View className='at-row queue-tab-info'></View>
                </ScrollView>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={4}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={5}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
              </AtTabsPane>
            </AtTabs>
          </View>
        </View>
      </View>
    )
  }
}

export default StoreInfo
