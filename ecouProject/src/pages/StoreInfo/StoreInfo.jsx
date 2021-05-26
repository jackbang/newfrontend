import Taro, { getApp } from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import { AtTabBar, AtSearchBar, AtAvatar, AtTabs, AtTabsPane, AtButton, AtInput } from 'taro-ui'
import classNames from 'classnames';

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { setGlobalData, getGlobalData } from "../../globaldata"

import './StoreInfo.scss'

import store_pic from '../../img/storepic.png'

import auth_pic from '../../img/auth_icon.svg'
import tel_icon from '../../img/telIcon.svg'
import position_icon from '../../img/position_icon.svg'

import first_icon from '../../img/queueList.svg'
import first_select_icon from '../../img/queueListSelect.svg'

import second_icon from '../../img/createQueue.png'

import third_icon from '../../img/mineInfo.svg'
import third_select_icon from '../../img/mineInfoSelect.svg'

import play_pic from '../../img/play_pic.jpg'
import male_icon from '../../img/male.png'
import female_icon from '../../img/female.png'



import playListIcon from '../../img/playList.svg'

import { test_store_info, test_queue_info, test_get_history_queues, test_wechat_login } from '../../service/api'
import { base } from '../../service/config'

class StoreInfo extends Component {

    constructor() {
        super(...arguments)
        this.state = {
            current: 0,
            value: '',
            currentTabBar: 0,
            storeId: 8,
            storeInfo: {},
            storePic: store_pic,
            queueInfo: {},
            queueList: [],
            storeInfoLoading: true,
            QueueInfoLoading: true
        }
    }
    componentWillMount() {
      Taro.clearStorage()
      var pages = getCurrentPages();
      let storeId = this.state.storeId;
      console.log(pages);
      let _this = this;
      test_store_info(storeId).then(function(res) {
          res.data.data['store_id'] = storeId;
          _this.setState({
              storeInfo: res.data,
              storePic: base + res.data.data.store_logo,
              storeInfoLoading: false
          });
          Taro.setStorage({ key: `store_info`, data: res.data.data });
      })
    }

    componentDidShow() {
        var pages = getCurrentPages();
        let storeId = this.state.storeId;
        console.log(pages);
        let _this = this;
        let userInfo = Taro.getStorageSync(`user_info`);
        if (userInfo) {
            let confirmData = {
                store_id: storeId,
                user_id: userInfo.user_id,
                sessionId: userInfo.sessionId,
                watermark: {
                    appId: wx.getAccountInfoSync().miniProgram.appId,
                    token: (dayjs().unix() + 1000) * 2
                }
            }
            test_get_history_queues(confirmData).then(function(res) {
                _this.setState({
                    queueList: res.data.data.queueList
                })
                console.log(res.data)
            })
        }
        test_queue_info(storeId).then(function(res) {
            _this.setState({
                queueInfo: res.data,
                QueueInfoLoading: false
            })
        })
        console.log(this.state.queueInfo)
    }

