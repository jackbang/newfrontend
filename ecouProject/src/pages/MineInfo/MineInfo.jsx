import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtNavBar, AtTabs, AtTabsPane, AtTabBar} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './MineInfo.scss'

import play_pic from '../../img/play_pic.jpg'
import background_img from '../../img/background.png'
import user_avatar from '../../img/empty.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import store_icon from '../../img/store_icon.svg'
import first_icon from '../../img/queueList.png'
import second_icon from '../../img/createQueue.png'
import third_icon from '../../img/mineInfo.png'

import {test_wechat_login} from '../../service/api'
import {base} from '../../service/config'

export default class Mineinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      currentTabBar: 2,
      clickWhat: 0, //0 is tab, 1 is but
      userInfo: {},
      isLogin: false
    }
  }

  handleTabBarClick (value) {
    this.setState({
      currentTabBar: value
    })
    if (value == 0){
      Taro.navigateBack()
    }else if (value ==1){
      /* 进入JoinQueueSelectPage*/
      Taro.navigateTo({url: '../JoinQueueSelectInfo/JoinQueueSelectInfo'})
    }else if (value ==2){
      
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  handleNavBack() {
    Taro.navigateBack()
  }

  handleTabClick(){
    if(this.state.clickWhat==1){
      this.state.clickWhat=0;
    }else{
      Taro.navigateTo({url: '../QueueHistoryInfo/QueueHistoryInfo'})
    }
  }

  handelInviteBut(){
    this.state.clickWhat=1;
    console.log('邀请好友')
  }

  handleGender(login_idx){
    if (login_idx){
      if (this.state.userInfo.gender == 0){
        return null;
      } else if (this.state.userInfo.gender == 1) {
        return malePic;
      } else {
        return femalePic;
      }
    } else {
      return null;
    }
  }

  getPhoneNumber(e) {
    console.log(`是否成功调用${e.detail.errMsg}`);
    console.log(`加密算法的初始向量:${e.detail.iv}`);
    console.log(`包括敏感数据在内的完整用户信息的加密数据:${e.detail.encryptedData}`);
  } 

  handleLogin() {

    console.log(wx.getSystemInfoSync())
    let code;
    let userInfo;
    wx.getUserProfile({
      desc:'用于参与剧本杀拼桌',
      success: (res) => {
        console.log(res);
        userInfo = {
          encryptedData: res.encryptedData,
          iv: res.iv,
          rawData: res.rawData,
          signature: res.signature,
          code: code,
          userInfo: res.userInfo,
          systemInfo: wx.getSystemInfoSync()
        }
        this.setState({
          userInfo: userInfo.userInfo,
          isLogin: true
        })
        console.log(userInfo);
        test_wechat_login(userInfo).then((result)=>{
          console.log(result);
        });
        
      }
    })
    
    wx.login({
      success: function(res) {
        if (res.code) {
          code = res.code;
          console.log('data is ' + res.code)
          /*test_wechat_login(res.code).then(function(result) {
            console.log(result)
          });*/
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    
    /*
    wx.getUserProfile({
      desc: '用于加入或创建车队', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
          console.log(res)
      }
    })
    */
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
  }

  render () {
    this.state.currentTabBar=2;
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
      height: `${windowHeight_rpx - top_height_rpx - 400 - 200 - 180}rpx`
    }

    let login_tab = [];
    if (this.state.isLogin == false) {
      login_tab.push(
        <View className='at-row queue-tab-info'>
          {/*  每个tab上信息显示 */}
          <View style='width:100%;align-items:center;display:flex;justify-content:center;'>
            <AtButton type='primary' circle='true' className='login-button' onClick={this.handleLogin.bind(this)} /*openType="getPhoneNumber" OnGetPhoneNumber="getPhoneNumber"*/>登录</AtButton>
          </View>
        </View>
      )
    }else{
      login_tab = [];
    }


    return (
      <View className='MineInfo'>
        <image mode='widthFix' src={background_img} style='width:100vw;position:absolute;'></image>
        <View className='at-col' style={{padding: `${top_height_rpx}rpx 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
          onClickLeftIcon={this.handleNavBack}
          color='#ffff'
          leftIconType='chevron-left'
          ><View style='color:#fff;font-size:18px;padding-bottom:5rpx;'>我的</View></AtNavBar>
          <View style='height:400rpx;display:flex;justify-content:center;align-items:center;'>
            <image src={this.state.isLogin? this.state.userInfo.avatarUrl : user_avatar} style='height:200rpx;width:200rpx;background-color:#fff;border: 3.5px solid #fff;border-radius: 100rpx;'></image>
            <View style='position:absolute;bottom:0;left:40rpx;display:flex;justify-content:center;align-items:center;'>
              <text style='color:#fff;font-size:20px;'>{this.state.isLogin? this.state.userInfo.nickName : '用户名'}</text>
              <image src={this.handleGender(this.state.isLogin)} style='height:36rpx;width:36rpx;background-color:#fff;margin-left:10rpx;padding: 2rpx 8rpx;border-radius: 20rpx;'></image>
            </View>
            <View style='background:rgba(225, 232, 156, 0.16);position:absolute;bottom:0;right:40rpx;width:196rpx;height:140rpx;border-radius:20rpx;border: 1px solid #97979770;display:flex;justify-content:center;align-items:center;'>
              <View style='background: #D8D8D8;width:6rpx;height:6rpx;border: 0.5px solid #979797;border-radius:6rpx;position:absolute;top:14rpx;left:35rpx;'></View>
              <View style='background: #D8D8D8;width:6rpx;height:6rpx;border: 0.5px solid #979797;border-radius:6rpx;position:absolute;top:14rpx;right:35rpx;'></View>
              <text style='font-size:20px;color: #FEFFFF;'>0</text>
              <text style='font-size:10px;color: #FEFFFF;position:absolute;bottom:10rpx;'>玩过的本</text>
            </View>
          </View>
          <View style={{backgroundColor:`#ffffff`, position:`absolute`, top:`${400+top_height_rpx+100}rpx`, borderRadius: `20rpx`}}>
            <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
              className='tabs-info'
              current={this.state.current}
              scroll
              tabList={[
                { title: '待发车', queueNum: 0},
                { title: '已发车', queueNum: 0}
              ]}
              onClick={this.handleClick.bind(this)}>
            
            <AtTabsPane current={this.state.current} index={0}>
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
              {login_tab}

              <View className='at-row queue-tab-info' onClick={this.handleTabClick.bind(this, 0)}>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={play_pic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">04月03日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13:00</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：7/10</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={malePic}></image>
                          <text>4/5</text>
                        </View>

                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={femalePic}></image>
                          <text>4/5</text>
                        </View>

                      </View>
                    </View>
                    <View className='at-row' style='width:20vw'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='join-button' onClick={this.handelInviteBut.bind(this, 1)}>邀请好友</AtButton>
                    </View>
                  </View>
                  <View className='at-col play-store-position-info'>
                    <image src={store_icon} style='width:4vw;height:4vw;'></image>
                    <text style='margin-left:10rpx;'>惊剧馆·剧本杀·狼人杀</text>
                  </View>
                </View>
              </View>

            </ScrollView>
            </AtTabsPane>

            <AtTabsPane current={this.state.current} index={1}>
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
              <View className='at-row queue-tab-info' onClick={this.handleTabClick.bind(this, 0)}>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={play_pic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">04月03日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13:00</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：7/10</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={malePic}></image>
                          <text>4/5</text>
                        </View>

                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={femalePic}></image>
                          <text>4/5</text>
                        </View>

                      </View>
                    </View>
                  </View>
                  <View className='at-col play-store-position-info'>
                    <image src={store_icon} style='width:4vw;height:4vw;'></image>
                    <text style='margin-left:10rpx;'>惊剧馆·剧本杀·狼人杀</text>
                  </View>
                </View>
              </View>
              <View className='at-col' style='height:10rpx;'></View>
            </ScrollView>
            </AtTabsPane>

            </AtTabs>
          </View>
          <AtTabBar
              className='tab-bar-info'
              fixed
              tabList={[
                { title: '拼车信息',image:first_icon},
                { title:'', image:second_icon},
                { title: '我的',image:third_icon}
              ]}
              onClick={this.handleTabBarClick.bind(this)}
              current={this.state.currentTabBar}
            />
        </View>
      </View>
    )
  }
}
