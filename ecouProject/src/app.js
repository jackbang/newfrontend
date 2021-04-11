import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.scss'
import {setGlobalData} from "./globaldata"

class App extends Component {

  onLaunch () {}
  
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
