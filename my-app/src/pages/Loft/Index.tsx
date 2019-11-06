import React from 'react';
import './Index.less';
import { Anchor }  from 'antd'
import VirtualizedSelect from 'react-virtualized-select';
// import 'react-virtualized-select/styles.css';
import Swiper from 'swiper/dist/js/swiper';
import 'swiper/dist/css/swiper.css';
const { Link } = Anchor;

export interface LoftState {
  githubUsers: any;
  selectedGithubUser: any;
  bag: Array<any>;
  classId: number;
  arr: Array<any>;
}
export default class Loft extends React.Component<any, LoftState> {
  state: Readonly<LoftState> = {
    githubUsers: [],
    selectedGithubUser: {},
    bag: [
      {
        img: 'https://test.cdn.sunmi.com/IMG/154780678339675c41a83f60e07.jpg',
        title: '第一屏'
      },{
        img: 'https://pic.cdn.sunmi.com/IMG/152777530938275b10004d5d718.jpg',
        title: '第二屏'
      },{
        img: 'https://test.cdn.sunmi.com/IMG/156205496153045d1b113181847.jpg',
        title: '第三屏'
      }
    ],
    classId: 0,
    arr: []
  }
  constructor(props: any){
    super(props);
  }
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      on:{
        lazyImageLoad: function(slideEl){
          slideEl.setAttribute('data-loaded', 'true')
        }
      },
      lazy: {
        loadPrevNext: true
      },
      preloadImages: false,
      slidesPerView: 1,
      loop: true,
      speed: 777,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  render(){
    let style = { backgroundImage: ''}
    return (
      <div className="container">
        <Anchor className="navbar">
          <Link href="#aliceblue" title="智能硬件" />
          <Link href="#antiquewhite" title="精选软件" />
          <Link href="#lavenderblush" title="解决方案"/>
          <Link href="#" title="回到顶部"/>
        </Anchor>
        <div className="anchorContent">
          <div id="aliceblue" className="aliceblue">智能硬件</div>   
          <div id="antiquewhite" className="antiquewhite">精选软件</div>
          <div id="lavenderblush" className="lavenderblush">解决方案</div>
        </div>
        <div>
          <div>VirtualizedSelect-异步请求数据</div>
          <VirtualizedSelect
            multi
            async
            backspaceRemoves={false}
            labelKey='login'
            loadOptions={this.loadGithubUsers}
            onChange={(selectedGithubUser) => this.setState({ selectedGithubUser })}
            onValueClick={this._goToGithubUser}
            options={this.state.githubUsers}
            value={this.state.selectedGithubUser}
            valueKey='id'
          />
        </div>
        <div className='swiper-box'>
          <div className="swiper-button-prev swiper-button-white swiper-button"></div>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              {
                  this.state.bag.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
                      style.backgroundImage = `url(${item.img})`
                      return(                                    
                        <div 
                          key={index} 
                          className="swiper-slide swiper-lazy"
                        >
                          <img src={item.img} alt=""/>
                        </div>
                      )
                  })
              }
            </div>
          </div>
          <div className="swiper-button-next swiper-button-white swiper-button"></div>
        </div>
      </div>
    )
  }
  loadGithubUsers = (key: any) => {
    return fetch(`https://api.github.com/search/users?q=${key}`)
      .then((response) => response.json())
      .then((json) => {
        const githubUsers = json.items

        this.setState({ githubUsers })

        return { options: githubUsers }
      })
  }
  _goToGithubUser (value: any) {
    window.open(value.html_url)
  }
}