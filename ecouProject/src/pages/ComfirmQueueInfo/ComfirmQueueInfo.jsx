import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Input, Textarea } from '@tarojs/components'
import { AtButton, AtNavBar } from 'taro-ui'

import './ComfirmQueueInfo.scss'
import background_img from '../../img/background.png'
import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive2.png'
import telpic from '../../img/telIcon.svg'
import mappic from '../../img/map_icon.svg'

import dayjs from 'dayjs';

import {test_join_queue, test_create_queue, test_check_queue} from '../../service/api'
import {base} from '../../service/config'

export default class Comfirmqueueinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      queueInfo:{},
      playInfo:{},
      userInfo:{},
      newPlayerInfo:[],
      storeInfo:{},
      playerPhoneNum:"",
      comment:"",
      repeatedChoice: 0,
      queueId:0,
      isCreateQueue:false,
      infoLoading: true
    }
  }

  handleNavBack() {
    let _this = this;
    wx.showModal({
      content: '确定不玩该剧本了吗？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          Taro.removeStorage({key: `queue_id_${_this.state.queueInfo.queue_id}_newPlayers`});
          Taro.navigateBack()
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  }

  componentWillMount() {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    if(pages_option.queueId){
      this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
      this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
      this.state.userInfo = Taro.getStorageSync(`user_info`);
      this.state.newPlayerInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}_newPlayers`);
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
    } else {
      this.state.queueInfo = Taro.getStorageSync(`queue_id_0`);
      this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
      this.state.userInfo = Taro.getStorageSync(`user_info`);
      this.state.newPlayerInfo = Taro.getStorageSync(`queue_id_0_newPlayers`);
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.state.isCreateQueue = true;
    }

    this.setState({
      infoLoading: false
    })
    console.log(this.state.userInfo)
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e){
    //console.log(e.detail)
  }

  handlePhoneNumberClick () {

  }

  handleComfirm() {
    if (this.state.playerPhoneNum.length==0) {
      this.state.playerPhoneNum = this.state.userInfo.phoneNumber
    }
    if (this.state.playerPhoneNum.length != 11){
      if (this.state.userInfo.phoneNumber.length != 11) {
        wx.showToast({
          title:"请输入正确联系方式",
          icon:"none",
          duration: 1000,
          mask: false
        });
      } else {
        this.state.playerPhoneNum = this.state.userInfo.phoneNumber
      }
    } else {
      if (this.state.isCreateQueue == true) {
        console.log(this.state)
        let formData ={
          player_info: this.state.newPlayerInfo,
          player_tel: this.state.playerPhoneNum,
          player_comment: this.state.comment,
          queue_info: this.state.queueInfo,
          user_id: this.state.userInfo.user_id,
          sessionId: this.state.userInfo.sessionId,
          watermark:{
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          }
        }
        console.log(formData);
        let _this = this;
        test_check_queue(formData).then(function(result){
          if (result.data.code == 2) {
            if (_this.state.repeatedChoice == 0) {
              wx.showModal({
                content:"该时间段剧本已被选择，可能存在冲突，请与店家沟通。",
                showCancel:false
              });
              _this.state.repeatedChoice = 1;
            } else {
              test_create_queue(formData).then(function(res){
                console.log(res);
                if (res.data.data.errcode == 0){
                  Taro.redirectTo({url: `../JoinQueueSuccessInfo/JoinQueueSuccessInfo?queueId=0&newId=${res.data.data.queue_id}`});
                }
              })
            }
          } else if (result.data.code == 1) {
            test_create_queue(formData).then(function(res){
              console.log(res);
              if (res.data.data.errcode == 0){
                Taro.redirectTo({url: `../JoinQueueSuccessInfo/JoinQueueSuccessInfo?queueId=0&newId=${res.data.data.queue_id}`});
              }
            })
          } else {
            wx.showToast({
              title:result.data.data,
              icon:"none",
              duration: 1000,
              mask: false
            });
          }
        })

        //test_create_queue(formData).then(function(res){
        //  console.log(res);
        //  if (res.data.data.errcode == 0){
        //    Taro.redirectTo({url: `../JoinQueueSuccessInfo/JoinQueueSuccessInfo?queueId=0`});
        //  }
        //})
      } else {
        let formData = {
          player_info: this.state.newPlayerInfo,
          player_tel: this.state.playerPhoneNum,
          player_comment: this.state.comment,
          queue_id: this.state.queueInfo.queue_id,
          user_id: this.state.userInfo.user_id,
          sessionId: this.state.userInfo.sessionId,
          watermark:{
            appId: wx.getAccountInfoSync().miniProgram.appId,
            token: (dayjs().unix() + 1000 ) * 2
          }
        }
        console.log(formData)
        let _this = this;
        test_join_queue(formData).then(function(res){
          console.log(res)
          if (res.data.data.errcode == 1){
            wx.showToast({
              title:"请勿重复加入车队",
              icon:"none",
              duration: 1000,
              mask: false
            });
          } else if (res.data.data.errcode == 0){
            Taro.redirectTo({url: `../JoinQueueSuccessInfo/JoinQueueSuccessInfo?queueId=${_this.state.queueInfo.queue_id}`});
          }
        })
      }
    }
  }

  handleCommentInput(data) {
    this.state.comment = `${data.detail.value}`;
  }

  handlePhoneNumInput(data) {
    this.state.playerPhoneNum = `${data.detail.value}`;
    console.log(data.detail.value)
  }

  makePhoneCall() {
    console.log('call the store')
    wx.makePhoneCall({
      phoneNumber: this.state.storeInfo.store_tel //仅为示例，并非真实的电话号码
    })
  }

  openLocation() {
    var latitude = this.state.storeInfo.store_latitude;
    var longitude = this.state.storeInfo.store_longitude;
    var name = this.state.storeInfo.store_name;
    wx.openLocation({
      latitude,
      longitude,
      name,
      scale: 15
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
      height: `${windowHeight_rpx - top_height_rpx - 150}rpx`
    }

    let new_players_num_display = [];
    let play_labels_info;
    let phone_num_display = [];
    let phone_num_input_display = [];
    let score_list = [];
    if (this.state.infoLoading == false){
      if (this.state.playInfo.play_male_num == 999 || this.state.playInfo.play_female_num == 999) {
        new_players_num_display.push(
          <View className='at-row' style='padding-top:3%;'>
            <View style='width:50vw;display:table-cell;text-align:left;padding-left:7%;'>
              <text style='font-size:14px;font-weight:550;color:#000;'>玩家数</text>
            </View>
            <View style='width:50vw;display:table-cell;text-align:right;padding-right:15%;'>
              <text style='font-size:14px;font-weight:500;color:#000000;'>x</text>
              <text style='font-size:14px;font-weight:500;color:#000000;'>{this.state.newPlayerInfo.length}</text>
            </View>
          </View>
        )
      } else {
        var female_num = 0;
        var male_num = 0;
        for (let index = 0; index < this.state.newPlayerInfo.length; index++) {
          if (this.state.newPlayerInfo[index].player_gender == 0) {
            female_num = female_num + 1;
          } else {
            male_num = male_num + 1;
          }
        }
        new_players_num_display.push(
          <View className='at-row' style='padding-top:3%;'>
            <View style='width:50vw;display:table-cell;text-align:left;padding-left:7%;'>
              <text style='font-size:14px;font-weight:550;color:#000;'>男玩家</text>
            </View>
            <View style='width:50vw;display:table-cell;text-align:right;padding-right:15%;'>
              <text style='font-size:14px;font-weight:500;color:#000000;'>x</text>
              <text style='font-size:14px;font-weight:500;color:#000000;'>{male_num}</text>
            </View>
          </View>
        )
        new_players_num_display.push(
          <View className='at-row' style='padding-top:3%;'>
            <View style='width:50vw;display:table-cell;text-align:left;padding-left:7%;'>
              <text style='font-size:14px;font-weight:550;color:#000;'>女玩家</text>
            </View>
            <View style='width:50vw;display:table-cell;text-align:right;padding-right:15%;'>
              <text style='font-size:14px;font-weight:500;color:#000000;'>x</text>
              <text style='font-size:14px;font-weight:500;color:#000000;'>{female_num}</text>
            </View>
          </View>
        )
      }

      play_labels_info = this.state.playInfo.play_labels.map((label_item, label_idx)=>{
        return(
          <text className='play-label-info'>{label_item}</text>
        )
      })
      console.log(this.state.userInfo)
      if(this.state.userInfo.hasOwnProperty('phoneNumber')){
        phone_num_display.push(
          <Input type='number' style='font-size:14px;font-weight:500;color:#000000;' onClick={console.log("clicked!")} value={this.state.userInfo.phoneNumber.length==0? "请输入联系方式":this.state.userInfo.phoneNumber} onblur={this.handlePhoneNumInput.bind(this)}></Input>
        )
      }else{
        phone_num_display.push(
          <Input type='number' style='font-size:14px;font-weight:500;color:#000000;' onClick={console.log("clicked!")} placeholder= "请输入联系方式"></Input>
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
      <View className='ComfirmQueueInfo'>
        <image mode='widthFix' src={background_img} style='width:100vw;position:absolute;'></image>
        <View className='at-col' style={{padding: `${top_height_rpx}rpx 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
            onClickLeftIcon={this.handleNavBack.bind(this)}
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
                  <image src={this.state.infoLoading? playpic:base+this.state.playInfo.play_pic} style='height:300rpx;width:90%;border-radius:10px;'>
                    <text className='play-pic-label-info'>{this.state.infoLoading? "":this.state.playInfo.play_labels[0]}</text>
                  </image>
              </View>
              <text style='width:400rpx;font-size:6vw;padding-left:4%;padding-top:2%;color:#fff;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.infoLoading? "加载中":this.state.playInfo.play_name}</text>
            </View>
            <View className='at-col' style={{backgroundColor:`#F9F9F9`,borderRadius:`15px`,paddingBottom:`5%`,minHeight:`${windowHeight_rpx - top_height_rpx - 250}rpx`}}>
              <View className='at-col' style='background-color:#ffff;border-radius:15px;'>
                <View className='play-score-position-info' style='font-size:4vw;font-weight:bold;'>难度
                  <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                    {score_list}
                  </View>
                </View>
                <View style='font-size:4vw;font-weight:bold;padding-left:38%;padding-top:3%;display:flex;align-items:flex-end;'>{this.state.infoLoading? 0:this.state.playInfo.play_headcount}人本</View>
                <View className='play-label-position-info' style='padding-top:3%;padding-left: 36%;'>
                    {play_labels_info}
                </View>
                <View className='at-col' >
                  <View style='font-size:16px;font-weight:550;color:#000;padding-top:20rpx;padding-left:4%;'>{this.state.infoLoading? "加载中":this.state.isCreateQueue? this.state.queueInfo.queue_end_time.slice(0,10)+" "+this.state.queueInfo.queue_end_time.slice(11,-3):this.state.queueInfo.queue_end_time}</View>
                  <View style='font-size:12px;font-weight:550;color:#00000099;padding-left:4%;'>游戏时长约{this.state.infoLoading?0:this.state.playInfo.play_duration}小时（以实际游戏时间为准）</View>
                </View>
                <View style='width:650rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:1%;padding-bottom:1%;'></View>
                <View className='at-row' style='padding-bottom:3%;'>
                  <View style='width:550rpx;display:flex;flex-direction:column;'>
                    <text style='font-size:16px;font-weight:550;color:#000;padding-top:3%;padding-left:5%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>   
                      {this.state.infoLoading?"":this.state.storeInfo.store_name}
                    </text>
                    <text style='padding-left:5%;font-size:12px;font-weight:550;color:#00000099;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>
                      {this.state.infoLoading?"":this.state.storeInfo.store_address}
                    </text>
                  </View>
                  <image src={telpic} mode='heightFix' style='height:25px;padding-top:4.5%;padding-right:3%;' onClick={this.makePhoneCall.bind(this)}></image>
                  <View style='height:30px;border:0px solid #97979722;border-left-width:2px;margin-top:4%;'></View>
                  <image src={mappic} mode='heightFix' style='height:25px;padding-top:4%;padding-left:3%;padding-right:5%;' onClick={this.openLocation.bind(this)}></image>
                </View>
              </View>

              <View className='at-col' style='margin-top:3%;background-color:#ffff;border-radius:15px;padding-bottom:3%;'>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
                    <text style='font-size:16px;font-weight:550;color:#000;'>定金金额</text>
                    <text style='font-size:10px;font-weight:500;color:#00000099;'>（{this.state.infoLoading?0:this.state.storeInfo.store_deposit}元/人）</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:10%;'>
                    <text style='font-size:14px;font-weight:500;color:#000000;'>合计：</text>
                    <text style='font-size:14px;font-weight:500;color:#FE0101;'>{this.state.infoLoading?0:this.state.storeInfo.store_deposit*this.state.newPlayerInfo.length}</text>
                  </View>
                </View>
                <View style='width:680rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:1%;padding-bottom:1%;'></View>
                {new_players_num_display}
              </View>

              <View className='at-col' style='margin-top:3%;background-color:#ffff;border-radius:15px;padding-bottom:3%;'>
                <View className='at-row' style='padding-top:3%;'>
                  <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
                    <text style='font-size:16px;font-weight:550;color:#000;'>联系方式</text>
                  </View>
                  <View style='width:50vw;display:table-cell;text-align:right;padding-right:10%;'>
                    {phone_num_display}
                  </View>
                </View>
                <View style='width:680rpx;height:3px;border:0px solid #97979722;border-bottom-width:2px;margin-left:30rpx;padding-top:0%;padding-bottom:1%;'></View>
                <View style='font-size:14px;font-weight:500;color:#000000;padding-left:4.5%;padding-top:1%;'>备注</View>
                <View style='font-size:12px;font-weight:500;color:#00000099;padding-left:4.5%;padding-top:1%;width:90%;'>
                  <Textarea placeholder='可将您的其他要求告知商家' onblur={this.handleCommentInput.bind(this)}></Textarea>
                </View>
              </View>
            </View>
            <View className='at-col' style='height:10rpx;'></View>
          </ScrollView>
          <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
            <View style='width:50vw;display:table-cell;text-align:left;padding-left:4%;'>
              <text style='font-size:10vw;font-weight:550;color:#FCA62F;'>￥{this.state.infoLoading?0:this.state.storeInfo.store_deposit*this.state.newPlayerInfo.length}</text>
            </View>
            <View style='width:50vw;display:table-cell;text-align:right;padding-right:0%;padding-top:2.5%;'>
              <AtButton type='primary' circle='true' className='comfirm-button' onClick={this.handleComfirm.bind(this)}>确认支付</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
