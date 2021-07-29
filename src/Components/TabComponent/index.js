import React from 'react';
import { Tabs } from 'antd';
import './style.css';
import ClipLoader from 'react-spinners/ClipLoader';

import TabContentComponent from '../TabContentComponent';

const { TabPane } = Tabs;
const TabComponent = ({ handleStatus, vehiclesByStatus, isLoading }) => {
  return (
    <div>
      <Tabs onChange={(key) => handleStatus(key)} defaultActiveKey="REVIEWED" centered>
        <TabPane key="REVIEWED" tab={<div style={{ color: '#084e8f', fontSize: '15px' }}>Reviewed</div>}>
          {isLoading ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <ClipLoader color={'#246DB5'} size={20} />
            </div>
            :
            <>
              {vehiclesByStatus?.[0]?.status === "REVIEWED" ? vehiclesByStatus?.map((item) => {
                return (
                  <TabContentComponent title={item?.Vehicle?.licensePlateNumber} />
                );
              }) : null}
            </>}

        </TabPane>
        <TabPane key="IN_REVIEW" tab={<div style={{ color: '#084e8f', fontSize: '15px', marginLeft: '35px', marginRight: '35px' }}>In Review</div>}>
          {isLoading ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <ClipLoader color={'#246DB5'} size={20} />
            </div>
            :
            <>
              {vehiclesByStatus?.[0]?.status === "IN_REVIEW" ? vehiclesByStatus?.map((item) => {
                return (
                  <TabContentComponent title={item?.Vehicle?.licensePlateNumber} />
                );
              }) : null}
            </>}
        </TabPane>
        <TabPane key="IN_PROGRESS" tab={<div style={{ color: '#084e8f', fontSize: '15px' }}>Draft</div>}>
          {isLoading ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <ClipLoader color={'#246DB5'} size={20} />
            </div>
            :
            <>
              {vehiclesByStatus?.[0]?.status === "IN_PROGRESS" ? vehiclesByStatus?.map((item) => {
                console.log("item : ", item);
                return (
                  <TabContentComponent title={item?.Vehicle?.licensePlateNumber} draft={true} item={item} />
                );
              }) : null}
            </>}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default TabComponent;
