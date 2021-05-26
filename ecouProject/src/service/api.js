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

export const test_queue_players_info = (queue_id) => {
    let url = `/test/queues/${queue_id}/players`
    return request.get(url, '')
}

export const test_get_phonenum_info = (phone_data) => {
    let url = '/test/getPhoneNum'
    return request.post(url, phone_data, 'application/json')
}

export const test_join_queue = (player_data) => {
    let url = '/test/joinQueue'
    return request.post(url, player_data, 'application/json')
}

export const test_get_history_queues = (user_data) => {
    let url = '/test/queueHistory'
    return request.post(url, user_data, 'application/json')
}

export const test_get_mine_history_queues = (user_data) => {
    let url = '/test/mineQueueHistory'
    return request.post(url, user_data, 'application/json')
}

export const test_create_queue = (form_data) => {
    let url = '/test/createQueue'
    return request.post(url, form_data, 'application/json')
}

export const test_store_plays_search = (body, params) => {
    let url = `/test/store/search?`+params
    return request.get(url, body)
}

export const test_store_queues_search = (body, params) => {
    let url = `/test/queue/search?`+params
    return request.get(url, body)
}
