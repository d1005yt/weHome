import ajax from './ajax'

//获取短信部分数据
//https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5
export function reqSMSInfo(_) {
    return ajax({
      method: 'GET',
      url: '/SMSPage',
      params:{
        _
      }
    })
}

//发送短信
export function reqSendSMS(phoneNo,templateParam,signName,templateCode) {
  return ajax({
    method: 'POST',
    url: '/sendSMS',
    data:{
      phoneNo,
      templateParam,
      signName,
      templateCode
    }
  })
}