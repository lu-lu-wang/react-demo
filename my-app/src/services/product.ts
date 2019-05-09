import request from "../lib/request";

// 商品信息
export function getProduct(params?: any){
  const param = { "dId": "","pageIndex": 1,"pageCount": 12,"category_id": "","origin": "1","channel": "1" }
  const opts = {
    method: 'POST',
    body: {
      ...param
    }
  }
  return request('http://test.webapi.sunmi.com/webapi/misun/web/partners/1.0/?service=Goods.getPartInfo', opts)
}
// http://test.webapi.sunmi.com/webapi/misun/web/manage/1.0/?service=Finance.confirmOrderDetail
// {"adminId":"d42398ec9b28c6157b27c50a7503ce4e","confirm_id":"68"}