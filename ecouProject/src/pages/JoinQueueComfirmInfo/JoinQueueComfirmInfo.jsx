import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Switch} from '@tarojs/components'
import { AtButton, AtNavBar, AtFloatLayout, AtIcon, AtInputNumber, AtSwitch, AtToast, AtActivityIndicator} from 'taro-ui'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './JoinQueueComfirmInfo.scss'

import CustomPicker from '../../components/diyPicker'

import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import roomPic from '../../img/room.jpeg'

import {test_get_phonenum_info} from '../../service/api'
import {base} from '../../service/config'

export default class Joinqueuecomfirminfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      isHide: true,
      timePickerShow: false,
      timeSeleted: '请选择',
      selectArrowShow: true,
      antiGender: false,

      male:0,
      maleIdx:[],
      female:0,
      femaleIdx:[],
      totalNum:0,
      userInfo:{},
      storeInfo:{},
      newPlayerInfo:[],
      queueInfo:{queue_antigender:false},

      roomSelectId:0,
      playInfo:{},
      play_main_label:'  ',
      infoLoading: true,
      show_toast:false
    }
  }

  componentDidMount() {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    this.setState({
      playInfo: Taro.getStorageSync(`play_id_${pages_option.playId}`),
      userInfo:  Taro.getStorageSync(`user_info`),
      storeInfo: Taro.getStorageSync(`store_info`),
      infoLoading: false
    })
  }


  handleNavBack() {
    Taro.navigateBack()
  }

  handleJoinQueueBut(){
    if(this.state.userInfo.hasOwnProperty('phoneNumber')){
      if (this.state.newPlayerInfo.length < 1) {
        wx.showToast({
          title:"玩家数需要大于0",
          icon:"none",
          duration: 1000,
          mask: false
        });
      } else {
        this.state.queueInfo['queue_current_num'] = this.state.newPlayerInfo.length;
        this.state.queueInfo['queue_current_male_num'] = this.state.maleIdx.length;
        this.state.queueInfo['queue_current_female_num'] = this.state.femaleIdx.length;
        this.state.queueInfo['play_id'] = this.state.playInfo.play_id;
        this.state.queueInfo['store_id'] = this.state.storeInfo.store_id;
        Taro.setStorage({key:`queue_id_0`, data:this.state.queueInfo});
        Taro.setStorage({key:`queue_id_0_newPlayers`, data:this.state.newPlayerInfo});
        if (this.state.selectArrowShow == true){
          wx.showToast({
            title:"请选择开局时间",
            icon:"none",
            duration: 1000,
            mask: false
          });
        }else{
          Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo`});
        }
      }
    }
  }

  onDateTimeChange = e => {
    console.log(e)
  }

  onScrollToUpperX() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScrollX(e){
    //console.log(e.detail)
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }

  handleInitial = value => {
    var str_list = value.slice(5,7)+'月'+value.slice(8,10)+'日'+' '+value.slice(11,16);
    console.log(`the init time is ${str_list}`)
    this.state.queueInfo['queue_end_time'] = value.slice(0,-6);
    this.setState({
      timeSeleted: str_list,
    })
  }

  handleConfirm = value => {
    var str_list = value.slice(5,7)+'月'+value.slice(8,10)+'日'+' '+value.slice(11,16);
    if (dayjs(value).isBefore(dayjs())) {
      this.setState({
        selectArrowShow: true,
        timeSeleted: "请选择"
      });
      wx.showToast({
        title:"时间选择有误",
        icon:"none",
        duration: 1000,
        mask: false
      });
      
    }else {
      this.state.queueInfo['queue_end_time'] = value.slice(0,-6);
      console.log(this.state.queueInfo);
      this.setState({
        timeSeleted: str_list,
        selectArrowShow: false
      })
    }
  }

  handleCancel = () => {
    console.log('cancel action')
  }

  handlePickerClick(){
    this.setState({
      timePickerShow: !this.state.timePickerShow
    })
  }

  handleClose() {
    this.setState({
      timePickerShow: !this.state.timePickerShow
    })
  }

  handleJoinPlayerList (pop_idx) {
    for (let index = 0; index < this.state.maleIdx.length; index++) {
      if (this.state.maleIdx[index] > pop_idx){
        this.state.maleIdx[index] = this.state.maleIdx[index] - 1;
      }
    }
    for (let index = 0; index < this.state.femaleIdx.length; index++) {
      if (this.state.femaleIdx[index] > pop_idx){
        this.state.femaleIdx[index] = this.state.femaleIdx[index] - 1;
      }
    }
  }

  handleChangeMale (male) {
    if (male > this.state.male) {
      var tempMaleIdx = this.state.newPlayerInfo.push({
        player_name: this.state.userInfo.nickName,
        player_gender: 1,
        player_pic: this.state.userInfo.avatarUrl,
        queue_id: 0,
        user_id: this.state.userInfo.user_id
      })
      this.state.maleIdx.push(tempMaleIdx)
    } else {
      var tampPopIdx = this.state.maleIdx.pop()-1;
      this.handleJoinPlayerList (tampPopIdx);
      this.state.newPlayerInfo.splice(tampPopIdx,1)
    }
    this.setState({
      male:male
    })
  }

  handleChangeFemale (female) {
    if (female > this.state.female) {
      var tempFemaleIdx = this.state.newPlayerInfo.push({
        player_name: this.state.userInfo.nickName,
        player_gender: 0,
        player_pic: this.state.userInfo.avatarUrl,
        queue_id: 0,
        user_id: this.state.userInfo.user_id
      })
      this.state.femaleIdx.push(tempFemaleIdx)
    } else {
      var tampPopIdx = this.state.femaleIdx.pop()-1;
      this.handleJoinPlayerList (tampPopIdx);
      this.state.newPlayerInfo.splice(tampPopIdx,1)
    }
    this.setState({
      female:female
    })
  }

  handleChangeTotal (totalNum) {
    if (totalNum > this.state.totalNum) {
      var tempFemaleIdx = this.state.newPlayerInfo.push({
        player_name: this.state.userInfo.nickName,
        player_gender: 3,
        player_pic: this.state.userInfo.avatarUrl,
        queue_id: 0,
        user_id: this.state.userInfo.user_id
      })
    } else {
      this.state.newPlayerInfo.pop()
    }
    this.setState({
      totalNum: totalNum
    })
  }

  getPhoneNumber(e) {
    if (e.detail.iv) {
      let _this = this;
      wx.checkSession({
        success () {
          console.log("登录未过期");
          let phoneNumInfo = {
            encryptedData: e.detail.encryptedData,
            iv: e.detail.iv,
            user_id: _this.state.userInfo.user_id,
            sessionId: _this.state.userInfo.sessionId,
            watermark: {
              appId: wx.getAccountInfoSync().miniProgram.appId,
              token: (dayjs().unix() + 1000 ) * 2
            }
          }
          console.log(phoneNumInfo)
          test_get_phonenum_info(phoneNumInfo).then(function(res) {
            _this.state.userInfo['phoneNumber'] = res.data.data.phoneNumber
            Taro.setStorage({key:`user_info`, data:_this.state.userInfo});
            _this.state.queueInfo['queue_current_num'] = _this.state.newPlayerInfo.length;
            _this.state.queueInfo['queue_current_male_num'] = _this.state.maleIdx.length;
            _this.state.queueInfo['queue_current_female_num'] = _this.state.femaleIdx.length;
            _this.state.queueInfo['play_id'] = _this.state.playInfo.play_id;
            _this.state.queueInfo['store_id'] = _this.state.storeInfo.store_id;
            Taro.setStorage({key:`queue_id_0`, data:_this.state.queueInfo});
            if (_this.state.selectArrowShow == true){
              wx.showToast({
                title:"请选择开局时间",
                icon:"none",
                duration: 1000,
                mask: false
              });
            }else if (_this.state.newPlayerInfo.length < 1) {
              wx.showToast({
                title:"玩家数需要大于0",
                icon:"none",
                duration: 1000,
                mask: false
              });
            }else{
              Taro.setStorage({key:`queue_id_0_newPlayers`, data:_this.state.newPlayerInfo});
              Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo`});
            }
          })
        },
        fail () {
          //请重新登录
          console.log('login out')
        }
      })
      console.log(`是否成功调用${e.detail.errMsg}`);
      console.log(`加密算法的初始向量:${e.detail.iv}`);
      console.log(`包括敏感数据在内的完整用户信息的加密数据:${e.detail.encryptedData}`);
    } else {
      this.state.userInfo['phoneNumber'] = "";
      Taro.setStorage({key:`user_info`, data:this.state.userInfo});
      this.state.queueInfo['queue_current_num'] = this.state.newPlayerInfo.length;
      this.state.queueInfo['queue_current_male_num'] = this.state.maleIdx.length;
      this.state.queueInfo['queue_current_female_num'] = this.state.femaleIdx.length;
      this.state.queueInfo['play_id'] = this.state.playInfo.play_id;
      this.state.queueInfo['store_id'] = this.state.storeInfo.store_id;
      Taro.setStorage({key:`queue_id_0`, data:this.state.queueInfo});

      if (this.state.selectArrowShow == true){
        wx.showToast({
          title:"请选择开局时间",
          icon:"none",
          duration: 1000,
          mask: false
        });
      } else if (this.state.newPlayerInfo.length < 1) {
        wx.showToast({
          title:"玩家数需要大于0",
          icon:"none",
          duration: 1000,
          mask: false
        });
      }else{
        Taro.setStorage({key:`queue_id_0_newPlayers`, data:this.state.newPlayerInfo});
        Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo`});
      }
    }
  }

  handleRoomSelect (id){
    this.setState({
      roomSelectId: id
    })
  }

  handleIntroClick () {
    this.setState({
      isHide: !this.state.isHide
    })
  }

  handleSwitchChange (){
    this.state.antiGender = !this.state.antiGender;
    this.state.queueInfo['queue_antigender'] = this.state.antiGender;
  }

  render () {
    
    const dateTime = [
      // {mode: 'year', unit: '年', start: '2020'},
      // {mode: 'month', unit: '月'},
      { mode: 'day', duration: 14, unit: '日', humanity: true, format: 'M月D日' },
      // {mode: 'day', start: '21', duration: 30, unit: '日' },
      // { mode: 'hour', unit: ':00', format: 'H:s', selected: [8, 12, 16] },
      { mode: 'hour', unit: '时' },
      {mode: 'minute', fields: 15, unit: '分'},
      // {mode: 'second', fields: 30, unit: '秒'},
    ]

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
      height: `${windowHeight_rpx-top_height_rpx-100}rpx`
    }
    var scrollStyleX = {
      width: '86vw'
    }
    let labels_list;
    let select_player_tab_info= [];
    let male_female_display= [];
    let play_info_male_female_display = [];
    let score_list = [];
    if (this.state.infoLoading == false) {
      console.log(this.state.playInfo)
      labels_list = this.state.playInfo.play_labels.map((label_item, label_idx) => {
        if (label_idx == 0) {
          this.state.play_main_label=label_item;
        }
        return (
          <text className='play-label-info'>{label_item}</text>
        )
      })

      // male female display
      if (this.state.playInfo.play_male_num == 999 || this.state.playInfo.play_female_num == 999){
        male_female_display= [];
        play_info_male_female_display = [];
        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;padding-top:3%;padding-bottom:3%;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>玩家数</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:5%;'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_headcount}
                step={1}
                value={this.state.totalNum}
                onChange={this.handleChangeTotal.bind(this)}
              />
            </View>
          </View>
        )
      } else {
        play_info_male_female_display.push(
          <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;'>
            <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;'>{this.state.infoLoading ? `0`:this.state.playInfo.play_male_num}男{this.state.infoLoading ? `0`:this.state.playInfo.play_female_num}女</text>
          </View>
        )

        male_female_display.push(
          <View className='play-male-position-info'>
            <image className='gender-icon-info' src={malePic}></image>
            <text>{this.state.maleIdx.length}</text>
          </View>
        )
        
        male_female_display.push(
          <View className='play-female-position-info'>
            <image className='gender-icon-info' src={femalePic}></image>
            <text>{this.state.femaleIdx.length}</text>
          </View>
        )

        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>男玩家</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:5%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_male_num}
                step={1}
                value={this.state.male}
                onChange={this.handleChangeMale.bind(this)}
              />
            </View>
          </View>
        )
        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>女玩家</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:5%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_female_num}
                step={1}
                value={this.state.female}
                onChange={this.handleChangeFemale.bind(this)}
              />
            </View>
          </View>
        )
      }

      for (let index = 0; index < 5; index++) {
        if(index < this.state.playInfo.play_score){
          score_list.push(
            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        } else {
          score_list.push(
            <image src={scoreDeactive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        }
      }

      return (
        <View className='JoinQueueComfirmInfo'>
          <image className='queue-info-page' src={this.state.infoLoading ? null:base+this.state.playInfo.play_pic} style='width:100vw;height:100vh;position:absolute'></image>
            <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
              <AtNavBar className='nav-bar-info'
                onClickLeftIcon={this.handleNavBack}
                color='#ffff'
                leftIconType='chevron-left'
                ><View style='color:#fff;font-size:18px'>我要发车</View></AtNavBar>
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
                    <image src={this.state.infoLoading ? null:base+this.state.playInfo.play_pic} style='height:100%;width:90%;border-radius:10px;'>
                      <text className='play-pic-label-info'>{this.state.infoLoading ? null:this.state.playInfo.play_labels[0]}</text>
                    </image>
                </View>
                <View className='at-col' /*这里写的是StoreInfo 文字部分*/> 
                  <View className='play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.infoLoading ? "":this.state.playInfo.play_name}</text>
                  </View>
                  <View className='play-score-position-info'>难度
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                      {score_list}
                    </View>
                  </View>
                  <View className='play-headcount-position-info'>{this.state.infoLoading ? 0:this.state.playInfo.play_headcount}人本
                    {play_info_male_female_display}
                  </View>
                  <View className='play-duration-position-info'>游戏时长约{this.state.infoLoading ? 0:this.state.playInfo.play_duration}小时</View>
                  <View className='play-label-position-info'>
                    {this.state.infoLoading ? "加载中":labels_list}
                  </View>
                </View>
              </View>
              <View className='at-row' style='display:flex;align-items:flex-end;justify-content:flex-start;'>
                <AtButton type='primary' circle='true' className='reselect-play-button' onClick={this.handleNavBack.bind(this)}>重新选择</AtButton>
              </View>
  
              <View className='at-row' style='padding-top:2%'>
                <View className='at-col' style='background-color:rgba(201, 201, 201, 0.295);margin:0% 3.5%;padding-top:1%;border-radius:5px;'>
                  <View className='at-row' style='position:relative;color:#c0c0c0;'>
                    <View className='at-row' style='align-items:flex-end;display:flex;justify-content:flex-start;padding-left:2%;font-size:14px;'>剧情简介</View>
                    <View className='at-row' style='align-items:center;display:flex;justify-content:flex-end;padding-right:2%;font-size:12px;' onClick={this.handleIntroClick.bind(this)}>
                      {this.state.isHide? '展开' : '收起'}
                      <AtIcon value={this.state.isHide? 'chevron-down' : 'chevron-up'} size='20'></AtIcon> 
                    </View>
                  </View>
                  <View className='at-row' style='padding-left:2%;'>
                    <text className={this.state.isHide? 'play-intro-info play-intro-hide' : 'play-intro-info'} decode="{{true}}">&nbsp;&nbsp;&nbsp;&nbsp;{this.state.playInfo.play_intro.split('/n').join('\n')}</text>
                  </View>
                </View>
              </View>
  
              <View className='at-col' style='background-color:#F9F9F9;margin-top:1%;padding-bottom:1%;padding-bottom:5%;'>
  
                <View className='at-row queue-play-intro-tab-info' style='padding-top:2%;padding-bottom:5rpx;'>
                  <View className='at-row'>
                    <View className='at-col' style='padding: 0 3%;'>
                      <View className='at-row' style='border: 0 solid #82828230;border-bottom-width: 1px;padding-bottom: 2%;'>
                        <View className='at-col play-intro-title-info' >开局时间</View>
                        <View className='at-col play-time-selecter-info' onClick={this.handlePickerClick.bind(this)}>
                          {this.state.selectArrowShow ? "请选择" : this.state.timeSeleted}
                          {this.state.selectArrowShow ? <AtIcon value='chevron-right' size='22' color='#5C5C5BFF'></AtIcon>: ""}
                        </View>
                        <AtFloatLayout title="开局时间" isOpened={this.state.timePickerShow} onClose={this.handleClose.bind(this)} className='diy-float-layout'>
                          <CustomPicker
                            style='background-color: #ffffff00;'
                            dateTime={dateTime}
                            onInitial={this.handleInitial}
                            mode='format'
                            onConfirm={this.handleConfirm}
                            onCancel={this.handleCancel}
                          />
                          
                        </AtFloatLayout>
                      </View>
                      <View className='at-row' style='margin-top:20rpx;padding-bottom:20rpx;'>
                        <View className='play-join-queue-title-info' >加入车队</View>
                        {male_female_display}
                        <View className='at-col' style='font-size:12px;color:#000;align-items:flex-end;display:flex;justify-content:flex-end;padding-right:5%'>定金{this.state.storeInfo.store_deposit}元/人</View>
                      </View>
                      {select_player_tab_info}
                      <View className='at-row' style='padding-top:3%;padding-bottom:5%;'>
                        <View style='height:50rpx;width:500rpx;display:flex;flex-direction:column;align-items:center;margin-left:52rpx;'>
                          <View className='at-col' style='font-size:14px;color:#000;align-items:center;display:flex;justify-content:flex-start;font-weight:530;'>接受反串</View>
                          {this.state.playInfo.play_antigender? null:<View 
                            className='at-col' 
                            style={{
                              fontSize:`10px`,
                              color:`#000`,
                              alignItems:`center`,
                              display:`flex`,
                              justifyContent:`flex-start`
                            }}
                            >
                            <AtIcon value='alert-circle' size='14' color='rgb(255, 47, 47)'></AtIcon>
                            DM不建议反串哦
                          </View>}
                        </View>
                        <Switch id='antigender' className='switch-info' color='#FCA62FFF' onChange={this.handleSwitchChange.bind(this)}/>
                      </View>
  
                    </View>
                  </View>
                </View>
  
              </View>
              <View style='height:250rpx;background-color:#F9F9F9;padding-bottom:5%;'></View>
            
            <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
                
                <AtButton type='primary' circle='true' className='join-queue-button' onClick={this.handleJoinQueueBut.bind(this)} openType={this.state.userInfo.hasOwnProperty('phoneNumber')? '':'getPhoneNumber'} onGetPhoneNumber={this.getPhoneNumber.bind(this)}>确认发车并支付定金</AtButton>
            </View>
          </ScrollView>
          </View>
        </View>
      )
    } else {
      return (
        <View className='JoinQueueComfirmInfo'>
          <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
        </View>
      )
    }

    
  }
}
