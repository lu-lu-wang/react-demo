import React from 'react';
import { Button, Form, Input, InputNumber, Select, DatePicker } from 'antd';
const FormItem = Form.Item;
import { FormComponentProps } from 'antd/lib/form/Form';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { RangePicker } = DatePicker;

function range(start, end) {
  const result: Array<number> = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

function onFieldsChange(props: any, fields: any) {
  props.onChange(fields);
}
function mapPropsToFields(props: any) {
  console.log('props', props.value);
  return {
    value: props.value,
  };
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
class AntdForm extends React.Component<Props> {
  node: any;
  checkAge = (rule: any, value: any, callback: (value?: any) => void) => {
    const number = parseInt(value || 0, 10);
    if (Number.isNaN(value)) {
      callback('请输入数字');
      return;
    }
    callback();
  };
  componentDidMount() {
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const nameItem = getFieldDecorator('name', {
      rules: [{ len: 24, required: true }],
    })(<Input style={{ width: '300px' }} placeholder="请输入姓名" />);
    return (
      <div style={{ margin: '50px' }}>
        {/* <div style={{ position: 'relative', height: 100, width: 100, background: '#ddd' }}>
          <div style={{ position: 'sticky', color: 'red', top: 0}}>我是内容</div>
        </div> */}
        {/* <div 
          style={{ width: 200, height: 200, border: '1px solid #ddd', float: 'right'}} 
          ref={(element) => this.node = element}
        >
          <div style={{ color: '#ff6900'}}>
            我是内容呀
          </div>
        </div> */}
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
            {getFieldDecorator('age', {
              rules: [{ required: true, message: '请输入年龄' }, { validator: this.checkAge }],
            })(
              <InputNumber
                style={{ width: '200px' }}
                placeholder="请输入年龄"
                min={1}
                maxLength={3}
                // formatter={(value: any) => `${value.toString().replace(/\D/g, '')}`}
              />
            )}
          </FormItem>
          <FormItem label="选择日期" colon={false} required={true} help="指定日期">
            <RangePicker
              style={{ width: 'auto' }}
              disabledDate={disabledDate}
              disabledTime={disabledRangeTime}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
              }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </FormItem>
          <FormItem label="手机号" colon={false} required={true} help="长度1~11" hasFeedback={true} extra={true}>
            <Input placeholder="请输入手机号" />
          </FormItem>
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
            Clear
          </Button>
          <Button onClick={this.submit}>提交</Button>
        </div>
      </div>
    );
  }
  submit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.saveInfo(values);
      }
    });
  };
  handleReset = () => {
    this.props.form.resetFields();
  };
}
export default Form.create({ onFieldsChange, mapPropsToFields })(AntdForm);
