import React from 'react'

interface ImageLazyProps {
  realUrl: string,
  offSetTop: number,
  initUrl: string
}
interface ImageLazyState {
  isLoading: boolean,
  imgLoad: boolean
}
export class ImageLazy extends React.Component<ImageLazyProps, ImageLazyState>{
  imgLazyLoad?: any
  state: Readonly<ImageLazyState> = {
    isLoading: false,
    imgLoad: false
  }
  constructor(props: ImageLazyProps){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll () {
    if(!this.state.isLoading){
      const { offSetTop, realUrl } = this.props;
      const visibleBottom = window.scrollY + document.documentElement.clientHeight - offSetTop;
      const imgTop = this.imgLazyLoad.offsetTop
      console.log('this.imgLazyLoad.offsetTop', this.imgLazyLoad.offsetTop)
      if(imgTop < visibleBottom){
        const imgObj = new Image()
        imgObj.src = realUrl
        this.setState({isLoading: true})
        new Promise((resolve,reject)=>{
          imgObj.onload = ()=>{
            resolve(imgObj)
          }
        }).then((imgObj)=>{
          this.setState({ imgLoad: true })
        })
      }
    } else {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
  render(){
    const { imgLoad } = this.state
    const {realUrl, initUrl} = this.props
    const imgSrc = imgLoad? realUrl : initUrl
    return (
      <div>
        <img 
          ref={(element)=> this.imgLazyLoad = element} 
          src={imgSrc} 
          alt="imgLazyLoad"
          className={imgLoad ? 'imgLazyload loadEnd': 'imgLazyload loading'}
        />
      </div>
    )
  }
}