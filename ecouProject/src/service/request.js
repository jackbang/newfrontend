import Taro from '@tarojs/taro'
import { FAIL, HTTP_STATUS } from '../const/status'
import { base } from './config'

const token = ''

export default {
    baseOptions(params, method) {
        let { url, data } = params
        // let token = getApp().globalData.token
        // if (!token) login()
        let contentType = 'application/json'
        contentType = params.contentType || contentType;
        const option = {
            isShowLoading: false,
            loadingText: '正在加载',
            url: base + url,
            data: data,
            method: method,
            dataType: "json",
            header: { 'content-type': contentType },
            success(res) {
                if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
                    return Promise.reject({ desc: '请求资源不存在' })
                } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
                    return Promise.reject({ desc: "服务端出现了问题" })
                } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
                    return Promise.reject({ desc: "没有权限访问" });
                } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
                    console.log(res.data)
                    return res.data
                }
            },
            fail(res) {
                console.log('HTTP request failed!')
            }
        }
        console.log('options: ', option)
        return Taro.request(option)
    },
    get(url, data) {
        let option = { url, data }
        return this.baseOptions(option, 'GET')
    },
    post(url, data, contentType) {
        let params = { url, data, contentType };
        return this.baseOptions(params, "POST")
    }
}