    handleLogin() {

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

    onScroll(e) {
        //console.log(e.detail)
    }

    onChange(value) {
        this.setState({
            value: value
        })
    }
    onActionClick() {
        console.log('开始搜索')
    }
    handleClick(value) {
        this.setState({
            current: value
        })
    }


    handleButtonClick(queueInfo) {
        let userInfo = Taro.getStorageSync(`user_info`);
        if (userInfo) {
          Taro.setStorage({ key: `queue_id_${queueInfo.queue_id}`, data: queueInfo });
          Taro.navigateTo({ url: `../QueueInfo/QueueInfo?queueId=${queueInfo.queue_id}` });
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
    }

    handleInfoButtonClick(queueInfo) {
      let userInfo = Taro.getStorageSync(`user_info`);
      if (userInfo) {
          Taro.setStorage({ key: `queue_id_${queueInfo.queue_id}`, data: queueInfo });
          Taro.navigateTo({ url: `../QueueHistoryInfo/QueueHistoryInfo?queueId=${queueInfo.queue_id}` });
      } else {
          wx.showToast({
              title: "请登录",
              icon: "none",
              duration: 1000,
              mask: false
          });
          setTimeout(function() {
              Taro.navigateTo({ url: '../MineInfo/MineInfo' })
          }, 500)
      }
  }

    handleButtonClickCreateQueue() {
        Taro.navigateTo({ url: '../JoinQueueSelectInfo/JoinQueueSelectInfo' })
    }

    handleTabBarClick(value) {
        this.setState({
            currentTabBar: value
        })
        if (value == 0) {

        } else if (value == 1) {
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


        } else if (value == 2) {
            Taro.navigateTo({ url: '../MineInfo/MineInfo' })
        }
    }

    storeIdInput(value) {
      this.state.storeId = value;
    }

    enterStore() {
      this.setState({
        storeId: this.state.storeId
      })
      let storeId = this.state.storeId;
      let _this = this;
      test_store_info(storeId).then(function(res) {
          res.data.data['store_id'] = storeId;
          _this.setState({
              storeInfo: res.data,
              storePic: base + res.data.data.store_logo,
              storeInfoLoading: false
          });
          Taro.setStorage({ key: `store_info`, data: res.data.data });
      })

      let userInfo = Taro.getStorageSync(`user_info`);
      if (userInfo) {
          let confirmData = {
              store_id: storeId,
              user_id: userInfo.user_id,
              sessionId: userInfo.sessionId,
              watermark: {
                  appId: wx.getAccountInfoSync().miniProgram.appId,
                  token: (dayjs().unix() + 1000) * 2
              }
          }
          test_get_history_queues(confirmData).then(function(res) {
              _this.setState({
                  queueList: res.data.data.queueList
              })
              console.log(res.data)
          })
      }
      test_queue_info(storeId).then(function(res) {
          _this.setState({
              queueInfo: res.data,
              QueueInfoLoading: false
          })
      })
      console.log(this.state.queueInfo)
    }

    navigateToPlaySearchPage(object){
      console.log(object)
      let userInfo = Taro.getStorageSync(`user_info`);
      if (userInfo) {
        Taro.navigateTo({ url: '../playSearchPage/playSearchPage' })
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
    }

    handlePlaysClick() {
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
    }

    makePhoneCall() {
      console.log('call the store')
      wx.makePhoneCall({
        phoneNumber: this.state.storeInfo.data.store_tel //仅为示例，并非真实的电话号码
      })
    }

    render () {
        console.log(this.state.queueList)
        this.state.currentTabBar=0;
        var systemInfo = wx.getSystemInfoSync();
        var screenHeight = systemInfo.screenHeight;
        var screenWidth = systemInfo.screenWidth;
        var windowHeight = systemInfo.windowHeight;
        var windowWidth = systemInfo.windowWidth;
        var statusBarHeight  = systemInfo.statusBarHeight;
    
        var top_height = wx.getSystemInfoSync().statusBarHeight+40;
        var system_width = wx.getSystemInfoSync().screenWidth/3;
    
        var screenHeight_rpx = 750*(screenHeight/screenWidth);
        var windowHeight_rpx = 750*(windowHeight/screenWidth);
        var top_height_rpx = 750*(top_height/screenWidth);
    
        //console.log(`The windows height is ${windowHeight_rpx}`);
        //console.log(`The screen  height is ${screenHeight_rpx}`);
    
        //下面这部分是用来控制scroll-view的，这部分的height尤其关键
        //这部分需要先将页面disableScroll: true
        //其次计算出当前window的rpx单位的高度，减去padding的rpx高度，再减去searchBar+StoreInfo部分的400rpx，再减去Tabs的110rpx
        //用px单位的话，会出现设备不适配的情况
        const scrollTop = 0
        const Threshold = 100
        var scrollStyle = {
          height: `${windowHeight_rpx - top_height_rpx - 400 - 110 - 170}rpx`
        }
        let tabInfoList = [];
        let dayList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        tabInfoList.push({title: "今天 "+dayjs().format('MM-DD')});
        for (let index = 1; index < 14; index++) {
          tabInfoList.push({title: dayList[index%7]+" "+dayjs().add(index, 'day').format('MM-DD')});
        }
        let tabsPaneInfo;
        if (this.state.QueueInfoLoading == false){
          let buttonDisplay;
          var totalTabsNum = 0;
          tabsPaneInfo = this.state.queueInfo.data.queue_num.map((item, idx) => {
            if (item==0) {
              return(
                <AtTabsPane current={this.state.current} index={idx}>
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
                      <View className='queue-tab-info'>
                        <View className='at-col' /*注意。想要column排列，有时需要再嵌套一层，可能是因为 queue-tab-info这个css属性影响力 at-col */>
                        <View style='height:75rpx;font-size:15px;font-weight:550;align-items:flex-end;display:flex;justify-content:center'>当日暂时没有在拼车队哦</View>
                          <View style='height:75rpx;font-size:13px;font-weight:550;align-items:flex-end;display:flex;justify-content:center;margin-top:10rpx;'>
                            <AtButton type='primary' circle='true' className='create-button' onClick={this.handleButtonClickCreateQueue.bind(this)}>我要发车</AtButton>
                          </View>
                        </View>
                      </View>
                  </ScrollView>
                </AtTabsPane>
              )
            } else {
              
              //if(this.state.queueList.this.state.queueInfo.data.queue_data[index].queue_id)
              
              let tabsView = [];
              for (let index = totalTabsNum; index < totalTabsNum + item; index++) {
                buttonDisplay = [];
                if(this.state.queueList.find((item) => item.queue_id == this.state.queueInfo.data.queue_data[index].queue_id)){
                  buttonDisplay.push(
                    <AtButton type='primary' circle='true' className='join-button' onClick={this.handleInfoButtonClick.bind(this, this.state.queueInfo.data.queue_data[index])}>查看详情</AtButton>
                  )
                }else{
                  buttonDisplay.push(
                    <AtButton type='primary' circle='true' className='join-button' onClick={this.handleButtonClick.bind(this, this.state.queueInfo.data.queue_data[index])}>我要上车</AtButton>
                  )
                }

                let tab_male_female_display = [];
                Taro.setStorage({key:`play_id_${this.state.queueInfo.data.play_data[index].play_id}`, data:this.state.queueInfo.data.play_data[index]});
                let play_labels_info = this.state.queueInfo.data.play_data[index].play_labels.map((label_item, label_idx)=>{
                  return(
                    <text className='play-label-info'>{label_item}</text>
                  )
                })
                if (this.state.queueInfo.data.play_data[index].play_female_num == 999 || this.state.queueInfo.data.play_data[index].play_male_num == 999){
                  tab_male_female_display = [];
                } else {
                  tab_male_female_display.push(
                    <View className='play-male-position-info'>
                      <image className='gender-icon-info' src={male_icon}></image>
                      <text>{this.state.queueInfo.data.queue_data[index].queue_current_male_num}/{this.state.queueInfo.data.play_data[index].play_male_num}</text>
                    </View>
                  )
                  tab_male_female_display.push(
                    <View className='play-female-position-info'>
                      <image className='gender-icon-info' src={female_icon}></image>
                      <text>{this.state.queueInfo.data.queue_data[index].queue_current_female_num}/{this.state.queueInfo.data.play_data[index].play_female_num}</text>
                    </View>
                  )
                }
    
                tabsView.push(
                <View className='at-row queue-tab-info'>
                  {/*  每个tab上信息显示 */}
                  <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                    <image className='play-pic-info' src={base+this.state.queueInfo.data.play_data[index].play_pic}>
                    <text className='play-pic-label-info'>{this.state.queueInfo.data.play_data[index].play_labels[0]}</text>
                    </image>
                  </View>
                  <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                    <View className='at-col play-name-position-info'>
                      <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.queueInfo.data.play_data[index].play_name}</text>
                    </View>
                    <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                      <View className='at-col' /* 第一列 有两行*/>
                        <View className='at-row play-time-position-info'><text decode="{{true}}">{this.state.queueInfo.data.queue_data[index].queue_end_time}</text></View>
                        <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                          <View className='play-headcount-info'><text decode="{{true}}">人数：{this.state.queueInfo.data.queue_data[index].queue_current_num}/{this.state.queueInfo.data.play_data[index].play_headcount}</text></View>
                          {tab_male_female_display}
    
                        </View>
                      </View>
                      <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                        {/* Button  激活与不激活 具体看taroui中的文档*/}
                        {buttonDisplay}
                      </View>
                    </View>
                    <View className='at-col play-antigender-position-info'>
                      <text className='play-antigender-info'>{this.state.queueInfo.data.queue_data[index].queue_antigender ? `` : `不`}可反串</text>
                      {play_labels_info}
                    </View>
                  </View>
    
                </View>
                );
              }
              totalTabsNum = totalTabsNum + item;
              return (          
              <AtTabsPane current={this.state.current} index={idx}>
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
                {tabsView}
                <View style='height:10rpx;width:100vw;'></View>
                </ScrollView>
              </AtTabsPane>
              )
            }
          }) 
        }
    
        if (this.state.storeId == 8) {

          return (
            <View className='store-info-page' /* 这个标签主要是用来放background*/>
              <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}} /* 这个页面用来放 1.searchBar和下面的StoreInfo 2.AtTabs 为了避免和耳朵重叠，这里用了padding*/>
                <AtInput
                  name='store_id'
                  title='店铺ID'
                  type='number'
                  placeholderStyle='font-size:13px;'
                  placeholder='输入店铺id'
                  value={this.state.storeId}
                  onChange={this.storeIdInput.bind(this)}
                  className='storeInfo-input-css'
                  required
                />
                <AtButton type='primary' circle='true' className='join-button' onClick={this.enterStore.bind(this)}>进入店铺</AtButton>
              </View>
            </View>
          )

        } else {
    
          return (
            <View className='store-info-page' /* 这个标签主要是用来放background*/>
              <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}} /* 这个页面用来放 1.searchBar和下面的StoreInfo 2.AtTabs 为了避免和耳朵重叠，这里用了padding*/>
      
                <View className='at-col' style='height:400rpx' /* 这里是*/>

                  <View style='width:100vw;display:flex;justify-content:flex-start;align-items:center;'>
                    <View onClick={this.navigateToPlaySearchPage.bind(this)}>
                      <AtSearchBar
                        className='mainPageSearch'
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        onActionClick={this.onActionClick.bind(this)}
                        showActionButton={false}
                        disabled
                      />
                    </View>
                    <View style='display:flex;flex-direction:column;align-items:center;' onClick={this.handlePlaysClick.bind(this)}>
                      <image src={playListIcon} style='height:50rpx;width:50rpx;'></image>
                      <text style='font-size:20rpx;color:#FFFFFF;'>剧本</text>
                    </View>
                  </View>
      

      
                  <View className='store-info-background-img' /* 这里是StoreInfo背景那个不规则图形*/ style='display:flex;'>
                    <View className='store-pic-position-info' style={{width: `${system_width}px`, marginTop:`20rpx`}} /* 这里是用来规划image放置的位置 */> 
                      <AtAvatar className='store-pic-info' image={this.state.storePic}></AtAvatar>
                    </View>
                    <View  /*这里写的是StoreInfo 文字部分*/ style='display:flex;flex-direction:column;margin-top:15rpx;'> 
                      <View className='store-name-position-info' style='display:flex;'>
                        <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.storeInfoLoading? ``:this.state.storeInfo.data.store_name}</text>
                      </View>
                      <View className='store-auth-position-info' style='display:flex;'>
                        <image className='store-auth-info' src={auth_pic}></image>
                        <text style='font-size:20rpx;margin-left:5rpx;background:rgba(139, 111, 73, 1);color: rgba(255, 255, 255, 1);padding: 3rpx 5rpx;'>剧本杀店铺</text>
                      </View>
                      <View className='store-clock-position-info' style='display:flex;' onClick={this.makePhoneCall.bind(this)}>
                        <image className='store-clock-pic-info' src={tel_icon}></image>
                        <text style='padding-left:2%'> {this.state.storeInfoLoading? `加载中`:this.state.storeInfo.data.store_tel} </text>
                      </View>
                      <View className='store-address-position-info' style='display:flex;'>
                        <image className='store-address-pic-info' src={position_icon}></image>
                        <text style='display: -webkit-box;padding-left:1.5%;width:360rpx;word-break:break-all;word-wrap:break-word;white-space:pre-line;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow: hidden;text-overflow: ellipsis;'>{this.state.storeInfoLoading? `加载中`:this.state.storeInfo.data.store_address} </text>
                      </View>
                    </View>
                  </View>
      
