import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'

import './JoinQueueSuccessInfo.scss'

import {base} from '../../service/config'

export default class Joinqueuesuccessinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      queueInfo:{},
      newPlayerInfo:[],
      storeInfo:{},
      playInfo:{},
      newId: null,
      infoLoading: true
    }
  }

  componentWillMount() {
    var pages = getCurrentPages();
    console.log(pages)
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    this.state.newId = pages_option.newId;
    this.state.queueInfo = Taro.getStorageSync(`queue_id_${pages_option.queueId}`);
    this.state.playInfo = Taro.getStorageSync(`play_id_${this.state.queueInfo.play_id}`);
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
    Taro.reLaunch({
      url: `/pages/StoreInfo/StoreInfo?storeId=${this.state.storeInfo.store_id}`
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

    let queue_id = '';
    console.log(this.state.newId)
    if (this.state.newId) {
      queue_id = this.state.newId;
    } else {
      queue_id = this.state.queueInfo.queue_id;
    }

    return {
      title: `剧本：${name}\n开车时间：${start_time}`,
      path: `/pages/QueueInfo/QueueInfo?queueId=${queue_id}&storeId=${store_info.store_id}`,
      imageUrl: `${base+this.state.playInfo.play_pic}`
    }
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
          <AtButton type='primary' circle='true' className='share-button' openType='share'>分享车队给好友</AtButton>
          <AtButton type='second' circle='true' className='comfirm-button' onClick={this.handleComfirmClick.bind(this)}>我知道了</AtButton>
        </View>
      </View>
    )
  }
}
