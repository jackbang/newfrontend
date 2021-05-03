import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'

import './JoinQueueSuccessInfo.scss'

export default class Joinqueuesuccessinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      queueInfo:{},
      newPlayerInfo:[],
      storeInfo:{},
      infoLoading: true
    }
  }

  componentWillMount() {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
    this.state.newPlayerInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}_newPlayers`);
    this.state.storeInfo = Taro.getStorageSync(`store_info`);
    this.setState({
      infoLoading: false
    })
    console.log(this.state)
  }
  
  handleComfirmClick() {
    Taro.removeStorage({key: `queue_id_${this.state.queueInfo.queue_id}_newPlayers`});
    Taro.removeStorage({key: `queue_id_${this.state.queueInfo.queue_id}`});
    Taro.navigateBack({ delta: 15 });
  }

  render () {
    return (
      <View className='JoinQueueSuccessInfo' style='height:100vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;'>
        <View style='width:100vw;height:30vh;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;'>
          <AtIcon value='check-circle' size='60' color='#07E471'></AtIcon>
          <text style='color:#07E471;font-size:18px;font-weight:550;padding-top:3%;'>预约成功</text>
        </View>
        <View style='width:100vw;height:20vh;display:flex;justify-content:flex-start;align-items:center;'>
          <View style='width:50vw;display:flex;flex-direction:column;justify-content:center;align-items:center;'>
            <View style='margin-left:10%;'><text style='font-size:18px;color:#A5A5A5'>预约时间</text></View>
            <View style='margin-left:10%;padding-top:5%;'><text style='font-size:18px;color:#000000;'>{this.state.infoLoading? "加载中":this.state.queueInfo.queue_id? this.state.queueInfo.queue_end_time:this.state.queueInfo.queue_end_time.slice(5,10)+" "+this.state.queueInfo.queue_end_time.slice(11,16)}</text></View>
          </View>
          <View style='width:50vw;display:flex;flex-direction:column;justify-content:center;align-items:center;'>
            <View style='margin-right:10%;'><text style='font-size:18px;color:#A5A5A5'>定金金额</text></View>
            <View style='margin-right:10%;padding-top:5%;'><text style='font-size:18px;color:#000000;'>{this.state.infoLoading? "加载中":this.state.storeInfo.store_deposit*this.state.newPlayerInfo.length}.00元</text></View>
          </View>
        </View>
        <View style='width:100vw;height:20vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;'>
          <AtButton type='primary' circle='true' className='share-button'>分享车队给好友</AtButton>
          <AtButton type='second' circle='true' className='comfirm-button' onClick={this.handleComfirmClick.bind(this)}>我知道了</AtButton>
        </View>
      </View>
    )
  }
}
