import ajax from './ajax'

//获取值得买瀑布流数据
//https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=5
export function reqBuyDataList(page=1,size=5) {
    return ajax({
      method: 'GET',
      url: '/topic/v1/find/recAuto.json',
      params:{
        page,
        size
      }
    })
}