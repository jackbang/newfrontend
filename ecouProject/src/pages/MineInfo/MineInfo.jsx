import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtNavBar, AtTabs, AtTabsPane, AtTabBar} from 'taro-ui'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './MineInfo.scss'

import play_pic from '../../img/play_pic.jpg'
import background_img from '../../img/background.jpg'
import user_avatar from '../../img/empty.svg'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import store_icon from '../../img/store_icon.svg'

import first_icon from '../../img/queueList.svg'
import first_select_icon from '../../img/queueListSelect.svg'

import second_icon from '../../img/createQueue.png'

import third_icon from '../../img/mineInfo.svg'
import third_select_icon from '../../img/mineInfoSelect.svg'

import notLogin from '../../img/notLogin.svg'

import {test_wechat_login, test_get_mine_history_queues} from '../../service/api'
import {base} from '../../service/config'

export default class Mineinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      currentTabBar: 2,
      clickWhat: 0, //0 is tab, 1 is but
      userInfo: {},
      mineQueueInfo: {},
      isLogin: false,
      infoLoading: true
    }
  }

  componentWillMount () {
    this.state.userInfo = Taro.getStorageSync(`user_info`)
    if (this.state.userInfo) {
      this.state.isLogin = true
    }
  }

  componentDidShow() {
    if (this.state.userInfo) {
      let _this = this;
      let confirmData = {
          user_id: this.state.userInfo.user_id,
          sessionId: this.state.userInfo.sessionId,
          watermark: {
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs().unix() + 1000) * 2
          }
      }
      test_get_mine_history_queues(confirmData).then(function(res) {
          _this.setState({
            mineQueueInfo: res.data.data,
            infoLoading: false
          })
      })
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
      let userInfo = Taro.getStorageSync(`user_info`);
      if (userInfo) {
        Taro.navigateTo({ url: '../JoinQueueSelectInfo/JoinQueueSelectInfo' })
      } else {
        console.log(wx.getSystemInfoSync())
        let code;
        let userInfo;
        wx.getUserProfile({
          desc:'用于参与剧本杀拼桌',
          success: (res) => {
            console.log(res);
            var timeToken = (dayjs().unix() + 1000 ) * 2;
            userInfo = {
              encryptedData: res.encryptedData,
              iv: res.iv,
              rawData: res.rawData,
              signature: res.signature,
              code: code,
              userInfo: res.userInfo,
              systemInfo: wx.getSystemInfoSync(),
              watermark:{
                appId: wx.getAccountInfoSync().miniProgram.appId,
                token: timeToken
              }
            }
            console.log(userInfo)
            test_wechat_login(userInfo).then((result)=>{
              console.log(result.data.data.sessionId);
              userInfo.userInfo['sessionId'] = result.data.data.sessionId;
              userInfo.userInfo['user_id'] = result.data.data.userId;
              Taro.setStorage({key:`user_info`, data:userInfo.userInfo});
              Taro.navigateTo({ url: '../JoinQueueSelectInfo/JoinQueueSelectInfo' })
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
      }
    }else if (value ==2){
      
    }
  }

  handleClick (value) {
    this.setState({
      current: value
    })

    if (this.state.userInfo) {
      let _this = this;
      let confirmData = {
          user_id: this.state.userInfo.user_id,
          sessionId: this.state.userInfo.sessionId,
          watermark: {
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs().unix() + 1000) * 2
          }
      }
      test_get_mine_history_queues(confirmData).then(function(res) {
          _this.setState({
            mineQueueInfo: res.data.data,
            infoLoading: false
          })
      })
    }
  }

  handleNavBack() {
    Taro.navigateBack()
  }

  handleTabClick(item_idx, can_inv){
    if(this.state.clickWhat==1){
      this.state.clickWhat=0;
    }else{
      let queue_info = this.state.mineQueueInfo.queueList[item_idx]
      let store_info = this.state.mineQueueInfo.storeList[item_idx]
      let play_info = this.state.mineQueueInfo.playList[item_idx]
      Taro.setStorage({key:`queue_id_${queue_info.queue_id}`, data:queue_info})
      Taro.setStorage({key:`store_id_${store_info.store_id}`, data:store_info})
      Taro.setStorage({key:`play_id_${play_info.play_id}`, data:play_info})
      Taro.navigateTo({url: `../QueueHistoryInfo/QueueHistoryInfo?queueId=${queue_info.queue_id}&canInv=${can_inv}`})
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
    let temp = Taro.getStorageSync('user_info') 
    if(temp) {
      console.log('logined')
    } else {
      console.log(wx.getSystemInfoSync())
      let code;
      let userInfo;
      wx.getUserProfile({
        desc:'用于参与剧本杀拼桌',
        success: (res) => {
          console.log(res);
          var timeToken = (dayjs().unix() + 1000 ) * 2;
          userInfo = {
            encryptedData: res.encryptedData,
            iv: res.iv,
            rawData: res.rawData,
            signature: res.signature,
            code: code,
            userInfo: res.userInfo,
            systemInfo: wx.getSystemInfoSync(),
            watermark:{
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: timeToken
            }
          }
          console.log(userInfo)
          test_wechat_login(userInfo).then((result)=>{
            console.log(result.data.data.sessionId);
            userInfo.userInfo['sessionId'] = result.data.data.sessionId;
            userInfo.userInfo['user_id'] = result.data.data.userId;
            this.state.userInfo = userInfo.userInfo;
            Taro.setStorage({key:`user_info`, data:userInfo.userInfo,
              success: 
                this.setState({
                  isLogin: true
                })
            });

            if (this.state.userInfo) {
              let _this = this;
              let confirmData = {
                  user_id: this.state.userInfo.user_id,
                  sessionId: this.state.userInfo.sessionId,
                  watermark: {
                      appId: wx.getAccountInfoSync().miniProgram.appId,
                      token: (dayjs().unix() + 1000) * 2
                  }
              }
              test_get_mine_history_queues(confirmData).then(function(res) {
                  _this.setState({
                    mineQueueInfo: res.data.data,
                    infoLoading: false
                  })
              })
            }

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
      height: `${windowHeight_rpx - top_height_rpx - 400 - 200 - 170}rpx`
    }

    let login_tab = [];
    let finish_tab = [];
    if (this.state.isLogin == false) {
      login_tab.push(
        <View style='width:100vw;height:400rpx;display:flex;flex-direction:column;align-items:center;'>
          <image src={notLogin} style='width:100vw;height:100%;'></image>
          <text style='font-size:18px;color:#A5A5A5;'>登陆后查看更多信息哦</text>
        </View>
        //<View className='at-row queue-tab-info'>
        //  {/*  每个tab上信息显示 */}
        //  <View style='width:100%;align-items:center;display:flex;justify-content:center;'>
        //    <AtButton type='primary' circle='true' className='login-button' onClick={this.handleLogin.bind(this)} /*openType="getPhoneNumber" OnGetPhoneNumber="getPhoneNumber"*/>登录</AtButton>
        //  </View>
        //</View>
      )
      finish_tab.push(
        <View style='width:100vw;height:400rpx;display:flex;flex-direction:column;align-items:center;'>
          <image src={notLogin} style='width:100vw;height:100%;'></image>
          <text style='font-size:18px;color:#A5A5A5;'>登陆后查看更多信息哦</text>
        </View>
      )
    }else{
      if (this.state.infoLoading == false){
        console.log(this.state.mineQueueInfo.queueList)
        this.state.mineQueueInfo.queueList.map((queueItem, Idx) => {
          if(dayjs(queueItem.queue_end_time).isAfter(dayjs()) & (queueItem.queue_status == 0)) {
            let tempGenderDisplay = [];
            if (this.state.mineQueueInfo.playList[Idx].play_male_num == 999 | this.state.mineQueueInfo.playList[Idx].play_female_num == 999)
            {
              tempGenderDisplay = [];
            } else{
              tempGenderDisplay.push(
                <View className='play-male-position-info'>
                  <image className='gender-icon-info' src={malePic}></image>
                  <text>{queueItem.queue_current_male_num}/{this.state.mineQueueInfo.playList[Idx].play_male_num}</text>
                </View>
              )
              tempGenderDisplay.push(
                <View className='play-female-position-info'>
                  <image className='gender-icon-info' src={femalePic}></image>
                  <text>{queueItem.queue_current_female_num}/{this.state.mineQueueInfo.playList[Idx].play_female_num}</text>
                </View>
              )
            }

            login_tab.push(
              <View className='at-row queue-tab-info' onClick={this.handleTabClick.bind(this, Idx, true)}>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+this.state.mineQueueInfo.playList[Idx].play_pic}>
                  <text className='play-pic-label-info'>{this.state.mineQueueInfo.playList[Idx].play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.mineQueueInfo.playList[Idx].play_name}</text>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{queueItem.queue_end_time.slice(0,10)+" "+queueItem.queue_end_time.slice(11,-3)}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{queueItem.queue_current_num}/{this.state.mineQueueInfo.playList[Idx].play_headcount}</text></View>
                        {tempGenderDisplay}

                      </View>
                    </View>
                    <View className='at-row' style='width:20vw'>
                      {/* Button */}
                      <AtButton type='primary' circle='true' className='join-button' onClick={this.handelInviteBut.bind(this, 1)}>邀请好友</AtButton>
                    </View>
                  </View>
                  <View className='at-col play-store-position-info'>
                    <image src={store_icon} style='width:4vw;height:4vw;'></image>
                    <text style='width:400rpx;margin-left:10rpx;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.mineQueueInfo.storeList[Idx].store_name}</text>
                  </View>
                </View>
              </View>
            )
          } else {
            let tempGenderDisplay = [];
            if (this.state.mineQueueInfo.playList[Idx].play_male_num == 999 | this.state.mineQueueInfo.playList[Idx].play_female_num == 999)
            {
              tempGenderDisplay = [];
            } else{
              tempGenderDisplay.push(
                <View className='play-male-position-info'>
                  <image className='gender-icon-info' src={malePic}></image>
                  <text>{queueItem.queue_current_male_num}/{this.state.mineQueueInfo.playList[Idx].play_male_num}</text>
                </View>
              )
              tempGenderDisplay.push(
                <View className='play-female-position-info'>
                  <image className='gender-icon-info' src={femalePic}></image>
                  <text>{queueItem.queue_current_female_num}/{this.state.mineQueueInfo.playList[Idx].play_female_num}</text>
                </View>
              )
            }

            finish_tab.push(
              <View className='at-row queue-tab-info' onClick={this.handleTabClick.bind(this, Idx, false)}>
                {/*  每个tab上信息显示 */}
                <View className='at-row play-pic-position-info' style='width:21vw'>
                  <image className='play-pic-info' src={base+this.state.mineQueueInfo.playList[Idx].play_pic}>
                  <text className='play-pic-label-info'>{this.state.mineQueueInfo.playList[Idx].play_labels[0]}</text>
                  </image>
                </View>
                <View className='at-col play-intro-info'>
                  <View className='at-col play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.mineQueueInfo.playList[Idx].play_name}</text>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row play-time-position-info'><text decode="{{true}}">{queueItem.queue_end_time.slice(0,10)+" "+queueItem.queue_end_time.slice(11,-3)}</text></View>
                      <View className='at-row play-headcount-position-info'>
                        <View className='play-headcount-info'><text decode="{{true}}">人数：{queueItem.queue_current_num}/{this.state.mineQueueInfo.playList[Idx].play_headcount}</text></View>
                        {tempGenderDisplay}

                      </View>
                    </View>
                  </View>
                  <View className='at-col play-store-position-info'>
                    <image src={store_icon} style='width:4vw;height:4vw;'></image>
                    <text style='width:400rpx;margin-left:10rpx;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.mineQueueInfo.storeList[Idx].store_name}</text>
                  </View>
                </View>
              </View>
            )
          }
        })

        if (login_tab.length==0){
          login_tab.push(
            <View style='width:100vw;height:400rpx;display:flex;flex-direction:column;align-items:center;'>
              <image src={notLogin} style='width:100vw;height:100%;'></image>
            </View>
          )
        }

        if (finish_tab.length==0){
          finish_tab.push(
            <View style='width:100vw;height:400rpx;display:flex;flex-direction:column;align-items:center;'>
              <image src={notLogin} style='width:100vw;height:100%;'></image>
            </View>
          )
        }
      }
    }

    console.log(this.state.userInfo)
    return (
      <View className='MineInfo'>
        <image mode='widthFix' src={background_img} style='width:100vw;position:absolute;'></image>
        <View className='at-col' style={{padding: `${top_height_rpx}rpx 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
          onClickLeftIcon={this.handleNavBack}
          color='#ffff'
          leftIconType='chevron-left'
          ><View style='color:#fff;font-size:18px;padding-bottom:5rpx;'>我的</View></AtNavBar>
          <View style='height:400rpx;display:flex;flex-direction:column;justify-content:center;align-items:center;' onClick={this.handleLogin.bind(this)}>
            <image src={this.state.isLogin? this.state.userInfo.avatarUrl : user_avatar} style='height:200rpx;width:200rpx;background-color:#fff;border: 3.5px solid #fff;border-radius: 107rpx;'></image>
            <text style={{fontSize:`18px`, color:`#FEFFFF`, visibility:this.state.isLogin? 'hidden':'visible'}}>点击登录</text>
            <View style='position:absolute;bottom:0;left:40rpx;display:flex;justify-content:flex-start;align-items:center;width:456rpx;'>
              <text style='color:#fff;font-size:20px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:400rpx;'>{this.state.isLogin? this.state.userInfo.nickName : ''}</text>
              <image 
                src={this.handleGender(this.state.isLogin)} 
                style={{height:`36rpx`,width:`36rpx`,backgroundColor:`#fff`,marginLeft:`10rpx`,padding: `2rpx 8rpx`,borderRadius: `20rpx`, visibility:this.state.isLogin? 'visible':'hidden'}}
                ></image>
            </View>
            <View 
              style={{
                background:`rgba(225, 232, 156, 0.16)`,
                position:`absolute`,
                bottom:`0`,
                right:`40rpx`,
                width:`196rpx`,
                height:`140rpx`,
                borderRadius:`20rpx`,
                border:` 1px solid #97979770`,
                display:`flex`,
                justifyContent:`center`,
                alignItems:`center`,
                visibility: this.state.isLogin? 'visible':'hidden'}}
              >
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
              <View className='at-col' style='height:10rpx;'></View>
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
              {finish_tab}
              <View className='at-col' style='height:10rpx;'></View>
            </ScrollView>
            </AtTabsPane>

            </AtTabs>
          </View>
          <AtTabBar
              className='tab-bar-info'
              fixed
              tabList={[
                { title: '首页',image:first_icon, selectedImage:first_select_icon},
                { title: '', image:second_icon},
                { title: '我的',image:third_icon, selectedImage:third_select_icon}
              ]}
              onClick={this.handleTabBarClick.bind(this)}
              current={this.state.currentTabBar}
            />
        </View>
      </View>
    )
  }
}
