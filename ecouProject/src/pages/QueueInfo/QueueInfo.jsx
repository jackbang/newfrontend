import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView} from '@tarojs/components'
import { AtNavBar, AtIcon, AtAvatar, AtInputNumber, AtButton } from 'taro-ui'
import classNames from 'classnames';
import {setGlobalData, getGlobalData} from "../../globaldata"
import './QueueInfo.scss'

import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import memberPic from '../../img/member.png'
import emptyPic from '../../img/empty.svg'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'

import {test_queue_players_info, test_get_phonenum_info, test_store_info, test_get_queue_info, test_wechat_login} from '../../service/api'
import {base} from '../../service/config'
import dayjs from 'dayjs';

export default class Queueinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      isHide: true,
      male:0,
      maleIdx:[],
      female:0,
      femaleIdx:[],
      totalNum:0,
      queueInfo:{},
      playInfo:{},
      userInfo:{},
      playerInfo:[],
      newPlayerInfo:[],
      storeInfo:{},
      fromShare: false,
      login: false,
      infoLoading: true
    },
    this.players_info = []
  }

  componentWillMount() {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    console.log(pages_option)
    if (pages_option.storeId) {
      console.log('from share')
      this.setState({
        fromShare: true
      })
      let _this = this;
      test_store_info(pages_option.storeId).then(function(res) {
          var store_info = res.data.data;
          store_info['store_id'] = pages_option.storeId;
          _this.setState({
              storeInfo: store_info
          });
          Taro.setStorage({ key: `store_info`, data: store_info });
      })

      let body = {
        queueId: pages_option.queueId
      }

      test_get_queue_info(body).then(function(res) {
        if(res.data.code == 1) {
          res.data.data.play['play_pic'] = res.data.data.play.play_img;
          res.data.data.queue.queue_end_time = res.data.data.queue.queue_end_time.slice(0,10)+" "+res.data.data.queue.queue_end_time.slice(11,-3);
          _this.state.queueInfo = res.data.data.queue;
          _this.state.playInfo = res.data.data.play;
          Taro.setStorage({ key: `play_id_${res.data.data.play.play_id}`, data: res.data.data.play });
          Taro.setStorage({ key: `queue_id_${res.data.data.queue.queue_id}`, data: res.data.data.queue});
        } else {
          console.log(res.data.data)
        }
      })

      if (_this.state.queueInfo) {

        test_queue_players_info(pages_option.queueId).then(function(res) {
          _this.state.playerInfo = res.data.data.player_info;
          _this.setState({
            infoLoading: false
          })
        })
      }

    } else {
      this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
      this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
      this.state.userInfo = Taro.getStorageSync(`user_info`);
      if (this.state.userInfo) {
        this.state.login = true;
      }
      let _this = this;
      test_queue_players_info(this.state.queueInfo.queue_id).then(function(res) {
        _this.state.playerInfo = res.data.data.player_info;
        _this.setState({
          infoLoading: false
        })
      })
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  handleNavBack(){
    if (this.state.fromShare) {
      Taro.redirectTo({
        url: `/pages/StoreInfo/StoreInfo?storeId=${this.state.storeInfo.store_id}`
      })
    } else {
      Taro.removeStorage({key: `queue_id_${this.state.queueInfo.queue_id}`});
      Taro.navigateBack()
    }
  }

  handleJoinQueueBut(){
    if (this.state.fromShare) {
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
                  fromShare: false,
                  login: true
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
    } else {
      if(this.state.userInfo.hasOwnProperty('phoneNumber')){
        if (this.state.newPlayerInfo.length < 1) {
          wx.showToast({
            title:"玩家数需要大于0",
            icon:"none",
            duration: 1000,
            mask: false
          });
        } else {
          Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo?queueId=${this.state.queueInfo.queue_id}`});
          Taro.setStorage({key:`queue_id_${this.state.queueInfo.queue_id}_newPlayers`, data:this.state.newPlayerInfo});
        }
      }
    }
  }

  handleClick () {
    this.setState({
      isHide: !this.state.isHide
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
    if (this.state.login == false) {
      wx.showToast({
        title:"请先登录",
        icon:"none",
        duration: 1000,
        mask: false
      });
    } else {

      if (male > this.state.male) {
        var tempMaleIdx = this.state.newPlayerInfo.push({
          player_name: this.state.userInfo.nickName,
          player_gender: 1,
          player_pic: this.state.userInfo.avatarUrl,
          queue_id: this.state.queueInfo.queue_id,
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
  }

  handleChangeFemale (female) {

    if (this.state.login == false) {
      wx.showToast({
        title:"请先登录",
        icon:"none",
        duration: 1000,
        mask: false
      });
    } else {

      if (female > this.state.female) {
        var tempFemaleIdx = this.state.newPlayerInfo.push({
          player_name: this.state.userInfo.nickName,
          player_gender: 0,
          player_pic: this.state.userInfo.avatarUrl,
          queue_id: this.state.queueInfo.queue_id,
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
  }

  handleChangeTotal (totalNum) {

    if (this.state.login == false) {
      wx.showToast({
        title:"请先登录",
        icon:"none",
        duration: 1000,
        mask: false
      });
    } else {

      if (totalNum > this.state.totalNum) {
        var tempFemaleIdx = this.state.newPlayerInfo.push({
          player_name: this.state.userInfo.nickName,
          player_gender: 3,
          player_pic: this.state.userInfo.avatarUrl,
          queue_id: this.state.queueInfo.queue_id,
          user_id: this.state.userInfo.user_id
        })
      } else {
        this.state.newPlayerInfo.pop()
      }
      this.setState({
        totalNum: totalNum
      })
    }
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
            Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo?queueId=${_this.state.queueInfo.queue_id}`});
          })
        },
        fail () {
          //请重新登录
        }
      })
      console.log(`是否成功调用${e.detail.errMsg}`);
      console.log(`加密算法的初始向量:${e.detail.iv}`);
      console.log(`包括敏感数据在内的完整用户信息的加密数据:${e.detail.encryptedData}`);
    } else {
      this.state.userInfo['phoneNumber'] = "";
      Taro.setStorage({key:`user_info`, data:this.state.userInfo});
      Taro.navigateTo({url: `../ComfirmQueueInfo/ComfirmQueueInfo?queueId=${this.state.queueInfo.queue_id}`});
    }

    if (this.state.newPlayerInfo.length < 1) {
      wx.showToast({
        title:"玩家数需要大于0",
        icon:"none",
        duration: 1000,
        mask: false
      });
    } else {
      Taro.setStorage({key:`queue_id_${this.state.queueInfo.queue_id}_newPlayers`, data:this.state.newPlayerInfo});
    }
  } 

  onShareAppMessage (res) {
    console.log(res)
    let store_info = Taro.getStorageSync('store_info');
    return {
      title: `aaaaaaaaa\naaaaaaaa`,
      path: `/pages/QueueInfo/QueueInfo?queueId=${this.state.queueInfo.queue_id}&storeId=${store_info.store_id}`
    }
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
    let play_labels_info;
    let select_player_tab_info=[];
    let male_female_display = [];
    let play_info_male_female_display = [];
    let score_list = [];
    if (this.state.infoLoading==false){
      play_labels_info = this.state.playInfo.play_labels.map((label_item, label_idx)=>{
        if(label_idx<5){
          return(
            <text className='play-label-info'>{label_item}</text>
          )
        }
      })

      console.log(this.state.playerInfo)
      console.log(this.state.newPlayerInfo)
      this.players_info = [];
      for (let player_index = 0; player_index < this.state.playInfo.play_headcount; player_index++) {
        if (player_index < this.state.playerInfo.length) {
          this.players_info.push(
            <View style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative;display:flex;flex-direction:column;align-items:center;'>
              <image src={this.state.playerInfo[player_index].player_pic} style='height:15vw;width:15vw;border-radius:100%;background-color:#D8D8D8;'></image>
              <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                <image src={this.state.playerInfo[player_index].player_gender==3? null:this.state.playerInfo[player_index].player_gender? malePic:femalePic} style='height:4vw;width:4vw;'></image>
                <text style='width:15vw;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>{this.state.playerInfo[player_index].player_name}</text>
              </View>
            </View>
          )
        } else if (player_index < this.state.playerInfo.length + this.state.newPlayerInfo.length) {
          this.players_info.push(
            <View style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative;display:flex;flex-direction:column;align-items:center;'>
              <image src={this.state.newPlayerInfo[player_index-this.state.playerInfo.length].player_pic} style='height:15vw;width:15vw;border-radius:100%;background-color:#D8D8D8;'></image>
              <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                <image src={this.state.newPlayerInfo[player_index-this.state.playerInfo.length].player_gender==3? null:this.state.newPlayerInfo[player_index-this.state.playerInfo.length].player_gender? malePic:femalePic} style='height:4vw;width:4vw;'></image>
                <text style='width:15vw;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>{this.state.newPlayerInfo[player_index-this.state.playerInfo.length].player_name}</text>
              </View>
            </View>
          )
        } else {
          this.players_info.push(
            <View style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative;display:flex;flex-direction:column;align-items:center;'>
              <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:#D8D8D8;'></image>
              <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                <text style='font-size:12px'>等待加入</text>
              </View>
            </View>
          )
        }
      }

      if (this.state.playInfo.play_male_num == 999 || this.state.playInfo.play_female_num == 999){
        male_female_display= [];
        play_info_male_female_display = [];
        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;padding-top:3%;padding-bottom:3%;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>玩家数</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%;'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_headcount-this.state.queueInfo.queue_current_num}
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
            <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0 10rpx;border-radius:3px;'>{this.state.infoLoading ? `0`:this.state.playInfo.play_male_num}男{this.state.infoLoading ? `0`:this.state.playInfo.play_female_num}女</text>
          </View>
        )

        male_female_display.push(
          <View className='at-col' style='font-size:12px;color:#000;align-items:flex-end;display:flex;justify-content:flex-end;padding-right:1%'>等待上车
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{this.state.infoLoading ? '0':this.state.playInfo.play_male_num-this.state.queueInfo.queue_current_male_num-this.state.maleIdx.length}</text>
            </View>

            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{this.state.infoLoading ? '0':this.state.playInfo.play_female_num-this.state.queueInfo.queue_current_female_num-this.state.femaleIdx.length}</text>
            </View>
          </View>
        )

        select_player_tab_info.push(
          <View className='at-row' style='height:90rpx;'>
            <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>男玩家</View>
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_male_num-this.state.queueInfo.queue_current_male_num}
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
            <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
              <AtInputNumber
                className ='queue-join-input-number'
                min={0}
                max={this.state.infoLoading? 0:this.state.playInfo.play_female_num-this.state.queueInfo.queue_current_female_num}
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


    }

    

    

    return (
      <View className='at-col Queueinfo' style='position:relative'>
        <image className='queue-info-page' src={this.state.infoLoading ? playpic:`${base+this.state.playInfo.play_pic}`} style='width:100vw;height:100vh;position:absolute'></image>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
            <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
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
                    <image src={this.state.infoLoading ? playpic:`${base+this.state.playInfo.play_pic}`}  style='height:100%;width:90%;border-radius:10px;'>
                      <text className='play-pic-label-info'>{this.state.infoLoading ? `...`:this.state.playInfo.play_labels[0]}</text>
                    </image>
                </View>
                <View className='at-col' /*这里写的是StoreInfo 文字部分*/> 
                  <View className='play-name-position-info'>
                    <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.infoLoading ? ``:this.state.playInfo.play_name}</text>
                  </View>
                  <View className='play-score-position-info'>难度
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                      {score_list}
                    </View>
                  </View>
                  <View className='play-headcount-position-info'>{this.state.infoLoading ? `0`:this.state.playInfo.play_headcount}人本
                    {play_info_male_female_display}
                  </View>
                  <View className='play-duration-position-info'>游戏时长约{this.state.infoLoading ? `0`:this.state.playInfo.play_duration}小时</View>
                  <View className='play-label-position-info'>
                    {play_labels_info}
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
                    <text className={this.state.isHide? 'play-intro-info play-intro-hide' : 'play-intro-info'}>{this.state.infoLoading ? `...`:this.state.playInfo.play_intro.split('/n').join('\n')}</text>
                  </View>
                </View>
              </View>
              <View className='at-col' style='background-color:#F9F9F9;margin-top:1%;padding-bottom:5%;'>

                <View className='at-row queue-time-tab-info' style='padding-top:2%'>
                  {/*这部分是开车时间的tab */}
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-start-time-info' >开局时间</View>
                      <View className='at-row' style='font-size:14px;font-weight:550;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.infoLoading ? `0`:this.state.queueInfo.queue_end_time}</View>
                    </View>
                  </View>
                  <View className='at-row'>
                    <View className='at-col'>
                      <View className='at-row queue-antigender-info'>是否接受反串</View>
                      <View className='at-row' style='font-size:14px;font-weight:550;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.infoLoading ? `0`: this.state.queueInfo.queue_antigender? `接受`:`不接受`}反串</View>
                    </View>
                  </View>
                </View>

                <View className='at-col queue-join-tab-info' style='padding-top:2%;padding-bottom:10rpx;'>
                  {/*这部分是加入车队的tab */}
                  <View className='at-row' style='height:50rpx;border:0px solid #97979750;border-bottom-width:1px;width:90%;margin-left:5%;margin-bottom:20rpx;'>
                    <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:0%'>加入车队</View>
                    <View className='at-col' style='font-size:12px;color:#000;align-items:flex-end;display:flex;justify-content:flex-end;padding-right:5%'>定价0元/人</View>
                  </View>
                  {select_player_tab_info}
                </View>

                <View className='at-row at-row--wrap queue-member-tab-info' style='padding-top:2%;padding-bottom:4%;'>
                  {/* 车队成员列表 */}
                  <View className='at-row' style='height:50rpx;border:0px solid #97979750;border-bottom-width:1px;width:90%;margin-left:5%'>
                    <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:0%'>车队成员</View>
                    {male_female_display}
                  </View>
                  {this.players_info}


                </View>
              </View>
            
          </ScrollView>
          <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
              <AtButton type='second' circle='true' className='invite-friends-button' openType='share'>邀请好友</AtButton>
              <AtButton type='primary' circle='true' className='join-queue-button' onClick={this.handleJoinQueueBut.bind(this)} openType={this.state.fromShare? '':this.state.userInfo.hasOwnProperty('phoneNumber')? '':'getPhoneNumber'} onGetPhoneNumber={this.getPhoneNumber.bind(this)}>{this.state.login? '加入拼车并支付定金':'登录'}</AtButton>
          </View>
          </View>
      </View>
    )
  }
}