                </View>
      
                <View className='at-row' style='background-color:#ffffff'>
                  <AtTabs /* TODO: 这部分需要重构，红点没实现，列表不同日期显示不同灰度也没实现 */
                    current={this.state.current}
                    scroll
                    tabList={tabInfoList}
                    onClick={this.handleClick.bind(this)}>
                    {tabsPaneInfo}

                    <AtTabsPane current={this.state.current} index={99}>
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
                        <View className='at-row queue-tab-info'>
                          {/*  每个tab上信息显示 */}
                          <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                            <image className='play-pic-info' src={play_pic}>
                            <text className='play-pic-label-info'>本格</text>
                            </image>
                          </View>
                          <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                            <View className='at-col play-name-position-info'>木兮僧之戏</View>
                            <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                              <View className='at-col' /* 第一列 有两行*/>
                                <View className='at-row play-time-position-info'><text decode="{{true}}">04月03日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13:00</text></View>
                                <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                                  <View className='play-headcount-info'><text decode="{{true}}">人数：7/10</text></View>
                                  <View className='play-male-position-info'>
                                    <image className='gender-icon-info' src={male_icon}></image>
                                    <text>4/5</text>
                                  </View>
      
                                  <View className='play-female-position-info'>
                                    <image className='gender-icon-info' src={female_icon}></image>
                                    <text>4/5</text>
                                  </View>
      
