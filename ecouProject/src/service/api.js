import { render } from '_@tarojs_taro@3.2.1@@tarojs/taro';
import request from './request'

export const test_queue_info = (store_id) => {
    let url = '/test/stores/' + store_id + '/queues/';
    return request.get(url, '');
}

export const test_store_info = (store_id) => {
    let url = '/test/stores/' + store_id;
    return request.get(url, '');
}

export const test_get_pic = (pic_url) => {
    let url = pic_url;
    return request.get(url, '');
}

export const test_search_plays = (store_id, search_content) => {
    let url = '/test/stores/' + store_id + '/plays?title=' + search_content
    return request.get(url, '');
}

export const test_wechat_login = (user_data) => {
    //let url = `/test/onlogin?code=${code_data}`
    let url = '/test/onlogin'
    return request.post(url, user_data, 'application/json')
}