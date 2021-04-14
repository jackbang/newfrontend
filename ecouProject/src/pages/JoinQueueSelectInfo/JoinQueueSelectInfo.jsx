import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtButton, AtSearchBar, AtNavBar, AtTag} from 'taro-ui'

import './JoinQueueSelectInfo.scss'

import play_pic from '../../img/play_pic.jpg'
import male_icon from '../../img/male.png'
import female_icon from '../../img/female.png'
import scoreActive from '../../img/scoreActive.png'

export default class Joinqueueselectinfo extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      tagActiveNum: 0
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

  onChange (value) {
    this.setState({
      value: value
    })
  }

  handleNavBack(){
    Taro.reLaunch({url: '../StoreInfo/StoreInfo'})
  }

  onActionClick () {
    console.log('开始搜索')
  }

  onTagClick (active){
    console.log(active)
    this.setState({
      tagActiveNum: active
    })
  }

  render () {
    Taro.hideTabBar();

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

    return (
      <View className='JoinQueueSelectInfo'>
        <View className='at-col' style={{padding: `${top_height}px 0px 0px 0px`}}>
          <AtNavBar className='nav-bar-info'
              onClickLeftIcon={this.handleNavBack}
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
            />
            <View className='at-row' style='margin-top: 2%;margin-bottom: 2%;'>
              <View className='' style='width:15vw;align-items:flex-end;display:flex;justify-content:flex-end;'>
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
                o
              </View>
            </View>

            <ScrollView
            className='scrollviewY'
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollStyleY}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            onScrollToUpper={this.onScrollToUpperY.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScrollY}
            >
              <View className='at-row queue-tab-info'>
                <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                  <image className='play-pic-info' src={play_pic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                    <View className='at-col' /* 第一列 有两行*/>
                      <View className='play-score-position-info'>难度
                        <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                        </View>
                      </View>
                      <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                        <View className='play-headcount-info'><text decode="{{true}}">7人本</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={male_icon}></image>
                          <text>4</text>
                        </View>

                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={female_icon}></image>
                          <text>3</text>
                        </View>

                      </View>
                    </View>
                    <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                      {/* Button  激活与不激活 具体看taroui中的文档*/}
                      <AtButton type='primary' circle='true' className='join-button'>发车</AtButton>
                    </View>
                  </View>
                  <View className='at-col play-label-position-info'>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>现代</text>
                    <text className='play-label-info'>硬核</text>
                  </View>
                </View>
              </View>

              <View className='at-row queue-tab-info'>
                <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                  <image className='play-pic-info' src={play_pic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                    <View className='at-col' /* 第一列 有两行*/>
                      <View className='play-score-position-info'>难度
                        <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                        </View>
                      </View>
                      <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                        <View className='play-headcount-info'><text decode="{{true}}">7人本</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={male_icon}></image>
                          <text>4</text>
                        </View>

                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={female_icon}></image>
                          <text>3</text>
                        </View>

                      </View>
                    </View>
                    <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                      {/* Button  激活与不激活 具体看taroui中的文档*/}
                      <AtButton type='primary' circle='true' className='join-button'>发车</AtButton>
                    </View>
                  </View>
                  <View className='at-col play-label-position-info'>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>现代</text>
                    <text className='play-label-info'>硬核</text>
                  </View>
                </View>
              </View>

              <View className='at-row queue-tab-info'>
                <View className='at-row play-pic-position-info' style='width:21vw' /* 这里写的是 每个tab上剧本图片的位置*/>
                  <image className='play-pic-info' src={play_pic}>
                  <text className='play-pic-label-info'>本格</text>
                  </image>
                </View>
                <View className='at-col play-intro-info' /*这里的信息是每个tab上 剧本的一些文字信息 */>
                  <View className='at-col play-name-position-info'>木兮僧之戏</View>
                  <View className='at-row' /* =- 这一部分是这样，两列，第一列有两行文字，第二列用来放按钮 */>
                    <View className='at-col' /* 第一列 有两行*/>
                      <View className='play-score-position-info'>难度
                        <View style='display:flex;align-items:flex-end;padding-left:3%;position:relative;bottom:0%'>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-0px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-3px;'></image>
                          <image src={scoreActive} className='play-score-pic-info' style='position:relative;left:-6px;'></image>
                        </View>
                      </View>
                      <View className='at-row play-headcount-position-info' /* 这一部分有三列 */>
                        <View className='play-headcount-info'><text decode="{{true}}">7人本</text></View>
                        <View className='play-male-position-info'>
                          <image className='gender-icon-info' src={male_icon}></image>
                          <text>4</text>
                        </View>

                        <View className='play-female-position-info'>
                          <image className='gender-icon-info' src={female_icon}></image>
                          <text>3</text>
                        </View>

                      </View>
                    </View>
                    <View className='at-row' style='width:20vw' /*第二列是用来放按钮 */>
                      {/* Button  激活与不激活 具体看taroui中的文档*/}
                      <AtButton type='primary' circle='true' className='join-button'>发车</AtButton>
                    </View>
                  </View>
                  <View className='at-col play-label-position-info'>
                    <text className='play-label-info'>本格</text>
                    <text className='play-label-info'>现代</text>
                    <text className='play-label-info'>硬核</text>
                  </View>
                </View>
              </View>

              <View className='at-row queue-tab-info'>
              </View>

              <View className='at-row queue-tab-info'>
              </View>

              <View className='at-row queue-tab-info'>
              </View>

              <View className='at-row queue-tab-info'>
              </View>

              <View className='at-row tab-blank'></View> {/*切记，每个AtTabsPane最下面要加一小条空白，否则阴影部分显示不全，会很难看 */}

            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
