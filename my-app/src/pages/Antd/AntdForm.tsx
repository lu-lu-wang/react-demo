import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd'
const FormItem = Form.Item;
import { FormComponentProps } from 'antd/lib/form/Form';

function onFieldsChange(props: any, fields: any) {
  props.onChange(fields);
}
function mapPropsToFields(props: any){
  console.log('props', props.value);
  return {
    value: props.value
  }
}
interface formType {
  name: string;
  age: number;
}
interface Props extends FormComponentProps {
  value: any;
  saveInfo: (params: formType) => void;
  onChange: (data: formType) => void;
}
class AntdForm extends React.Component<Props>{
  node: any
  checkAge = (rule: any, value: any, callback:(value?: any)=>void) => {
    const number = parseInt(value || 0, 10);
    if(Number.isNaN(value)){
      callback('请输入数字');
      return; 
    }
    callback()
  }
  componentDidMount(){
    // console.log('this.ref', this.node.getBoundingClientRect())
    // window.addEventListener('resize', (e) => {
    //   if (window.innerWidth < 1280) {
    //     // const [left2, left1, ceter, right1, right2] = this.state.locate;
    //     this.setState({
    //       locate: this.locateTurn5(this.state.current),
    //       size: 'mini',
    //     })
    //   }
    //   if (window.innerWidth > 1280) {
    //     // const [left2, left1, ceter, right1, right2] = this.state.locate;
    //     this.setState({
    //       locate: this.locateTurn5(this.state.current),
    //       size: 'normal',
    //     })
    //   }
    // })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const nameItem = getFieldDecorator('name', {rules: [{len: 24, required: true}]})(<Input style={{width: '300px'}} placeholder="请输入姓名"/>)
    return (
      <div 
        style={{margin: '50px'}}
      >
        {/* <div style={{ position: 'relative', height: 100, width: 100, background: '#ddd' }}>
          <div style={{ position: 'sticky', color: 'red', top: 0}}>我是内容</div>
        </div> */}
        <div 
          style={{ width: 200, height: 200, border: '1px solid #ddd', float: 'right'}} 
          ref={(element) => this.node = element}
        >
          <div style={{ color: '#ff6900'}}>
            我是内容呀
          </div>
        </div>
        <div>
        <FormItem label="姓名" colon={false}>
          {nameItem}
          {/* {
            getFieldDecorator('name', { 
              initialValue: '', 
              rules:[{ min: 1, max: 24, message: '请输入正确的名字', required: true }]}
              )
            (
              <Input style={{width: '300px'}} placeholder="请输入姓名"/>
            )
          } */}
        </FormItem>
        <FormItem label="年龄" colon={false}>
          {
            getFieldDecorator('age', {
              rules: [
                { required: true, message: '请输入年龄'}, 
                { validator: this.checkAge }
              ]
            })(
              <InputNumber 
                style={{width: '200px'}} 
                placeholder="请输入年龄" 
                min={1}
                maxLength={3}
                // formatter={(value: any) => `${value.toString().replace(/\D/g, '')}`}
              />
            )
          }
        </FormItem>
        <FormItem label="手机号" colon={false} required={true} help="长度1~11" hasFeedback={true} extra={true}>
          <Input placeholder="请输入手机号"/>
        </FormItem>
        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
          Clear
        </Button>
        <Button onClick={this.submit}>提交</Button>
        </div>
      </div>
    )
  }
  submit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.saveInfo(values);
      }
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
  };
}
export default Form.create({ onFieldsChange, mapPropsToFields })(AntdForm);