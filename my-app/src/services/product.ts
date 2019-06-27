import request from "../lib/request";

// 商品信息
export function getProduct(params?: any){
  const param = { "dId": "9d4361e2d8d4c75fb4522f5287ae9413","pageIndex": 1,"pageCount": 12,"category_id": "","origin": "1","channel": "1" }
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

// 地址管理
export function addressList(){
  const params = {"dId":"9d4361e2d8d4c75fb4522f5287ae9413","origin":"3","channel":"1","pageIndex":1,"pageCount":10}
  const opts = {
    method: 'POST',
    body: {
      ...params
    }
  }
  return request('https://test.webapi.sunmi.com/webapi/misun/web/partners/1.0/?service=Region.getAddressList', opts)
}
// 删除地址
export function deleteAddress(id?: string){
  const params = {"dId":"9d4361e2d8d4c75fb4522f5287ae9413","addrId":"1517","origin":"1","channel":"1"}
  const opts = {
    method: 'POST',
    body: {
      ...params,
      addrId: id
    }
  }
  return request('http://test.webapi.sunmi.com/webapi/misun/web/partners/1.0/?service=Region.deleteAddress', opts)
}