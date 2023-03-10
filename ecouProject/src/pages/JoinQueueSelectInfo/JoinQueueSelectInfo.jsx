import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag, AtIcon} from 'taro-ui'

import './JoinQueueSelectInfo.scss'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import play_pic from '../../img/play_pic.jpg'
import selectIcon from '../../img/selectIcon.svg'
import male_icon from '../../img/male.png'
import female_icon from '../../img/female.png'
import scoreActive from '../../img/scoreActive.png'
import noResult from '../../img/noResult.svg'
import login from '../../img/searchPageLogin.svg'

import {test_search_plays, test_store_plays_search, test_store_info, test_wechat_login} from '../../service/api'
import {base} from '../../service/config'

import '../../utils/labels'

export default class Joinqueueselectinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      tagActiveNum: 0,
      page: 1,
      plays_num: 0,
      store_info: {},
      user_info: {},
      fromShare: false,

      showSelected: false,
      showSelectTab: false,
      type1:'',
      type2:'',
      type3:'',
      temp_type1:'',
      temp_type2:'',
      temp_type3:'',

      plays_list: []
    }
  }

  componentWillMount () {
    var pages = getCurrentPages();
    let currentPage = pages[pages.length-1];
    let pages_option = currentPage.options;
    console.log(pages_option)
    this.state.user_info = Taro.getStorageSync('user_info')
    if (pages_option.storeId) {
      console.log('from share')
      this.setState({
        fromShare: true
      })
      let _this = this;
      test_store_info(pages_option.storeId).then(function(res) {
        if (res.data.code == 1) {
          var store_info = res.data.data;
          store_info['store_id'] = pages_option.storeId;
          _this.setState({
            store_info: store_info
          });
          Taro.setStorage({ key: `store_info`, data: store_info });
        } else {
          console.log('storeId error')
        }
      })
    }
  }

  componentDidShow () {
    if (this.state.fromShare) {
      this.state.store_info = Taro.getStorageSync('store_info');
      this.state.user_info = Taro.getStorageSync('user_info')
      
      this.state.page = 1;
      this.state.plays_list = [];

      this.searchPlays();
    } else {
      this.state.store_info = Taro.getStorageSync('store_info');
      this.state.user_info = Taro.getStorageSync('user_info')
      
      this.state.page = 1;
      this.state.plays_list = [];

      this.searchPlays();
    }
  }


  handleCreateQueue (item){
    if (this.state.showSelectTab) {

    } else {
      Taro.navigateTo({url: `../JoinQueueComfirmInfo/JoinQueueComfirmInfo?playId=${item.play_id}`})
    }
  }

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e){
    //console.log(e.detail)
  }

  onScrollToUpperY() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScrollY(e){
    //console.log(e.detail)
  }

  addPages() {
    this.state.page = this.state.page + 1;
    this.searchPlays();
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  handleNavBack(){
    if (this.state.fromShare ){
      Taro.reLaunch({
        url: `/pages/StoreInfo/StoreInfo?storeId=${this.state.store_info.store_id}`
      })
    } else {
      Taro.navigateBack()
    }
  }

  onActionClick () {
    this.state.page = 1;
    this.state.plays_list = [];
    this.searchPlays();
  }

  onTagClick (active){
    console.log(active)
  
    this.state.page = 1;
    this.state.plays_list = [];
    this.state.tagActiveNum = active;
    this.setState({
      tagActiveNum: active
    })
    this.searchPlays();
  }

  searchPlays() {
    console.log('--------start search-----------')

    let cert_data = {
      adminId: this.state.user_info.user_id,
      sessionId: this.state.user_info.sessionId,
      appId: wx.getAccountInfoSync().miniProgram.appId,
      token: (dayjs().unix() + 1000)*2
    }

    let store_id = this.state.store_info.store_id;
    let title = this.state.value;
    let hd = this.state.tagActiveNum;
    let type1 = this.state.type1;
    let type2 = this.state.type2;
    let type3 = this.state.type3;
    let page = this.state.page;

    let _this = this;

    test_store_plays_search(cert_data, 
      `store_id=${store_id}&title=${title}&hd=${hd}&type1=${type1}&type2=${type2}&type3=${type3}&page=${page}`).then(
      function(res){
        console.log(res.data)
        _this.setState({
          plays_list: _this.state.plays_list.concat(res.data)
        })
      }
    )
  }

  login() {
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
          this.state.user_info = userInfo.userInfo;
          Taro.setStorage({key:`user_info`, data:userInfo.userInfo,
            success: 
             this.onActionClick()
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
  }

  onShareAppMessage (res) {
    console.log(res)
    let store_info = Taro.getStorageSync('store_info');

    var name = '';

    if (store_info.store_name.length > 10) {
      name = store_info.store_name.slice(0,9)+'...';
    } else {
      name = store_info.store_name;
    }

    return {
      title: `${name}\n本店剧本在此，快去上车！`,
      path: `/pages/JoinQueueSelectInfo/JoinQueueSelectInfo?storeId=${store_info.store_id}`
    }
  }

  showSelect(){
    this.setState({
      showSelectTab: !this.state.showSelectTab
    })
  }

  hideSelect(){
    this.setState({
      showSelectTab: false
    })
  }

  resetLabels() {
    this.state.page = 1;
    this.state.type1 = '';
    this.state.type2 = '';
    this.state.type3 = '';
    this.state.temp_type1 = '';
    this.state.temp_type2 = '';
    this.state.temp_type3 = '';
    this.state.plays_list = [];
    this.setState({
      showSelected:false
    })

    //this.setState({
    //  listLoading:true
    //})
    this.searchPlays();
  }

  confirmLabels() {
    this.state.page = 1;
    this.state.type1 = this.state.temp_type1;
    this.state.type2 = this.state.temp_type2;
    this.state.type3 = this.state.temp_type3;
    this.state.plays_list = [];
    this.setState({
      showSelected:true,
      showSelectTab:false
    })

    //this.setState({
    //  listLoading: true
    //})
    this.searchPlays();
  }

  onLabelClick(label, num) {
    console.log(label)
    console.log(num)
    if (num == 1) {
      if (label == this.state.temp_type1) {
        this.setState({
          temp_type1:''
        })
      } else {
        this.setState({
          temp_type1:label
        })
      }
    } else if (num == 2) {
      if (label == this.state.temp_type2) {
        this.setState({
          temp_type2:''
        })
      } else {
        this.setState({
          temp_type2:label
        })
      }
    } else if (num == 3) {
      if (label == this.state.temp_type3) {
        this.setState({
          temp_type3:''
        })
      } else {
        this.setState({
          temp_type3:label
        })
      }
    }
  }

  render () {
    //Taro.hideTabBar();

    var top_height = wx.getSystemInfoSync().statusBarHeight;
    var screenHeight = wx.getSystemInfoSync().screenHeight;
    var screenWidth = wx.getSystemInfoSync().screenWidth;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var screenHeight_rpx = 750*(screenHeight/screenWidth);
    var windowHeight_rpx = 750*(windowHeight/screenWidth);
    var top_height_rpx = 750*(top_height/screenWidth);

    const scrollTop = 0
    const Threshold = 20
    var scrollStyle = {
      width: '75vw'
    }

    var scrollStyleY = {
      height: `${screenHeight_rpx - top_height_rpx - 250}rpx`
    }
    console.log(this.state.plays_list)
    

    let play_tab_list = [];
    let type1_list = [];
    let type2_list = [];
    let type3_list = [];

    if (this.state.user_info.user_id) {
      for (let index = 0; index < type1.length; index++) {
        type1_list.push(
          <AtTag 
            className='tag-label-button-info'
            name={type1[index]}
            type='primary' 
            active={this.state.temp_type1==type1[index]? true:false} 
            onClick={this.onLabelClick.bind(this, type1[index], 1)}
            >
              {type1[index]}
          </AtTag>
        )
      }

      for (let index = 0; index < type2.length; index++) {
        type2_list.push(
          <AtTag 
            className='tag-label-button-info'
            name={type2[index]}
            type='primary' 
            active={this.state.temp_type2==type2[index]? true:false} 
            onClick={this.onLabelClick.bind(this, type2[index], 2)}
            >
              {type2[index]}
          </AtTag>
        )
      }

      for (let index = 0; index < type3.length; index++) {
        type3_list.push(
          <AtTag 
            className='tag-label-button-info'
            name={type3[index]}
            type='primary' 
            active={this.state.temp_type3==type3[index]? true:false} 
            onClick={this.onLabelClick.bind(this, type3[index], 3)}
            >
              {type3[index]}
          </AtTag>
        )
      }

      this.state.plays_list.map((item, i)=>{

        this.state.plays_list[i]['play_pic'] = item.play_img;

        let maleFemaleDisplay = [];
        if (item.play_male_num == 999 | item.play_female_num == 999){
          maleFemaleDisplay = [];
        } else {
          maleFemaleDisplay.push(
            <View className='play-male-position-info'>
              <image className='gender-icon-info' src={male_icon}></image>
              <text>{item.play_male_num}</text>
            </View>
          )
          maleFemaleDisplay.push(
            <View className='play-female-position-info'>
              <image className='gender-icon-info' src={female_icon}></image>
              <text>{item.play_female_num}</text>
            </View>
          )
        }

        Taro.setStorage({key:`play_id_${item.play_id}`, data:item});
        let main_label = "  ";
        let play_labels_list = item.play_labels.map((label_item, item_idx)=>{
          if (item_idx==0){
            main_label = label_item;
          }
          return(
            <text className='play-label-info'>{label_item}</text>
          )
        })

        let score_list = [];
        for (let index = 0; index < item.play_score; index++) {
          score_list.push(
            <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
          )
        }
        play_tab_list.push(
        <View className='at-row queue-tab-info'>
          <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
            <image className='play-pic-info' src={base+item.play_pic}>
            <text className='play-pic-label-info'>{main_label}</text>
            </image>
          </View>
          <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
            <View className='at-col play-name-position-info'><text style='text-overflow:ellipsis;overflow:hidden;white-space:nowrap;'>{item.play_name}</text></View>
            <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
              <View className='at-col' /* 第一列 有两行*/>
                <View className='play-score-position-info'>难度
                  <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                    {score_list}
                  </View>
                </View>
                <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                  <View className='play-headcount-info'><text decode="{{true}}">{item.play_headcount}人本</text></View>
                  {maleFemaleDisplay}
                </View>
              </View>
              <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                {/* Button  激活与不激活 具体看taroui中的文档*/}
                <AtButton type='primary' circle='true' className='join-button' onClick={this.handleCreateQueue.bind(this, item)}>发车</AtButton>
              </View>
            </View>
            <View className='at-col play-label-position-info'>
              {play_labels_list}
            </View>
          </View>
        </View>
        )
      });

      if (play_tab_list.length == 0) {
        play_tab_list.push(
          <View style='height:auto;width:100vw;'>
            <image src={noResult} style='width:100vw;height:50vh;' ></image>
          </View>
        )
      }
    } else {
      play_tab_list.push(
        <View style='height:auto;width:100vw;' onClick={this.login.bind(this)}>
          <image src={login} style='width:100vw;height:50vh;' ></image>
        </View>
      )
    }


    return (
      <View className='JoinQueueSelectInfo'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack.bind(this)}
              color='#ffff'
              leftIconType='chevron-left'
              ><View style='color:#fff;font-size:18px'>剧本列表</View></AtNavBar>
          <View className='at-col' style='height:150rpx;background-color:#FFFEFFFF;' /* 这里是*/>
            <AtSearchBar
              className='search-bar-info'
              showActionButton
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              onActionClick={this.onActionClick.bind(this)}
              onConfirm={this.onActionClick.bind(this)}
            />
            <View className='at-row' style='margin-top: 2%;margin-bottom: 2%;'>
              <View className='' style='width:15vw;align-items:center;display:flex;justify-content:flex-end;'>
                <AtTag 
                  className='tag-button-info'
                  name='ALL' 
                  type='primary' 
                  active={this.state.tagActiveNum==0? true:false} 
                  circle 
                  onClick={this.onTagClick.bind(this, 0)}>全部</AtTag>
              </View>
              <ScrollView
                className='scrollview'
                style=''
                scrollX
                scrollWithAnimation
                show-scrollbar='false'
                scrollTop={scrollTop}
                style={scrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
                onScroll={this.onScroll}
                >
                <AtTag className='tag-num-button-info'name='4p' type='primary' active={this.state.tagActiveNum==4? true:false} circle onClick={this.onTagClick.bind(this, 4)}>4人</AtTag>
                <AtTag className='tag-num-button-info'name='5p' type='primary' active={this.state.tagActiveNum==5? true:false} circle onClick={this.onTagClick.bind(this, 5)}>5人</AtTag>
                <AtTag className='tag-num-button-info'name='6p' type='primary' active={this.state.tagActiveNum==6? true:false} circle onClick={this.onTagClick.bind(this, 6)}>6人</AtTag>
                <AtTag className='tag-num-button-info'name='7p' type='primary' active={this.state.tagActiveNum==7? true:false} circle onClick={this.onTagClick.bind(this, 7)}>7人</AtTag>
                <AtTag className='tag-num-button-info'name='8p' type='primary' active={this.state.tagActiveNum==8? true:false} circle onClick={this.onTagClick.bind(this, 8)}>8人</AtTag>
                <AtTag className='tag-num-button-info'name='9p' type='primary' active={this.state.tagActiveNum==9? true:false} circle onClick={this.onTagClick.bind(this, 9)}>9人</AtTag>
                <AtTag className='tag-num-button-info'name='10p' type='primary' active={this.state.tagActiveNum==10? true:false} circle onClick={this.onTagClick.bind(this, 10)}>10人</AtTag>
                <AtTag className='tag-num-button-info'name='11p' type='primary' active={this.state.tagActiveNum==11? true:false} circle onClick={this.onTagClick.bind(this, 11)}>11人</AtTag>
                <AtTag className='tag-num-button-info'name='12p' type='primary' active={this.state.tagActiveNum==12? true:false} circle onClick={this.onTagClick.bind(this, 12)}>12人</AtTag>
              </ScrollView>
              <View className='' style='width:10vw;align-items:flex-end;display:flex;justify-content:center;'>
                <image src={selectIcon} style='height:50rpx;width:50rpx;' onClick={this.showSelect.bind(this)}></image>
              </View>
            </View>
            {this.state.showSelected==false? null:
            <View 
              style={{
                width:`100vw`,
                height:`auto`,
                background:`#FDF9F3`,
                display:`flex`,
                alignItems:`center`,
                marginLeft: `30rpx`
                }}>
                {[
                this.state.type1.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.type1} type='primary' circle >{this.state.type1}</AtTag>,
                this.state.type2.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.type2} type='primary' circle >{this.state.type2}</AtTag>,
                this.state.type3.length == 0? null:<AtTag className='tag-label-display-info' name={this.state.type3} type='primary' circle >{this.state.type3}</AtTag>
                ]}
            </View>
            }

            <ScrollView
            className='scrollviewY'
            scrollY
            scrollWithAnimation
            show-scrollbar='false'
            scrollTop={scrollTop}
            style={scrollStyleY}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScrollToLower={this.addPages.bind(this)}
            onScroll={this.onScrollY}
            >
              {play_tab_list}

              <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}

            </ScrollView>
          </View>
        </View>
        <View 
          style={{
            position: `absolute`,
            width:`100vw`,
            height:`auto`,
            background:`#FDF9F3`,
            display:`flex`,
            flexDirection:`column`,
            visibility: this.state.showSelectTab==true? 'visible':'hidden',
            zIndex: 999
            }}>
          <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
            <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
              <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>题材</text>
              <View style='position:absolute;right:50rpx;' onClick={this.hideSelect.bind(this)}>
                <text style='font-size:28rpx;color:#A5A5A5;'>收起</text>
                <AtIcon value='chevron-up' size='18' color='#A5A5A5'></AtIcon>
              </View>
            </View>
            <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
              {type1_list}
            </View>
          </View>
          <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
            <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
              <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>类型</text>
            </View>
            <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
              {type2_list}
            </View>
          </View>
          <View style='width:100vw;height:auto;display:flex;flex-direction:column;'>
            <View style='width:100vw;height:100rpx;display:flex;align-items:center;'>
              <text style='margin-left:30rpx;font-size:40rpx;font-weight:550;'>背景</text>
            </View>
            <View style='width:700rpx;margin-left:50rpx;display:flex;flex-wrap:wrap;'>
              {type3_list}
            </View>
          </View>
          <View style='width:100vw;height:100rpx;display:flex;align-items:center;border: 0rpx solid #A5A5A599;border-top-width:2rpx;'>
            <AtButton type='second' circle='true' className='label-reset-button' onClick={this.resetLabels.bind(this)} >重置</AtButton>
            <AtButton type='primary' circle='true' className='label-confirm-button' onClick={this.confirmLabels.bind(this)}>确定</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
