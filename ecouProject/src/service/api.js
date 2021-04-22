import { render } from '_@tarojs_taro@3.2.1@@tarojs/taro';
import request from './request'

export const test_store_info = (store_id) => {
    let url = '/test/stores/'+store_id;
    return request.get(url, '');
}

export const test_get_pic = (pic_url) => {
    let url = pic_url;
    return request.get(url, '');
}