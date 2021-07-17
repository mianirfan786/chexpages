import React from 'react';
import { Tabs } from 'antd';
import './style.css';

import TabContentComponent from '../TabContentComponent';

const { TabPane } = Tabs;
const TabComponent = ({ handleStatus }) => {
  return (
    <div>
      <Tabs onChange={(key) => handleStatus(key)} defaultActiveKey="REVIEWED" centered>
        <TabPane key="REVIEWED" tab={<div style={{ color: '#084e8f', fontSize: '16px' }}>Reviewed</div>}>
          <TabContentComponent title="Honda Civic" />
          <TabContentComponent title="Toyota Camry" />
          <TabContentComponent title="Ford Focus" />
          <TabContentComponent title="Chevrolet Spark" />
        </TabPane>
        <TabPane key="IN_REVIEW" tab={<div style={{ color: '#084e8f', fontSize: '16px', marginLeft: '30px', marginRight: '30px' }}>In Review</div>}>
          <TabContentComponent title="Honda Civic" />
          <TabContentComponent title="Toyota Camry" />
          <TabContentComponent title="Ford Focus" />
          <TabContentComponent title="Chevrolet Spark" />
        </TabPane>
        <TabPane key="IN_PROGRESS" tab={<div style={{ color: '#084e8f', fontSize: '16px' }}>Draft</div>}>
          <TabContentComponent title="Honda Civic" />
          <TabContentComponent title="Toyota Camry" />
          <TabContentComponent title="Ford Focus" />
          <TabContentComponent title="Chevrolet Spark" />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabComponent;