                                </View>
                              </View>
                              <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                                {/* Button  激活与不激活 具体看taroui中的文档*/}
                                <AtButton type='primary' circle='true' className='join-button' onClick={this.handleButtonClick.bind(this, 'queueID')}>我要上车</AtButton>
                              </View>
                            </View>
                            <View className='at-col play-antigender-position-info'>
                              <text className='play-antigender-info'>可反串</text>
                              <text className='play-label-info'>本格</text>
                              <text className='play-label-info'>现代</text>
                            </View>
                          </View>
      
                        </View>
                        <View className='at-row queue-tab-info'>
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
                                    <image className='gender-icon-info' src={male_icon}></image>
                                    <text>4/5</text>
                                  </View>
      
                                  <View className='play-female-position-info'>
                                    <image className='gender-icon-info' src={female_icon}></image>
                                    <text>4/5</text>
                                  </View>
      
                                </View>
                              </View>
                              <View className='at-row' style='width:20vw'>
                                {/* Button */}
                                <AtButton type='primary' circle='true' disabled='true' className='join-button' >已发车</AtButton>
                              </View>
                            </View>
                            <View className='at-col play-antigender-position-info'>
                              <text className='play-antigender-info'>可反串</text>
                              <text className='play-label-info'>本格</text>
                              <text className='play-label-info'>现代</text>
                            </View>
                          </View>
      
                        </View>
                        <View className='at-row queue-tab-info'></View>
                        <View className='at-row queue-tab-info'></View>
                        <View className='at-row queue-tab-info'></View>
                        <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}
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
    }
    
    export default StoreInfo
    