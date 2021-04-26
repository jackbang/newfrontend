import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input } from '@tarojs/components'
import { AtButton, AtNavBar } from 'taro-ui'

import './ComfirmQueueInfo.scss'
import background_img from '../../img/background.png'
import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive2.png'
import telpic from '../../img/tel_icon.png'
import mappic from '../../img/map_icon.png'

export default class Comfirmqueueinfo extends Component {

  handleNavBack() {
    Taro.navigateBack()
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
  }

  render () {
    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var system_width = wx.getSystemInfoSync().screenWidth/3;

    var screenHeight = wx.getSystemInfoSync().screenHeight;
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var screenHeight_rpx = 750*(screenHeight/screenWidth);
    var windowHeight_rpx = 750*(windowHeight/screenWidth);
    var top_height_rpx = 750*(top_height/screenWidth);

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      height: `${windowHeight_rpx - top_height_rpx - 150}rpx`
    }
    return (
      <View className='ComfirmQueueInfo'>
        <image mode='widthFix' src={background_img} style='width:100vw;position:absolute;'></image>
        <View className='at-col' style={{padding: `${top_height_rpx}rpx 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
            onClickLeftIcon={this.handleNavBack}
            color='#ffff'
            leftIconType='chevron-left'
            ><View style='color:#fff;font-size:18px;padding-bottom:5rpx;'>拼车确认</View></AtNavBar>
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            show-scrollbar='false'
            scrollTop={scrollTop}
            style={scrollStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScroll}
            >
            <View className='at-row' style='height:100rpx;padding-top:5%;'>
              <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* 这里是用来规划image放置的位置 */> 
                  <image src={playpic} style='height:300rpx;width:90%;border-radius:10px;'>
                    <text className='play-pic-label-info'>本格</text>
                  </image>
              </View>
              <text style='font-size:6vw;padding-left:4%;padding-top:2%;color:#fff'>木夕僧之戏</text>
            </View>
            <View className='at-col' style={{backgroundColor:`#F9F9F9`,borderRadius:`15px`,paddingBottom:`5%`,minHeight:`${windowHeight_rpx - top_height_rpx - 250}rpx`}}>
              <View className='at-col' style='background-color:#ffff;border-radius:15px;'>
                <View className='play-score-position-info' style='font-size:4vw;font-weight:bold;'>难度
                  <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                    <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                    <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                    <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                    <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-9px;'></image>
                    <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-12px;'></image>
                  </View>
                </View>
                <View style='font-size:4vw;font-weight:bold;padding-left:38%;padding-top:3%;display:flex;align-items:flex-end;'>7人本</View>
                <View className='play-label-position-info' style='padding-top:3%;padding-left: 36%;'>
                    <text className='play-label-info' style='font-size: 3vw'>本格</text>
                    <text className='play-label-info' style='font-size: 3vw'>硬核</text>
                    <text className='play-label-info' style='font-size: 3vw'>现代</text>
                </View>
                <View className='at-col' >
                  <View style='font-size:16px;font-weight:550;color:#000;padding-top:13%;padding-left:4%;'>2021.04.06 周二 15:00</View>
                  <View style='font-size:12px;font-weight:550;color:#00000099;padding-left:4%;'>游戏时长约6小时（以实际游戏时间为准）</View>
                </View>
                <View style='width:650rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:1%;padding-bottom:1%;'></View>
                <View className='at-row' style='padding-bottom:3%;'>
                  <View className='at-col'>
                    <View style='font-size:16px;font-weight:550;color:#000;padding-top:3%;padding-left:5%;'>直觉沉浸式剧本杀</View>
                    <View style='font-size:12px;font-weight:550;color:#00000099;padding-left:5%;'>上海市浦东新区荣科路299号31号501</View>
                  </View>
                  <image src={telpic} mode='heightFix' style='height:24px;padding-top:4.5%;padding-right:3%;'></image>
                  <View style='height:30px;border:0px solid #97979722;border-left-width:2px;margin-top:4%;'></View>
                  <image src={mappic} mode='heightFix' style='height:30px;padding-top:4%;padding-left:3%;padding-right:5%;'></image>
                </View>
              </View>

              <View className='at-col' style='margin-top:3%;background-color:#ffff;border-radius:15px;padding-bottom:3%;'>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
                    <text style='font-size:16px;font-weight:550;color:#000;'>定金金额</text>
                    <text style='font-size:10px;font-weight:500;color:#00000099;'>（10元/人）</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:10%;'>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>合计：</text>
                    <text style='font-size:14px;font-weight:500;color:#FE0101;'>20</text>
                  </View>
                </View>
                <View style='width:680rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:1%;padding-bottom:1%;'></View>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:7%;'>
                    <text style='font-size:14px;font-weight:550;color:#000;'>男玩家</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:15%;'>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>x</text>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>1</text>
                  </View>
                </View>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:7%;'>
                    <text style='font-size:14px;font-weight:550;color:#000;'>女玩家</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:15%;'>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>x</text>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>1</text>
                  </View>
                </View>
              </View>

              <View className='at-col' style='margin-top:3%;background-color:#ffff;border-radius:15px;padding-bottom:3%;'>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
                    <text style='font-size:16px;font-weight:550;color:#000;'>联系方式</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:10%;'>
                    <Input style='font-size:14px;font-weight:500;color:#000000;' placeholder='请输入联系方式'></Input>
                  </View>
                </View>
                <View style='width:680rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:0%;padding-bottom:1%;'></View>
                <View style='font-size:14px;font-weight:500;color:#000000;padding-left:4.5%;padding-top:1%;'>备注</View>
                <View style='font-size:12px;font-weight:500;color:#00000099;padding-left:4.5%;padding-top:1%;width:90%;'>
                  <Input style='word-break:break-all;word-wrap:break-word;white-space:pre-line;' placeholder='可将您的其他要求告知商家'></Input>
                </View>
              </View>
            </View>
            <View className='at-col' style='height:10rpx;'></View>
          </ScrollView>
          <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
            <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
              <text style='font-size:10vw;font-weight:550;color:#FCA62F;'>￥20</text>
            </View>
            <View style='width:50vw;display:table-cell;text-align:right;padding-right:0%;padding-top:2.5%;'>
              <AtButton type='primary' circle='true' className='comfirm-button'>确认支付</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
