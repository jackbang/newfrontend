import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView} from '@tarojs/components'
import { AtNavBar, AtIcon, AtAvatar, AtInputNumber, AtButton } from 'taro-ui'
import classNames from 'classnames';
import {setGlobalData, getGlobalData} from "../../globaldata"
import './QueueHistoryInfo.scss'

import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import memberPic from '../../img/member.png'
import emptyPic from '../../img/empty.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import telpic from '../../img/tel_icon.png'
import mappic from '../../img/map_icon.png'

export default class Queueinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      isHide: true,
      male:0,
      female:0
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  handleNavBack(){
    Taro.navigateBack()
  }

  handleClick () {
    this.setState({
      isHide: !this.state.isHide
    })
  }

  handleChangeMale (male) {
    this.setState({
      male
    })
  }

  handleChangeFemale (female) {
    this.setState({
      female
    })
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
      height: `${windowHeight_rpx-top_height_rpx-150-100}rpx`
    }

    return (
      <View className='at-col Queueinfo' style='position:relative'>
        <image className='queue-info-page' src={playpic} style='width:100vw;height:100vh;position:absolute'></image>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
            <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack}
              color='#ffff'
              leftIconType='chevron-left'
            ><View style='color:#fff;font-size:18px'>拼车详情</View></AtNavBar>
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
            
              <View className='at-row' style='height:300rpx;padding-top:5%;'>
                <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* 这里是用来规划image放置的位置 */> 
                    <image src={playpic} style='height:100%;width:90%;border-radius:10px;'>
                      <text className='play-pic-label-info'>本格</text>
                    </image>
                </View>
                <View className='at-col' /*这里写的是StoreInfo 文字部分*/> 
                  <View className='play-name-position-info'>木夕僧之戏</View>
                  <View className='play-score-position-info'>难度
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                      <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                      <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-9px;'></image>
                      <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-12px;'></image>
                    </View>
                  </View>
                  <View className='play-headcount-position-info'>7人本
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;'>
                      <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;'>4男3女</text>
                    </View>
                  </View>
                  <View className='play-duration-position-info'>游戏时长约6小时</View>
                  <View className='play-label-position-info'>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>硬核</text>
                    <text className='play-label-info'>现代</text>
                  </View>
                </View>
              </View>
              <View className='at-row' style='padding-top:5%'>
                <View className='at-col' style='background-color:rgba(201, 201, 201, 0.295);margin:0% 3.5%;padding-top:1%;border-radius:5px;'>
                  <View className='at-row' style='position:relative;color:#c0c0c0;'>
                    <View className='at-row' style='align-items:flex-end;display:flex;justify-content:flex-start;padding-left:2%;font-size:14px;'>剧情简介</View>
                    <View className='at-row' style='align-items:center;display:flex;justify-content:flex-end;padding-right:2%;font-size:12px;' onClick={this.handleClick.bind(this)}>
                      {this.state.isHide? '展开' : '收起'}
                      <AtIcon value={this.state.isHide? 'chevron-down' : 'chevron-up'} size='20'></AtIcon> 
                    </View>
                  </View>
                  <View className='at-row' style='padding-left:2%;'>
                    <text className={this.state.isHide? 'play-intro-info play-intro-hide' : 'play-intro-info'}>某个蝉鸣聒噪的夏日，一行七人被莫名聚集在古老的木夕神社。他们被邀请来参与一场莫名其妙的游戏。 而邀请他们前来此处的，正是那个身着玄色僧袍的和尚...... 蝉鸣阵阵中，似有人在他们的耳边呢喃，声音深远悠长——</text>
                  </View>
                </View>
              </View>
              <View className='at-col' style='background-color:#F9F9F9;margin-top:1%;padding-bottom:5%;'>

                <View className='at-row queue-time-tab-info' style='padding-top:2%'>
                  {/*这部分是开车时间的tab */}
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-start-time-info' >开局时间</View>
                      <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>4月06日 周二 15:00</View>
                    </View>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-antigender-info'>是否接受反串</View>
                      <View className='at-row' style='font-size:14px;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>接受反串</View>
                    </View>
                  </View>
                </View>

                <View className='at-col queue-join-tab-info' style='padding-top:2%'>
                  {/*这部分是加入车队的tab */}
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

                <View className='at-row at-row--wrap queue-member-tab-info' style='padding-top:2%;padding-bottom:4%;'>
                  {/* 车队成员列表 */}
                  <View className='at-row' style='height:50rpx;border:0px solid #979797;border-bottom-width:1px;width:90%;margin-left:5%'>
                    <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:0%'>车队成员</View>
                    <View className='at-col' style='font-size:12px;color:#000;align-items:flex-end;display:flex;justify-content:flex-end;padding-right:1%'>等待上车
                      <View className='play-male-position-info'>
                        <image className='gender-icon-info' src={malePic}></image>
                        <text>2</text>
                      </View>

                      <View className='play-female-position-info'>
                        <image className='gender-icon-info' src={femalePic}></image>
                        <text>2</text>
                      </View>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={memberPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <image src={femalePic} style='height:4vw;width:4vw;'></image>
                      <text style='font-size:12px'>绚姐</text>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={memberPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <image src={malePic} style='height:4vw;width:4vw;'></image>
                      <text style='font-size:12px'>周哥</text>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <text style='font-size:12px'>等待加入</text>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <text style='font-size:12px'>等待加入</text>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <text style='font-size:12px'>等待加入</text>
                    </View>
                  </View>
                  <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
                    <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:gray;'></image>
                    <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                      <text style='font-size:12px'>等待加入</text>
                    </View>
                  </View>


                </View>
              </View>
            <View className='at-row' style='height:10rpx;background-color:#F9F9F9;padding-bottom:5%;'></View>
          </ScrollView>
          <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
              <AtButton type='primary' circle='true' className='join-queue-button' >邀请好友</AtButton>
          </View>
          </View>
      </View>
    )
  }
}
