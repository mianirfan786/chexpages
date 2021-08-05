import React from 'react';
import { Tabs } from 'antd';
import './style.css';
import ClipLoader from 'react-spinners/ClipLoader';

import TabContentComponent from '../TabContentComponent';

const { TabPane } = Tabs;
const TabComponent = ({ handleStatus, vehiclesByStatus, setLoading, isLoading, certificateLoading, setCertificateLoading, showModal, setReInspectionId, setReInspectionModal, setReInspectionLisencePlateNumber }) => {
  return (
    <div>
      <Tabs onChange={(key) => handleStatus(key)} defaultActiveKey="REVIEWED" centered>
        <TabPane key="IN_PROGRESS" tab={<div style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>Draft</div>}>
          <div className="tabs-content-bg-color">
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <ClipLoader color={'#246DB5'} size={20} />
              </div>
            ) : vehiclesByStatus?.length === 0 ?
              <div className="draft-message-show">
                {'No vehicle is in Draft state'}
              </div>
              : (
                <>
                  {vehiclesByStatus?.[0]?.status === 'IN_PROGRESS'
                    ? vehiclesByStatus?.map((item) => {
                      return <TabContentComponent title={item?.Vehicle?.licensePlateNumber} draft={true} item={item} />;
                    })
                    : null}
                </>
              )}
          </div>
        </TabPane>

        <TabPane key="IN_REVIEW" tab={<div style={{ color: 'white', fontSize: '15px', marginLeft: '35px', marginRight: '35px', fontWeight: '500' }}>In Review</div>}>
          <div className="tabs-content-bg-color">
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <ClipLoader color={'#246DB5'} size={20} />
              </div>
            ) : vehiclesByStatus?.length === 0 ?
              <div className="draft-message-show">
                {'No vehicle is in In-review state'}
              </div>
              : (
                <>
                  {vehiclesByStatus?.[0]?.status === 'IN_REVIEW'
                    ? vehiclesByStatus?.map((item) => {
                      return <TabContentComponent title={item?.Vehicle?.licensePlateNumber} inReview={true} />
                    })
                    : null}
                </>
              )}
          </div>
        </TabPane>

        <TabPane key="REVIEWED" tab={<div style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>Reviewed</div>}>
          <div className="tabs-content-bg-color">
            {' '}
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <ClipLoader color={'#246DB5'} size={20} />
              </div>
            ) : vehiclesByStatus?.length === 0 ?
              <div className="draft-message-show">
                {'No vehicle is in Draft state'}
              </div>
              : (
                <>
                  {vehiclesByStatus?.[0]?.status === 'REVIEWED'
                    ? vehiclesByStatus?.map((item) => {
                      return (
                        <TabContentComponent
                          title={item?.Vehicle?.licensePlateNumber}
                          reviewed={true}
                          item={item}
                          setLoading={setLoading}
                          showModal={showModal}
                          certificateLoading={certificateLoading}
                          setCertificateLoading={setCertificateLoading}
                          setReInspectionId={setReInspectionId}
                          setReInspectionModal={setReInspectionModal}
                          setReInspectionLisencePlateNumber={setReInspectionLisencePlateNumber}
                          key={item?.id}
                        />
                      );
                    })
                    : null}
                </>
              )}
          </div>
        </TabPane>
        {/* <TabPane key="IN_REVIEW" tab={<div style={{ color: 'white', fontSize: '15px', marginLeft: '35px', marginRight: '35px', fontWeight: '500' }}>In Review</div>}>
          <div className="tabs-content-bg-color">
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <ClipLoader color={'#246DB5'} size={20} />
              </div>
            ) : (
              <>
                {vehiclesByStatus?.[0]?.status === 'IN_REVIEW'
                  ? vehiclesByStatus?.map((item) => {
                    return <TabContentComponent title={item?.Vehicle?.licensePlateNumber} inReview={true} />
                  })
                  : null}
              </>
            )}
          </div>
        </TabPane> */}
        {/* <TabPane key="IN_PROGRESS" tab={<div style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>Draft</div>}>
          <div className="tabs-content-bg-color">
            {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                <ClipLoader color={'#246DB5'} size={20} />
              </div>
            ) : (
              <>
                {vehiclesByStatus?.[0]?.status === 'IN_PROGRESS'
                  ? vehiclesByStatus?.map((item) => {
                    return <TabContentComponent title={item?.Vehicle?.licensePlateNumber} draft={true} item={item} />;
                  })
                  : null}
              </>
            )}
          </div>
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default TabComponent;
