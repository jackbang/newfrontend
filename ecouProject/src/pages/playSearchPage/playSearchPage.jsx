import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtNavBar, AtSearchBar, AtActivityIndicator} from 'taro-ui'

import './playSearchPage.scss'

import {test_store_plays_search, test_store_queues_search, test_get_history_queues} from '../../service/api'
import {base} from '../../service/config'
import dayjs from 'dayjs';

import malePic from '../../img/male.png'
import femalePic from '../../img/female.png'
import scoreActive from '../../img/scoreActive.png'
import noResult from '../../img/noResult.svg'

export default class Playsearchpage extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      store_info: {},
      user_info: {},
      value: '',
      page: 1,
      storePlays: [],
      queues: [],
      queuePlays: [],
      queueList:[],
      searchResultInfoLoading: false
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.state.store_info = Taro.getStorageSync('store_info')
    this.state.user_info = Taro.getStorageSync('user_info')
  }

  componentDidHide () { }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  handleNavBack() {
    Taro.navigateBack();
  }

  onChange(value) {
    this.setState({
      value:value
    })
  }

  refreshMineQueue() {
    let storeId = this.state.store_info.store_id;
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
  }

  onActionClick(){

    this.refreshMineQueue()

    this.state.storePlays = [];
    this.setState({
      searchResultInfoLoading: true
    })
    console.log(this.state.value)

    let cert_data = {
      adminId: this.state.user_info.user_id,
      sessionId: this.state.user_info.sessionId,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000)*2
    }

    let store_id = this.state.store_info.store_id;
    let title = this.state.value;
    let hd = 0;
    let type1 = '';
    let type2 = '';
    let type3 = '';
    let page = this.state.page;

    let _this = this;

    test_store_plays_search(cert_data, 
      `store_id=${store_id}&title=${title}&hd=${hd}&type1=${type1}&type2=${type2}&type3=${type3}&page=${page}`).then(
      function(res){
        console.log(res.data)
        _this.setState({
          searchResultInfoLoading: false,
          storePlays: _this.state.storePlays.concat(res.data)
        })
      }
    )

    _this = this;
    test_store_queues_search(cert_data,
      `store_id=${store_id}&title=${title}`).then(
        function(res){
          console.log(res.data)
          _this.setState({
            searchResultInfoLoading: false,
            queues: res.data.data.queues,
            queuePlays: res.data.data.plays
          })
        }
      )
  }

  handleButtonClick(queueInfo) {
    console.log(queueInfo)
    let userInfo = Taro.getStorageSync(`user_info`);
    queueInfo.queue_end_time = queueInfo.queue_end_time.slice(0,10)+" "+queueInfo.queue_end_time.slice(11,-3)
    Taro.setStorage({ key: `queue_id_${queueInfo.queue_id}`, data: queueInfo });
    Taro.navigateTo({ url: `../QueueInfo/QueueInfo?queueId=${queueInfo.queue_id}` });
  }

  handleInfoButtonClick(queueInfo) {
    let userInfo = Taro.getStorageSync(`user_info`);
    Taro.setStorage({ key: `queue_id_${queueInfo.queue_id}`, data: queueInfo });
    Taro.navigateTo({ url: `../QueueHistoryInfo/QueueHistoryInfo?queueId=${queueInfo.queue_id}` });
  }

  handleCreateQueue (item){
    Taro.navigateTo({url: `../JoinQueueComfirmInfo/JoinQueueComfirmInfo?playId=${item.play_id}`})
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
      height: `${windowHeight_rpx-top_height_rpx-164}rpx`
    }

    let content = [];

    if (this.state.searchResultInfoLoading == true) {

      content.push(
        <View style='height:auto;width:100vw;'>
          <AtActivityIndicator mode='center' size={64} content='Loading...' className='load'></AtActivityIndicator>
        </View>
      )
    } else {
      let queueTabs = [];
      let playTabs = [];

      this.state.queues.map((item, itemIdx) => {

        this.state.queuePlays[itemIdx]['play_pic'] = this.state.queuePlays[itemIdx].play_img;
        console.log(this.state.queuePlays[itemIdx])
        Taro.setStorage({
          key:`play_id_${this.state.queuePlays[itemIdx].play_id}`,
          data: this.state.queuePlays[itemIdx]
        })

        let male_female_display = [];
        if (this.state.queuePlays[itemIdx].play_male_num == 999 | this.state.queuePlays[itemIdx].play_female_num == 999) {
          male_female_display = [];
        } else {
          male_female_display.push(
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{item.queue_current_male_num}/{this.state.queuePlays[itemIdx].play_male_num}</text>
            </View>
          )
          male_female_display.push(
            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{item.queue_current_female_num}/{this.state.queuePlays[itemIdx].play_female_num}</text>
            </View>
          )
        }

        let play_labels_info = this.state.queuePlays[itemIdx].play_labels.map((label_item, label_idx)=>{
          return(
            <text className='queue-label-info'>{label_item}</text>
          )
        })

        let buttonDisplay = [];
        if(this.state.queueList.find((repeatQueue) => repeatQueue.queue_id == item.queue_id)){
          buttonDisplay.push(
            <AtButton type='primary' circle='true' className='join-button' onClick={this.handleInfoButtonClick.bind(this, item)}>查看详情</AtButton>
          )
        } else {
          buttonDisplay.push(
            <AtButton type='primary' circle='true' className='join-button' disabled={item.queue_current_num==this.state.queuePlays[itemIdx].play_headcount} onClick={this.handleButtonClick.bind(this, item)}>{item.queue_current_num==this.state.queuePlays[itemIdx].play_headcount? '已拼满':'我要上车'}</AtButton>
          )
        }

        queueTabs.push(
          <View className='at-row queue-tab-info'>
            {/*  每个tab上信息显示 */}
            <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
              <image className='play-pic-info' src={base+this.state.queuePlays[itemIdx].play_img}>
              <text className='play-pic-label-info'>{this.state.queuePlays[itemIdx].play_labels[0]}</text>
              </image>
            </View>
            <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
              <View className='at-col play-name-position-info'>
                <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{this.state.queuePlays[itemIdx].play_name}</text>
              </View>
              <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                <View className='at-col' /* 第一列 有两行*/>
                  <View className='at-row play-time-position-info'><text decode="{{true}}">{item.queue_end_time.slice(0,10)+" "+item.queue_end_time.slice(11,-3)}</text></View>
                  <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                    <View className='play-headcount-info'><text decode="{{true}}">人数：{item.queue_current_num}/{this.state.queuePlays[itemIdx].play_headcount}</text></View>
                    {male_female_display}

                  </View>
                </View>
                <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                  {/* Button  激活与不激活 具体看taroui中的文档*/}
                  {buttonDisplay}
                </View>
              </View>
              <View className='at-col play-antigender-position-info'>
                <text className='play-antigender-info'>{item.queue_allow_antigender ? `可反串` : `不可反串`}</text>
                {play_labels_info}
              </View>
            </View>

          </View>
        )
      })

      this.state.storePlays.map((item, itemIdx)=>{

        this.state.storePlays[itemIdx]['play_pic'] = this.state.storePlays[itemIdx].play_img;
        console.log(this.state.storePlays[itemIdx])
        Taro.setStorage({
          key:`play_id_${this.state.storePlays[itemIdx].play_id}`,
          data: this.state.storePlays[itemIdx]
        })

        let male_female_display = [];
        if (item.play_male_num == 999 | item.play_female_num == 999) {
          male_female_display = [];
        } else {
          male_female_display.push(
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={malePic}></image>
              <text>{item.play_male_num}</text>
            </View>
          )
          male_female_display.push(
            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={femalePic}></image>
              <text>{item.play_female_num}</text>
            </View>
          )
        }

        let play_labels_info = item.play_labels.map((label_item, label_idx)=>{
          return(
            <text className='play-label-info'>{label_item}</text>
          )
        })

        let score_list = [];
        for (let index = 0; index <item.play_score; index++) {
          score_list.push(
            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        }

        playTabs.push(
          <View className='at-row queue-tab-info'>
            <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
              <image className='play-pic-info' src={base+item.play_img}>
              <text className='play-pic-label-info'>{item.play_labels[0]}</text>
              </image>
            </View>
            <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
              <View className='at-col play-name-position-info'>
                <text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.play_name}</text>
              </View>
              <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                <View className='at-col' /* 第一列 有两行*/>
                  <View className='play-score-position-info'>难度
                    <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                      {score_list}
                    </View>
                  </View>
                  <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                    <View className='play-headcount-info'><text decode="{{true}}">{item.play_headcount}人本</text></View>
                      {male_female_display}
                  </View>
                </View>
                <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                  {/* Button  激活与不激活 具体看taroui中的文档*/}
                  <AtButton type='primary' circle='true' className='create-button' onClick={this.handleCreateQueue.bind(this, item)}>发车</AtButton>
                </View>
              </View>
              <View style='height:20rpx;width:1rpx;'></View>
              <View className='at-col play-label-position-info'>
                {play_labels_info}
              </View>
            </View>
          </View>
        )
      })

      content.push(
        <View style='height:auto;width:100vw;'>
            <text style='font-size:40rpx;font-weight:550;color:#000000;margin-left:50rpx;margin-top:40rpx;'>{this.state.queues.length==0? '':'在拼车队'}</text>
            {queueTabs}
            {((this.state.queues.length==0)&&(this.state.storePlays.length==0))? <image src={noResult} style='width:100vw;height:100%;' ></image>:null}
        </View>
      )

      content.push(
        <View style='height:auto;width:100vw;'>
            <text style='font-size:40rpx;font-weight:550;color:#000000;margin-left:50rpx;margin-top:40rpx;'>{this.state.storePlays.length==0? '':'剧本'}</text>
            {playTabs}
        </View>
      )

      if ((this.state.queues.length==0) & (this.state.storePlays.length==0)) {
        console.log('empty')
        content.push(
          <View style='height:auto;width:100vw;'>
            <image src={noResult} style='width:100vw;height:50vh;' ></image>
          </View>
        )
      }
    }
    return (
      <View className='playSearchPage'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
          <AtNavBar className='nav-bar-info'
            onClickLeftIcon={this.handleNavBack.bind(this)}
            color='#000'
            leftIconType='chevron-left'
          ><View style='color:#000;font-size:18px'>搜索</View></AtNavBar>
          <AtSearchBar
            className='mainPageSearch'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
            showActionButton={true}
            onConfirm={this.onActionClick.bind(this)}
            focus
          />
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

          {content}

          </ScrollView>
        </View>
      </View>
    )
  }
}
