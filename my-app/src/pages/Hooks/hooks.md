## React Hooks(V16.8版本)
参考 [react hooks](https://www.jianshu.com/p/126cec2f6699)
###为什么使用Hooks？
* 当我们定义的一个组件只用到一两个state状态变量
* 一个组件只用到了生命周期某一个方法例如componentDidMount、componentDidUpdate,componentWillUnMount
> 为了解决上述问题，我们需要定义一个class component,来达到我们的目的，看起来代码会很冗余。而hookd就是帮我们解决这些问题，让我们可以抛弃class component拥抱function component。使代码看起来更清晰，整洁。

1. useEffect做了什么？
> 通过使用这个Hook,通过React组件需要在渲染后执行什么操作。React将记住传递的function(该function为effect)，并在执行DOM更新后调用这个function。（组件加载的时候需要运行某些函数，异步请求）

```
import { useState, useEffect } from 'react'
import axios from 'axios'

function Example(){
  const [data, setData] = useState([]);
  function getItem(){
    axios.post('请求url')
    .then(res=>{setData(res.data)})
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getItem()
  },[])
  // ......
}
```
**我们发现使用useEffect时，里面的函数被无限循环调用了，和我们之前想的初始化只调用一次相悖。**
改造后
```
function Example(){
  const [data, setData] = useState([])
  const [params, setParams] = useState({})
  useEffect(()=>{
  function getItem(){
    axios
    .post('url', params)
    .then(res => {
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }
  getItem()
},[params,setData])
}
```
> 将useEffect所依赖的函数放在useEffect里面，让useEffect变得自给自足，这样我们减少了很多不可控因素，方法里面所有的依赖项都是可见可控的。
2. 为什么在组件内调用useEffect?
> 在组件内使用useEffect是可以直接从副作用中访问计数器的count或者任何props。不需要使用特殊的API来读取，它已经在函数的范围内了（通过useState）。Hooks拥抱js的闭包，并且避免在js已经提供解决方案下去引入特定的React API。
3. 每次render之后都会执行useEffect么？
是的！
这是默认行为，第一次render之后和每次update之后都会运行。你可能认为副作用发生在render之后，而不是发生在mount和update之后，不过React保证DOM在运行时副作用就已经更新。（[网络请求需定制useEffect默认执行行为](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)）
3. 详细代码拆分说明
```
import React, { useState } from 'react'
function Example() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = count
  })
}
```
> 通过useState声明了count state变量，并且通知React需要使用effect。然后把一个function传递给useEffect Hook,而传递的这个function就是副作用。
### Tip
与componentDidMount和componentDidUpdate不同，使用useEffect调度的副作用不会阻塞浏览器更新屏幕。

## 清除订阅（副作用）
1. class组件在react的componentUnmount生命周期取消订阅unsubscribeFromFriendStatus
2. 使用Hook示例

```
import { useEffect, useState } from 'react'
function FriendStatus(props){
  const [isOnline, setIsOnline] = useState(null)
  function handleStatusChange(status){
    setlsOnline(status.isOnline)
  }
  useEffect(()=>{
    ChatAPI.subscribeToFriendStatus(props.frind.id, handleStatusChange)
    return function cleanup(){
      ChatAPI.unsubscribeFromFriendStatus(props.frind.id, handleStatusChange)
    }
  })
  if(isOnline === null){
    return 'loading...'
  }
  return isOnline ? 'online':'offline'
}
```
4. 假如一个组件有多个状态值怎么办？
useState多次调用

```
function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{text: 'Learn Hooks'}])
  // 等同于(仅仅是解构的过程)
  const [data, setData] = useState({age:20,fruit:'banana', todos:[{text: 'Learn Hooks'}]})
}
```
其次，useState接收的初始值没有规定一定要是某种简单类型，它可接收对象或者数组作为参数。要注意的是，之前我们的this.setState是做合并状态后返回一个新状态，而useState是直接替换老状态返回新状态。从该函数可看出，useState无论调用多少次，相互间都是独立的。
> 我们的hooks有些类似于Minxins，都是提供一种‘插拔式功能注入’能力，而mixins之所以被否定，是因为Mixins机制是让多个Mixins共享一个对象的数据空间，这样很难保证不同Mixins依赖的状态不发生冲突。而我们的hook，一方面它是直接用在function中，而不是class；另一方面每一个hook都是相互独立的，不同组件调用同一个hook也能保证各自状态的独立性。

5. react是怎么保证多个useState相互独立？
react是按顺序调用并赋值的。基于此react规定我们必须把hooks写在函数的最外层，不能写在ifelse等条件语句中，来保证hooks的执行顺序一致。

## **总结：使用Hooks的优点：**
1. 可以让我们放弃class component，拥抱function component
2. 可以在function component使用状态且是独立的状态，可以独立维护
3. 对于组件可以单独重构，不需全部重构
4. 使状态与UI分离
5. 然我们的代码更加有调理、清晰、简洁
