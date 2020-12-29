import ajax from './ajax'

//获取数据部分数据
export function reqSMSInfo() {
    return ajax({
      method: 'GET',
      url: '/getData.json',
    })
}

//发送短信
export function reqSendSMS(data) {
  return ajax({
    method: 'POST',
    url: '/sendSMS',
    data
  })
}