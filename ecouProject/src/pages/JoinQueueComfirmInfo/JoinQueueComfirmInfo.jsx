import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView, Switch} from '@tarojs/components'
import { AtButton, AtNavBar, AtFloatLayout, AtIcon, AtInputNumber, AtSwitch} from 'taro-ui'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './JoinQueueComfirmInfo.scss'

import CustomPicker from '../../components/diyPicker'

import playpic from '../../img/play_pic.jpg'
import scoreActive from '../../img/scoreActive.png'
import scoreDeactive from '../../img/scoreDeactive.png'
import femalePic from '../../img/female.png'
import malePic from '../../img/male.png'
import roomPic from '../../img/room.png'

export default class Joinqueuecomfirminfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      timePickerShow: false,
      timeSeleted: '请选择',
      selectArrowShow: true,
      male:0,
      female:0,
      roomSelectId:0
    }
  }

  handleNavBack() {
    Taro.navigateBack()
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
    this.setState({
      timeSeleted: str_list,
    })
  }

  handleConfirm = value => {
    var str_list = value.slice(5,7)+'月'+value.slice(8,10)+'日'+' '+value.slice(11,16);
    console.log('confirm value: ', value)
    this.setState({
      timeSeleted: str_list,
      selectArrowShow: false
    })
  }

  handleCancel = () => {
    console.log('cancel action')
  }

  handlePickerClick(){
    this.setState({
      timePickerShow: !this.state.timePickerShow
    })
  }

  handleClose(){
    this.setState({
      timePickerShow: !this.state.timePickerShow,
      selectArrowShow: false
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

  handleRoomSelect (id){
    this.setState({
      roomSelectId: id
    })
  }

  render () {

    const dateTime = [
      // {mode: 'year', unit: '年', start: '2020'},
      // {mode: 'month', unit: '月'},
      { mode: 'day', duration: 30, unit: '日', humanity: true, format: 'M月D日' },
      // {mode: 'day', start: '21', duration: 30, unit: '日' },
      // { mode: 'hour', unit: ':00', format: 'H:s', selected: [8, 12, 16] },
      { mode: 'hour', unit: '时' },
      {mode: 'minute', fields: 5, unit: '分'},
      // {mode: 'second', fields: 30, unit: '秒'},
    ]

    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var system_width = wx.getSystemInfoSync().screenWidth/3;

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      height: '90vh'
    }
    var scrollStyleX = {
      width: '86vw'
    }

    return (
      <View className='JoinQueueComfirmInfo'>
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
          <image className='queue-info-page' mode='widthFix' src={playpic} style='width:100vw;position:absolute'></image>
          <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`, position:'absolute', top:0, left:0, width:'100%'}}>
            <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack}
              color='#ffff'
              leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>我要发车</View></AtNavBar>
            <View className='at-row' style='height:300rpx;padding-top:5%;'>
              <View className='at-row play-pic-position-info' style={{width: `${system_width}px`}} /* 这里是用来规划image放置的位置 */> 
                  <image src={playpic} mode='widthFix' style='width:90%;border-radius:10px;'>
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
            <View className='at-row' style='display:flex;align-items:flex-end;justify-content:flex-start;'>
              <AtButton type='primary' circle='true' className='reselect-play-button' onClick={this.handleNavBack.bind(this)}>重新选择</AtButton>
            </View>

            <View className='at-col' style='background-color:#F9F9F9;margin-top:1%;padding-bottom:1%;'>
              <View className='at-row queue-play-intro-tab-info' style='padding-top:2%;padding-bottom:5rpx;'>
                <View className='at-row'>
                  <View className='at-col' style='padding: 0 3%;'>
                    <View className='at-col play-intro-title-info' >剧情简介</View>
                    <text className='play-intro-info' decode="{{true}}">&nbsp;&nbsp;&nbsp;&nbsp;某个蝉鸣聒噪的夏日，一行七人被莫名聚集在古老的木夕神社。他们被邀请来参与一场莫名其妙的游戏。 而邀请他们前来此处的，正是那个身着玄色僧袍的和尚...... 蝉鸣阵阵中，似有人在他们的耳边呢喃，声音深远悠长——声音深远悠长</text>
                  </View>
                </View>
              </View>

              <View className='at-row queue-play-intro-tab-info' style='padding-top:2%;padding-bottom:5rpx;'>
                <View className='at-row'>
                  <View className='at-col' style='padding: 0 3%;'>
                    <View className='at-row' style='border: 0 solid #82828230;border-bottom-width: 1px;padding-bottom: 2%;'>
                      <View className='at-col play-intro-title-info' >开局时间</View>
                      <View className='at-col play-time-selecter-info' onClick={this.handlePickerClick.bind(this)}>
                        {this.state.selectArrowShow ? "请选择" : this.state.timeSeleted}
                        {this.state.selectArrowShow ? <AtIcon value='chevron-right' size='22' color='#5C5C5BFF'></AtIcon>: ""}
                      </View>
                      <AtFloatLayout title="开局时间" isOpened={this.state.timePickerShow} onClose={this.handleClose.bind(this)}>
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
                    <View className='at-row'>
                      <View className='play-join-queue-title-info' >加入车队</View>
                      <View className='play-male-position-info'>
                        <image className='gender-icon-info' src={malePic}></image>
                        <text>2</text>
                      </View>

                      <View className='play-female-position-info'>
                        <image className='gender-icon-info' src={femalePic}></image>
                        <text>2</text>
                      </View>
                    </View>
                    <View className='at-row' style='height:90rpx;'>
                      <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>男玩家</View>
                      <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
                        <AtInputNumber
                          className ='queue-join-input-number'
                          min={0}
                          max={10}
                          step={1}
                          value={this.state.male}
                          onChange={this.handleChangeMale.bind(this)}
                        />
                      </View>
                    </View>
                    <View className='at-row' style='height:90rpx;'>
                      <View className='at-col' style='font-size:16px;font-weight:600;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>女玩家</View>
                      <View className='at-col' style='align-items:center;display:flex;justify-content:flex-end;padding-right:10%'>
                        <AtInputNumber
                          className ='queue-join-input-number'
                          min={0}
                          max={10}
                          step={1}
                          value={this.state.female}
                          onChange={this.handleChangeFemale.bind(this)}
                        />
                      </View>
                    </View>
                    <View className='at-row' style=''>
                      <View className='at-col'>
                        <View className='at-col' style='font-size:14px;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>是否接受反串</View>
                        <View className='at-col' style='font-size:10px;color:#000;align-items:center;display:flex;justify-content:flex-start;padding-left:8%'>
                          <AtIcon value='alert-circle' size='14' color='rgb(255, 47, 47)'></AtIcon>
                          DM不建议反串哦
                        </View>
                      </View>
                      <Switch className='switch-info' color='#FCA62FFF'/>
                    </View>

                  </View>
                </View>
              </View>
              <View className='at-row queue-play-intro-tab-info' style='padding-top:2%;padding-bottom:5rpx;'>
                <View className='at-row'>
                  <View className='at-col' style='padding: 0 3%;'>
                    <View className='at-row play-intro-title-info' >选择房间</View>
                    <ScrollView
                    className='scrollview'
                    scrollX
                    scrollWithAnimation
                    scrollTop={scrollTop}
                    style={scrollStyleX}
                    lowerThreshold={Threshold}
                    upperThreshold={Threshold}
                    onScrollToUpper={this.onScrollToUpperX.bind(this)} 
                    onScroll={this.onScrollX}
                    >
                      <View className='at-row' style='padding-top:3%;'>
                        <View className='at-col' style='padding-right:5%;' onClick={this.handleRoomSelect.bind(this, 0)}>
                          <View style='display: flex;justify-content: center;align-items: flex-start;position: relative;'>
                            <image src={roomPic} style='width:30vw;height:20vw;'></image>
                            <AtIcon value='check-circle' size='15' color={this.state.roomSelectId == 0? '#FCA62FFF':'#ffffffC0'} className='room-select-icon'></AtIcon>
                          </View>
                          <View className='at-row' style={this.state.roomSelectId == 0?
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%;font-weight:bold;color:#FCA62FFF;' :
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%' }
                          >现代暗黑房</View>
                        </View>
                        <View className='at-col' style='padding-right:5%;' onClick={this.handleRoomSelect.bind(this, 1)}>
                          <View style='display: flex;justify-content: center;align-items: flex-start;position: relative;'>
                            <image src={roomPic} style='width:30vw;height:20vw;'></image>
                            <AtIcon value='check-circle' size='15' color={this.state.roomSelectId == 1? '#FCA62FFF':'#ffffffC0'} className='room-select-icon'></AtIcon>
                          </View>
                          <View className='at-row' style={this.state.roomSelectId == 1?
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%;font-weight:bold;color:#FCA62FFF;' :
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%' }
                          >现代暗黑房</View>
                        </View>
                        <View className='at-col' style='padding-right:5%;' onClick={this.handleRoomSelect.bind(this, 2)}>
                          <View style='display: flex;justify-content: center;align-items: flex-start;position: relative;'>
                            <image src={roomPic} style='width:30vw;height:20vw;'></image>
                            <AtIcon value='check-circle' size='15' color={this.state.roomSelectId == 2? '#FCA62FFF':'#ffffffC0'} className='room-select-icon'></AtIcon>
                          </View>
                          <View className='at-row' style={this.state.roomSelectId == 2?
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%;font-weight:bold;color:#FCA62FFF;' :
                          'display:flex;justify-content:flex-start;align-items:center;font-size:14px;padding-left:15%' }
                          >现代暗黑房</View>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
                
              </View>

            </View>
          </View>
        </ScrollView>
        <View className='at-row' style='position:absolute;height:10vh;padding-top:2%;background-color:#fff'>
              <AtButton type='second' circle='true' className='invite-friends-button'>邀请好友</AtButton>
              <AtButton type='primary' circle='true' className='join-queue-button'>加入拼车并支付定金</AtButton>
        </View>
      </View>
    )
  }
}
