

import React from 'react';
import QrCard from './components/QrCard';
import FormDrawer from './components/FormDrawer';
import fetch from 'isomorphic-unfetch';
import { Button, Row, Col, Layout, List, Card } from 'antd';

export default class Index extends React.Component { 

  static getInitialProps  = async function ({req}) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch (baseUrl + '/api/devices/list');
    const result = await res.json();
    return {
      devicesList: result,
      baseUrl: baseUrl
    };
  }

  constructor (props) {
    super(props);
    this.state = {
      drawerVisible: false
    }
  }

  onClose() {
    this.setState({
      drawerVisible: false
    });
    location.reload();
  }

  render(){
    const {devicesList, baseUrl} = this.props;
    return (
      <Layout>
        <div className="page-container">
          {/* <Row gutter = {16}>
          {
            devicesList.map((device, idx) => {
              return (
                <Col span = {4}>
                  <QrCard computerId={device.computerId} key={idx} baseUrl={baseUrl}></QrCard>
                </Col>
              )
            })
          }
            
          </Row> */}

          <List
            grid={{
              gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
            }}
            dataSource={devicesList}
            renderItem={item => (
              <List.Item>
                <Card title={`编号：${item.computerId}`}>
                  <QrCard computerId={item.computerId} baseUrl={baseUrl}></QrCard>
                </Card>
              </List.Item>
            )}
          />
          <Button className="icon-btn" onClick={() => {const drawerVisible = !this.state.drawerVisible; this.setState({drawerVisible})}}>添加设备</Button>
          <FormDrawer visible= {this.state.drawerVisible} onClose={this.onClose.bind(this)}></FormDrawer>
        </div>
        <style jsx>{`
          .page-container{
            text-align: center;
            padding: 20px 5%;
            background: white;
          }
        `}</style>
      </Layout>
    );
  }
}

