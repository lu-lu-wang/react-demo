import React from 'react'
import AntdTable from './AntdTable'
import AntdForm from './AntdForm'
import Demo from './Demo';
import _ from 'lodash';
export default class Antd extends React.Component{
  get formData(){
    return {
      name: 'haha',
      age: 20
    }
  }
  render() {
    // scheme_id: {value: "1"}
    return (
      <div>
        <AntdForm 
          value={_.mapValues(this.formData, (value: any)=>({ value }))} 
          saveInfo={this.saveInfo}
          onChange={this.handleChange}
          // value={this.formData}
        />
        <AntdTable/>
        <Demo/>
      </div>
    )
  }
  saveInfo = (params: any) => {
  }
  handleChange = (formParams: any) => {
    console.log('onChange', formParams)
  }
}