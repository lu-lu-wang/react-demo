import React from 'react';
import history from '../../app/history'
import './Array.less'
import _ from 'lodash';

export default class Lodash extends React.Component{
  render (){
    return (
      <div className="contentLodash">
        <div>
        <div>Array方法</div>
          <div><p>1) _.chunk(array,[size=1])<br/>
            将数组拆分成多个size长度的区块，
            并将这些区块组成一个新数组。
            如果Array无法被分割成全部等长的区块，
            那么剩余的元素将组成一个区块。
          </p>
          例子：_.chunk(arr1, 3)
          <p>{this.renderChunk()}</p>
          </div>
        </div>
        <div>
          <p>2) _.compact(array)<br/>创建一个新数组，包含原数组中所有非假值元素，例如false,null,undefined...这些被认为是假值的元素。</p>
          例子：_.compact(arr2)
          <p>{this.renderCompact()}</p>
        </div>
        <div>
          <p>3) _.concat(array,values)<br/>创建一个新数组，将array与任何数组或值连接在一起</p>
          例子：_.concat(array,2,[3],[4])
          <p>{this.renderConcat()}</p>
        </div>
        <div>
          <p>4) _.difference(array,[values])<br/>
          array:要检查的数组，values: 要排除的值
          创建一个具有唯一array值的数组，每个值不包含在其他给定数组中。
          （即创建一个新数组，这个数组中的值，为第一个数字（array参数）排除了给定数组中的值）结果值的顺序是由第一个数组中的顺序确定。</p>
          例子：_.difference([1,2,3],[2,4])
          <p>{this.renderDifference()}</p>
        </div>
        <div>
          <p>5) _.drop(array,[n=1])<br/>
          创建一个切片数组，去除array前面的n个元素
          </p>
          例子： _.drop([1,2,5],2)
          <p>{this.renderDrop()}</p>
        </div>
        <div>
          <p>6) _.dropRight(array,[n=1])<br/>
            创建一个切片数组，去除array尾部的n个元素
          </p>
          例子：_dropRight([1,2,4],2)
          <p>{this.renderDropRight()}</p>
        </div>
        <div>
          <p>7) _.fill(array,values,[start=0],[end=array.length])<br/>
          使用value值来填充（替换）array，从start位置开始，到end位置结束（但不包含end位置）[注意：此方法会修改原array]</p>
          例子： _.fill([1,2,3],'*')
          <p>{this.renderFill()}</p>
        </div>
        <div>
          <p>8) _.findIndex(array,[predicate=_.identity], [fromIndex=0])<br/>
            该方法通过predicate判断为真时的索引值，否则为-1
          </p>
          例子：_.findIndex([1,2,3],(o)=>o===1) 
          <p>{this.renderFindIndex()}</p>
        </div>
        <div>
          <p>9) _.flatten(array)<br/>
          减少一级array嵌套深度</p>
          例子： _flatten([1,[2,[3]]])
          <p>{this.renderFlatten()}</p>
        </div>
        <div>
          <p>10) _.flattenDeep(array)<br/>
          将array递归为一维数组
          </p>
          例子：_.flattenDeep([1, [2, [3, [4]], 5]])
          <p>{this.renderFlattenDeep()}</p> 
        </div>
        <div>
          <p>11) _.indexOf(array,value, [fromIndex=0])<br/>
          返回首次value在数组中被找到的索引值，如果fromIndex为负值，将从数组array尾端索引进行匹配。
          </p>
          例子：_.indexOf([1,2,3,1],1,2)
          <p>{this.renderIndexOf()}</p>
        </div>
        <div>
          <p>12) _.initial(array)<br/>
          获取数组array中除了最后一个元素外的所有元素（去除数组中的最后一个元素）
          </p>
          例子：_.initial([1,2,3])
          <p>{this.renderInitial()}</p>
        </div>
        <div>
          <p>13) _.intersection([arrays])<br/>
          创建唯一值得数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较
          </p>
          例子： _.intersection([2,1],[3,2],[4,2])
          <p>{this.renderIntersection()}</p>
        </div>
        <div>
          <p>14) _.intersectionBy([arrays],[iteratee=_.identity])<br/>
          这个方法类似_.intersection,区别是它接收一个iteratee调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。
          </p>
          例子：_.intersectionBy([2.1, 1.2],[4.3, 2.4],Math.floor)
          <p>{this.renderIntersectionBy()}</p>
        </div>
        <div>
          <p>15) _.join(array,[separator=','])<br/>
          将array中的所有元素转换为由separator分割的字符串
          </p>
          例子：_.join(['a','b','c'],'~')
          <p>{this.renderJoin()}</p>
        </div>
        <div>
          <p>15) _.last(array)<br/>
          获取array中的最后一个元素
          </p>
          例子：_.last([1,2,3])
          <p>{this.renderLast()}</p>
        </div>
        <div>
          <p>16) _.nth(array,[n=0])<br/>
          获取数组array的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
          </p>
          例子：_.nth(['a','b','c'],2)
          <p>{this.renderNth()}</p>
        </div>
        <div>
          <p>17) _.pull(array,[values])<br/>
          移除数组array中所有和给定值相等的元素，使用SameValueZero进行全等比较
          </p>
          例子： _.pull([1,2,3,3,2,1],2,3)
          <p>{this.renderPull()}</p>
        </div>
        <div>
          <p>18) _.pullAll(array,values)<br/>
          该方法接收一个要移除值的数组</p>
          例子：_.pullAll([1,2,3,3,2,1],[2,3])
          <p>{this.renderPullAll()}</p>
        </div>
        <div>
          <p>19) _.pullAt(array, [indexes])<br/>
          根据索引indexes，移除array中对应的元素，并返回被移除元素的数组。</p>
          例子：_.pullAt([1,2,3,4,5],1,3)
          <p>{this.renderPullAt()}</p>
        </div>
        <button onClick={this.goIndex}>返回</button>
      </div>
    )
  }
  goIndex = () => {
    history.push('./lodash')
  }
  renderChunk = () => {
    const arr1 = ['a','b','c','d']
    const chunkArr = _.chunk(arr1, 3).join('、');
    // [["a", "b", "c"],['d']]
    console.log(chunkArr)
    return chunkArr;
  }
  renderCompact = () => {
    const arr2 = ['','1',null,'2',false]
    const comArr = _.compact(arr2).join('、')
    // ['1','2']
    return comArr;
  }
  renderConcat = () => {
    const array = [1]
    const other = _.concat(array,2,[3],[4]).join('、');
    return other;
  }
  renderDifference = () => {
    const targetArr = [1,2,3]
    const excludeValue = [2,4]
    return _.difference(targetArr,excludeValue).join('、')
  }
  renderDrop = () => {
    const arr = [1,2,5]
    return _.drop(arr,2)
  }
  renderDropRight = () => {
    const right = [1,2,4]
    return _.dropRight(right, 2).join(' ')
  }
  renderFill = () => {
    const fill = [1,2,3]
    const defaultFill = _.fill(fill,'*').join(' ')
    const fillArray = _.fill([1,2,3,4,5], '*', 1, 3).join(' ')
    const phone = ('13023138681').split('');
    const phoneFormat = _.fill(phone,'*',3,7).join('')
    return `default: ${defaultFill} --fillArray--: ${fillArray} --phone--:${phoneFormat}`
  }
  renderFindIndex = () => {
    const users = [
      {'name':'wanglu','active': false},
      {'name': 'zaizai','active': false},
      {'name': 'zhanghao','active': true} 
    ]
    const indexActive = _.findIndex(users, (item)=> item.active);
    const numIndex = _.findIndex([1,2,3],(o)=>o===1) 
    return `${numIndex} name: ${indexActive}`
  }
  renderFlatten = () =>{
    return _.flatten([1,[2,[3]]]);
  }
  renderFlattenDeep = () =>{
    return _.flattenDeep([1,[2,[3,[4]],5]]).join(' ');
  }
  renderIndexOf = () =>{
    return _.indexOf([1,2,3,1],1,2);
  }
  renderInitial = () =>{
    return _.initial([1,2,3]).join(' ')
  }
  renderIntersection = () =>{
    return _.intersection([2,1],[3,2],[4,2])
  }
  renderIntersectionBy = ()=>{
    return _.intersectionBy([2.1, 1.2],[4.3,2.4],Math.floor);
  }
  renderJoin = ()=>{
    return _.join(['a','b','c'],'~')
  }
  renderLast = ()=>{
    return _.last([1,2,3])
  }
  renderNth = ()=>{
    return _.nth(['a','b','c'],2)
  }
  renderPull = ()=>{
    return _.pull([1,2,3,3,2,1],2,3).join(' ')
  }
  renderPullAll =()=>{
    return _.pullAll([1,2,3,3,2,1],[2,3]).join(' ')
  }
  renderPullAt = () =>{
    return _.pullAt([1,2,3,4,5],1,3).join(' ')
  }
}