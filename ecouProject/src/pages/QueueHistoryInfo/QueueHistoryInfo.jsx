import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView} from '@tarojs/components'
import { AtNavBar, AtIcon, AtAvatar, AtInputNumber, AtButton, AtActivityIndicator } from 'taro-ui'
import classNames from 'classnames';
import {setGlobalData, getGlobalData} from "../../globaldata"
import './QueueHistoryInfo.scss'

import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import memberPic from '../../img/member.png'
import emptyPic from '../../img/empty.svg'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'

import telpic from '../../img/telIcon.svg'
import mappic from '../../img/map_icon.svg'

import {test_queue_players_info} from '../../service/api'
import {base} from '../../service/config'
import dayjs from 'dayjs';

export default class Queueinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      isHide: true,
      male:0,
      female:0,
      queueInfo:{},
      playInfo:{},
      userInfo:{},
      storeInfo: {},
      playerInfo:[],
      canInv:"null",
      infoLoading: true
    },
    this.players_info = []
  }

  componentWillMount() {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    console.log(currentPage.options)
    if(currentPage.options.canInv){
      this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
      this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
      this.state.storeInfo = Taro.getStorageSync(`store_id_${this.state.queueInfo.store_id}`);
      this.state.userInfo = Taro.getStorageSync(`user_info`);
      if (currentPage.options.canInv == "true") {
        this.setState({
          canInv: true
        }) 
      } else {
        this.setState({
          canInv: false
        }) 
      }
    } else {
      this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
      this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
      this.state.storeInfo = Taro.getStorageSync(`store_info`);
      this.state.userInfo = Taro.getStorageSync(`user_info`);
    }
    let _this = this;
    test_queue_players_info(this.state.queueInfo.queue_id).then(function(res) {
      _this.state.playerInfo = res.data.data.player_info;
      _this.setState({
        infoLoading: false
      })
    })
  }

  onScrollToUpper() {}

  // or ??????????????????
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

  makePhoneCall() {
    console.log('call the store')
    wx.makePhoneCall({
      phoneNumber: this.state.storeInfo.store_tel //??????????????????????????????????????????
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

  onShareAppMessage (res) {
    console.log(res)
    let store_info = Taro.getStorageSync('store_info');

    var name = '';

    if (this.state.playInfo.play_name.length > 10) {
      name = this.state.playInfo.play_name.slice(0,9)+'...';
    } else {
      name = this.state.playInfo.play_name;
    }

    let start_time = '';

    if (this.state.queueInfo.queue_end_time.length>15){
      start_time = this.state.queueInfo.queue_end_time.slice(5,10)+" "+this.state.queueInfo.queue_end_time.slice(11,-3);
    } else {
      start_time = this.state.queueInfo.queue_end_time;
    }

    return {
      title: `?????????${name}\n???????????????${start_time}`,
      path: `/pages/QueueInfo/QueueInfo?queueId=${this.state.queueInfo.queue_id}&storeId=${store_info.store_id}`,
      imageUrl: `${base+this.state.playInfo.play_pic}`
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
    this.players_info = [];
    let male_female_display = [];
    let play_info_male_female_display = [];
    let invButDisplay = [];
    let score_list = [];
    if (this.state.infoLoading == false){
      play_labels_info = this.state.playInfo.play_labels.map((label_item, label_idx)=>{
        return(
          <text className='play-label-info'>{label_item}</text>
        )
      })

      for (let player_index = 0; player_index < this.state.playInfo.play_headcount; player_index++) {
        if (player_index < this.state.playerInfo.length) {
          this.players_info.push(
            <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
              <image src={this.state.playerInfo[player_index].player_pic} style='height:15vw;width:15vw;border-radius:100%;background-color:#D8D8D8;'></image>
              <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                <image src={this.state.playerInfo[player_index].player_gender==3? null:this.state.playerInfo[player_index].player_gender? malePic:femalePic} style='height:4vw;width:4vw;'></image>
                <text style='width:12vw;font-size:12px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'>{this.state.playerInfo[player_index].player_name}</text>
              </View>
            </View>
          )
        } else {
          this.players_info.push(
            <View className='at-row' style='width:15vw;padding:0% 4%;padding-top:5%;padding-bottom:2%;position:relative'>
              <image src={emptyPic} style='height:15vw;width:15vw;border-radius:100%;background-color:#D8D8D8;'></image>
              <View style='width:15vw;position:absolute;top:19vw;align-items:flex-end;display:flex;justify-content:center;'>
                <text style='font-size:12px'>????????????</text>
              </View>
            </View>
          )
        }
      }

      if (this.state.playInfo.play_male_num == 999 || this.state.playInfo.play_female_num == 999){
        male_female_display= [];
        play_info_male_female_display = [];
      } else {
        play_info_male_female_display.push(
          <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%;'>
            <text style='background-color:#c0c0c0;color:rgb(80, 80, 80);padding: 0% 10%;border-radius:3px;'>{this.state.infoLoading ? `0`:this.state.playInfo.play_male_num}???{this.state.infoLoading ? `0`:this.state.playInfo.play_female_num}???</text>
          </View>
        )

        male_female_display.push(
          <View className='at-col' style='font-size:12px;color:#000;align-items:flex-end;display:flex;justify-content:flex-end;padding-right:1%'>????????????
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{this.state.infoLoading ? '0':this.state.playInfo.play_male_num-this.state.queueInfo.queue_current_male_num}</text>
            </View>

            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{this.state.infoLoading ? '0':this.state.playInfo.play_female_num-this.state.queueInfo.queue_current_female_num}</text>
            </View>
          </View>
        )
      }

      invButDisplay = [];
      console.log(this.state.canInv);
      if (this.state.canInv == true | this.state.canInv == "null") {
        invButDisplay.push(
          <View className='at-row' style='position:fixed;bottom:0;height:150rpx;padding-top:2%;background-color:#fff'>
              <AtButton type='primary' circle='true' openType='share' disabled={this.state.queueInfo.queue_status == 1 | (this.state.queueInfo.queue_current_num==this.state.playInfo.play_headcount)} className='join-queue-button' >????????????</AtButton>
          </View>
        );
        scrollStyle = {
          height: `${windowHeight_rpx-top_height_rpx-150-100}rpx`
        }
      } else {
        scrollStyle = {
          height: `${windowHeight_rpx-top_height_rpx-90}rpx`
        }
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
        <View className='at-col Queueinfo' style='position:relative'>
          <image className='queue-info-page' src={this.state.infoLoading? null: base+this.state.playInfo.play_pic} style='width:100vw;height:100vh;position:absolute'></image>
          <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
              <AtNavBar className='nav-bar-info'
                onClickLeftIcon={this.handleNavBack}
                color='#ffff'
                leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>????????????</View></AtNavBar>
            <ScrollView
              className='scrollview'
              scrollY
              scrollWithAnimation
              show-scrollbar='false'
              scrollTop={scrollTop}
              style={scrollStyle}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScrollToUpper={this.onScrollToUpper.bind(this)} // ??????????????????????????? ??????????????? `onScrollToUpper={this.onScrollToUpper}`
              onScroll={this.onScroll}
              >
              
                <View className='at-row' style='height:300rpx;padding-top:5%;'>
                  <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* ?????????????????????image??????????????? */> 
                      <image src={this.state.infoLoading? null: base+this.state.playInfo.play_pic} style='height:100%;width:90%;border-radius:10px;'>
                        <text className='play-pic-label-info'>{this.state.infoLoading? "": this.state.playInfo.play_labels[0]}</text>
                      </image>
                  </View>
                  <View className='at-col' /*???????????????StoreInfo ????????????*/> 
                    <View className='play-name-position-info'>
                      <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.infoLoading? "?????????": this.state.playInfo.play_name}</text>
                    </View>
                    <View className='play-score-position-info'>??????
                      <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                        {score_list}
                      </View>
                    </View>
                    <View className='play-headcount-position-info'>{this.state.infoLoading? 0: this.state.playInfo.play_headcount}??????
                      {play_info_male_female_display}
                    </View>
                    <View className='play-duration-position-info'>???????????????{this.state.infoLoading? 0: this.state.playInfo.play_duration}??????</View>
                    <View className='play-label-position-info'>
                      {play_labels_info}
                    </View>
                  </View>
                </View>
                <View className='at-row' style='padding-top:5%'>
                  <View className='at-col' style='background-color:rgba(201, 201, 201, 0.295);margin:0% 3.5%;padding-top:1%;border-radius:5px;'>
                    <View className='at-row' style='position:relative;color:#c0c0c0;'>
                      <View className='at-row' style='align-items:flex-end;display:flex;justify-content:flex-start;padding-left:2%;font-size:14px;'>????????????</View>
                      <View className='at-row' style='align-items:center;display:flex;justify-content:flex-end;padding-right:2%;font-size:12px;' onClick={this.handleClick.bind(this)}>
                        {this.state.isHide? '??????' : '??????'}
                        <AtIcon value={this.state.isHide? 'chevron-down' : 'chevron-up'} size='20'></AtIcon> 
                      </View>
                    </View>
                    <View className='at-row' style='padding-left:2%;'>
                      <text className={this.state.isHide? 'play-intro-info play-intro-hide' : 'play-intro-info'}>{this.state.infoLoading? null: this.state.playInfo.play_intro.split('/n').join('\n')}</text>
                    </View>
                  </View>
                </View>
                <View className='at-col' style='background-color:#F9F9F9;margin-top:1%;padding-bottom:5%;'>
  
                  <View className='at-row queue-time-tab-info' style='padding-top:2%'>
                    {/*???????????????????????????tab */}
                    <View className='at-row'>
                      <View className='at-col'>
                        <View className='at-row queue-start-time-info' >????????????</View>
                        <View className='at-row' style='font-size:14px;font-weight:550;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.infoLoading? "?????????": this.state.canInv=="null"?  this.state.queueInfo.queue_end_time:this.state.queueInfo.queue_end_time.slice(0,10)+" "+this.state.queueInfo.queue_end_time.slice(11,-3)}</View>
                      </View>
                    </View>
                    <View className='at-row'>
                      <View className='at-col'>
                        <View className='at-row queue-antigender-info'>??????????????????</View>
                        <View className='at-row' style='font-size:14px;font-weight:550;color:#000;height:70%;align-items:center;display:flex;justify-content:flex-start;padding-left:10%;'>{this.state.infoLoading? "?????????": this.state.queueInfo.queue_antigender? "??????":"?????????"}??????</View>
                      </View>
                    </View>
                  </View>
  
                  <View className='at-col queue-join-tab-info' style='padding-top:2%'>
                    {/*???????????????????????????tab */}
                    <View className='at-row' style='padding-bottom:3%;'>
                      <View style='width:500rpx;display:flex;flex-direction:column;'>
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
  
                  <View className='at-row at-row--wrap queue-member-tab-info' style='padding-top:2%;padding-bottom:4%;'>
                    {/* ?????????????????? */}
                    <View className='at-row' style='height:50rpx;border:0px solid #979797;border-bottom-width:1px;width:90%;margin-left:5%'>
                      <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:0%'>????????????</View>
                      {male_female_display}
                    </View>
                    {this.players_info}
                  </View>
                </View>
              <View className='at-row' style='height:150rpx;background-color:#F9F9F9;padding-bottom:5%;'></View>
            </ScrollView>
            {invButDisplay}
            </View>
        </View>
      )
    } else {
      return (
        <View className='at-col Queueinfo' style='position:relative'>
          <View className='at-col' style={{padding: `${top_height+100}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
            <View style='height:40vh;width:100vw;'></View>
            <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
          </View>
        </View>
      )
    }
  }
}
