import React from 'react';
import './Index.less';
import { Anchor }  from 'antd'
import VirtualizedSelect from 'react-virtualized-select';
// import 'react-virtualized-select/styles.css';
const { Link } = Anchor;

export interface LoftState {
  githubUsers: any;
  selectedGithubUser: any;
}
export default class Loft extends React.Component<any, LoftState> {
  state: Readonly<LoftState> = {
    githubUsers: [],
    selectedGithubUser: {}
  }
  constructor(props: any){
    super(props);
  }
  render(){
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