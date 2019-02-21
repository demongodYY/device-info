import fetch from 'isomorphic-unfetch';
import { List } from 'antd';

const DeviceDetail =  (props) => {
    const {deviceDetail} = props;
    const deviceList = [
      {title: '设备编号', content: deviceDetail.computerId},
      {title: '设备型号：', content: deviceDetail.model},
      {title: '设备序列号：', content: deviceDetail.serial},
      {title: '生产日期：', content: deviceDetail.factoryTime},
      {title: '使用者：', content: deviceDetail.user},
      {title: '操作系统：', content: deviceDetail.system},
      {title: '备注：', content: deviceDetail.remark},
    ]
    return (
      <div className="list-container">
        <div className="list-wrapper">
          <List 
            itemLayout="horizontal"
            dataSource={deviceList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta                
                  title={item.title}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>
        <style jsx>{`
          .list-container{
            background: white;
            padding: 20px 5%;
          }
          .list-wrapper {
            min-height: 500px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 0 15px;            
            width: 100%;
          }
        `}</style>
      </div>
    )
  }

DeviceDetail.getInitialProps  = async function ({req, query}) {  
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch (baseUrl + `/api/device/${query.id}/detail`);
  const deviceDetail = await res.json();
  return {
    deviceDetail
  }
}

export default DeviceDetail;