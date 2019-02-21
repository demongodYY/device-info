import React from 'react';
import {
  Drawer, Form, Button, Input, message, DatePicker
} from 'antd';
import fetch from 'isomorphic-unfetch';

 class FormDrawer extends React.Component {
  state = {
    visible: this.props.visible
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.form.validateFields((err, value) => {      
      value.factoryTime = value.factoryTime ? value.factoryTime.format('YYYY-MM-DD') : '';
      if(!err) {        
        fetch('/api/device/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        })
        .then(res => res.json())
        .then( data => {
          console.log(data);
          if(data.statu == 'success') {
            message.success(`设备添加成功！编号：${data.insertId}`);
          } else {
            message.error('设备添加出错，请稍后再试');
          }
        })
      }
    })
  }

  render() {
    const { visible } = this.state;
    const { onClose } = this.props;
    const { getFieldDecorator } = this.props.form;
    return(
      <Drawer
        title="添加新设备"
        width={640}
        visible={visible}
        onClose={onClose}
      >
        <Form layout="horizontal" onSubmit={this.onSubmit.bind(this)}>
          <Form.Item label="设备型号">
            {
              getFieldDecorator('model', {
                rules: [{ required: true, message: '请输入设备型号' }],
              })(<Input placeholder="设备型号" />)
            }
          </Form.Item>
          <Form.Item label="出厂时间">
            {
              getFieldDecorator('factoryTime')(<DatePicker />)
            }
          </Form.Item> 
          <Form.Item label="使用者">
            {
              getFieldDecorator('user', {
                initialValue:''
              })(<Input placeholder="使用者" />)
            }
          </Form.Item>
          <Form.Item label="设备序列号">
            {
              getFieldDecorator('serial', {
                 initialValue:'' 
              })(<Input placeholder="设备序列号" />)
            }
          </Form.Item>
          <Form.Item label="操作系统">
            {
              getFieldDecorator('system', {
                initialValue:''
              })(<Input placeholder="操作系统" />)
            }
          </Form.Item>
          <Form.Item label="备注">
            {
              getFieldDecorator('remark', {
                 initialValue:''
              })(<Input.TextArea rows={4}/>)
            }
          </Form.Item> 
          <Form.Item>
            <Button type="primary" htmlType="submit">添加</Button>
            <Button style={{ marginLeft: 8 }}>重置</Button>
          </Form.Item>
        </Form>
      </Drawer>
    )
  }
};


export default Form.create()(FormDrawer);