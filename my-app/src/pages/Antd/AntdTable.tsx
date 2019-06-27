import React from 'react'
import { Table, Button } from 'antd'
import { productData } from './config'
import _ from 'lodash';
import './AntdTable.less'

interface AntdTableState {
  data: any,
  count: number
}
export interface renderContentProps {
  children: any
  props: any
}
export default class AntdTable extends React.Component<any, AntdTableState>{
  state: Readonly<AntdTableState> = {
    data: [],
    count: 0
  }
  componentWillMount(){
    this.getData()
  }
  // {
  //   key: '3',
  //   imgSrc: 'https://test.cdn.sunmi.com/IMG/153086856517925b3f33552bc2e.png',
  //   title: 'D2',
  //   spec: '标准版',
  //   unit: '台',
  //   code: '2019060320292',
  //   num: '2',
  //   match: 'D2'
  // }
  get columns(){
    return [
      {
        title: '商品图片',
        key: `name${Math.random()}`,
        dataIndex: 'imgSrc',
        render: (text: any, row: number, index: any) => {
          if (index > 1) {
            return {
              children: <a href="javascript:;">{text}</a>,
              props: {
                colSpan: 8
              }
            }
          }
          return <a href="javascript:;">{text}</a>;
        }
      },
      {
        title: '商品名称',
        key: `title${Math.random()}`,
        dataIndex: 'title',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '商品规格',
        key: `spec${Math.random()}`,
        dataIndex: 'spec',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // render: ()=>{},
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '单位',
        key: `unit${Math.random()}`,
        dataIndex: 'unit',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // render: ()=>{},
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '商品编码',
        key: `code${Math.random()}`,
        dataIndex: 'code',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // render: ()=>{},
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '数量',
        key: `num${Math.random()}`,
        dataIndex: 'num',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // render: ()=>{},
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '配套产品',
        key: `match${Math.random()}`,
        dataIndex: 'match',
        render: (text: any, row: number, index: any) => (
          this.renderContent(text, row, index)
        )
        // render: ()=>{},
        // colSpan: 1,
        // className: 'className'
      },
      {
        title: '操作',
        key: `action${Math.random()}`,
        render: (text: any, row: number, index: any) => {
          const action = <span onClick={()=>this.handleAdd(text)}>删除</span>
          return (
            this.renderContent(action, row, index)
          )
        }
      }
    ]
  }
  renderContent = (value: any, row: any, index: any) => {
    const obj: renderContentProps = {
      children: value,
      props: {}
    };
    if (index >1) {
      obj.props.colSpan = 0;
    }
    return obj;
  }
  render() {
    const { data } = this.state
    return (
      <div className="antdTable">
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        {
          data.map((item: any) =>{
            return (
              <Table
                columns={this.columns} 
                bordered 
                dataSource={item.dataArray}
                pagination={false}
              />
            )
          })
        }
      </div>
    )
  }
  handleAdd = (text: any) => {
    const { count, data } = this.state;
    console.log('data', data, 'text', text)
    const newData = {
      key: 'imgSrc',
      imgSrc: '替换商品',
      colSpan: 8
    };
    data.map((item: any)=>{
      this.setState({
        data: data.map((item: any)=>({
          ...item,
          dataArray: [...item.dataArray, newData]
        })),
        count: count + 1,
      });
    })
  }
  getData = () => {
    this.setState({ data: productData })
  }
}