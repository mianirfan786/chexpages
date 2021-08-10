/* eslint-disable */

import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { PDFDownloadLink, Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { connect } from 'react-redux';
import { Row, Col, Checkbox } from 'antd';
import moment from 'moment';
import ActionCreators from '../../actions';
import { setLyftReportData } from '../../utils/functions';
import TicketImg from '../../Assets/tickimg.png';
import LyftImg from '../../Assets/liftimg.png';
import './LyftCertificate.css';

const styles = StyleSheet.create({
  body: {
    paddingBottom: 65,
  },
  headerWidth: {
    paddingHorizontal: 10,
    marginBottom: '25px',
  },
  header: {
    backgroundColor: '#47484F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
  },
  californiaText: {
    color: 'white',
    fontSize: '20px',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: '#141414',
    backgroundColor: '#E4E5E7',
    padding: '10@s',
  },
  lyftdrivertextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15@s',
  },
  boxWidth: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  lyftdriverText: {
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: '42@s',
    color: 'black',
  },
  allfieldsText: {
    color: '#47484F',
    fontSize: '10px',
    fontWeight: '400',
    marginLeft: '8@s',
  },
  nameinputContainer: {
    borderWidth: 1,
    borderColor: '#47484F',
    marginTop: '10@s',
    width: '100%',
  },
  lyftdriverName: {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '23@s',
    color: '#47484F',
    marginBottom: 0,
    marginLeft: '10@s',
    marginTop: '3@s',
  },
  nameText: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '23@s',
    color: 'black',
    marginLeft: '30%',
  },
  threeinputfieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameinputContainerOne: {
    borderWidth: 1,
    borderColor: '#47484F',
    marginTop: '10@s',
    width: '30%',
    marginRight: '10@s',
  },
  nameinputContainerTwo: {
    borderWidth: 1,
    borderColor: '#47484F',
    marginTop: '10@s',
    width: '30%',
    marginRight: '10@s',
  },
  nameinputContainerThree: {
    borderWidth: 1,
    borderColor: '#47484F',
    marginTop: '10@s',
    width: '40%',
  },
  threeinputFields: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '23@s',
    color: 'black',
    marginLeft: '50%',
  },
  licenseplateContainer: {
    borderWidth: 1,
    borderColor: '#47484F',
    width: '45%',
    marginRight: '13@s',
  },
  codeText: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '23@s',
    color: 'black',
    marginLeft: '50%',
  },
  vinContainer: {
    fontSize: '12px',
    fontWeight: '30',
    fontStyle: 'normal',
    color: 'black',
  },
  twoinputfieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10@s',
  },
  vintopBorder: {
    borderTopWidth: 1,
    borderTopColor: '#47484F',
    width: '100%',
  },
  topText: {
    marginTop: '30px',
    fontSize: '12px',
    // borderLeftWidth: 1,
    paddingLeft: '8 px',
    paddingRight: '10px',
  },
  vehicleinspectionPadding: {
    paddingHorizontal: '30@s',
    paddingTop: '10@s',
  },
  checkboxesmainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '30@s',
  },
  checkboxesmainContainerTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '30@s',
    marginTop: '10@s',
  },
  inspectionfirstContainer: {
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inspectionsecondContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inspectionText: {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: '#716E6E',
    textTransform: 'uppercase',
  },
  inspectiontextTwo: {
    fontSize: '13px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: '#716E6E',
    marginLeft: '15@s',
    textTransform: 'uppercase',
  },
  passText: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: '#716E6E',
    marginRight: '15@s',
    textTransform: 'uppercase',
  },
  failText: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: '#716E6E',
    textTransform: 'uppercase',
  },
  passfailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numbersText: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: '#716E6E',
  },
  detailsText: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '21@s',
    color: 'black',
    marginLeft: '5px',
  },
  failpassbox: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: '15@s',
    width: '100%',
    padding: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    height: '50px',
    top: 10,
  },

  boxinspectionText: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '21@s',
    color: 'black',
    textTransform: 'uppercase',
  },
  circleoneText: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21@s',
    color: '#716E6E',
    marginTop: '5px',
  },
  boxpassText: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21@s',
    color: 'black',
  },
  orangeCircle: {
    borderWidth: 7,
    borderColor: '#FC6522',
    borderRadius: '50%',
    height: '75px',
    width: '75px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxfailText: {
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21@s',
    color: 'black',
  },
  boxinspectionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tobecompletedContainer: {
    backgroundColor: '#E4E5E7',
    padding: '10@s',
  },
  tobecompletedWidth: {
    paddingHorizontal: '30@s',
    marginTop: '15@s',
  },
  tobecompletedtextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tobecompletedText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '23@s',
    color: 'black',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
  fieldsText: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21@s',
    color: '#716E6E',
    textTransform: 'uppercase',
  },

  inpectionText: {
    fontSize: '16px',
    color: '#47484F',
    marginRight: '10px',
    fontWeight: '600',
    fontStyle: 'noraml',
    lineHeight: '22@s',
    textTransform: 'uppercase',
  },
  documentexpiryText: {
    fontSize: '12px',
    color: '#47484F',
  },
  dateText: {
    fontSize: '18px',
    color: 'black',
    fontWeight: 'extralight',
  },
  datemainContainer: {
    marginTop: '10@s',
    marginLeft: '52%',
  },
  namesfieldscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15@s',
    alignItems: 'flex-end',
  },
  borderWidth: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  topName: {
    fontSize: '14px',
    color: 'black',
    marginLeft: '12@s',
  },
  bottomName: {
    fontSize: '12px',
    color: '#47484F',
    textTransform: 'uppercase',
  },
  bottomPara: {
    paddingHorizontal: '30@s',
    fontSize: 10,
    marginTop: '15@s',
    color: '#716E6E',
  },
  tickpassContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: '14px',
    width: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '28px',
  },
  tickfailContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: '14px',
    width: '14px',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '28px',
  },
  inspectiondateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
});

const LyftCertificate = (props) => {
  const { isLoading } = props;
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const getToken = () => localStorage.getItem('token') || null;
    if (getToken) {
      props.getVehicleCertificate({ id: props?.id, companyId: props.companyId }, props.setLoading, 'template3');
    } else {
      props.history.push('/login');
    }
  }, [props?.companyId]);

  return (
    <div className="App">
      <PDFDownloadLink
        wrap={false}
        document={
          <Document>
            <Page size="A3" style={styles.body}>
              <View style={styles.headerWidth}>
                <View style={styles.header}>
                  <Image style={{ width: '40px' }} source={LyftImg} />
                  <Text style={styles.californiaText}>California Vehicle Inspection</Text>
                </View>
              </View>
              <View style={styles.boxWidth}>
                <View style={styles.boxContainer}>
                  <View style={styles.lyftdrivertextContainer}>
                    <Text style={styles.lyftdriverText}>LYFT DRIVER INFO</Text>
                    <Text style={styles.allfieldsText}>[ALL FIELDS ARE MANDATORY]</Text>
                  </View>

                  <View style={styles.nameinputContainer}>
                    <Text style={styles.lyftdriverName}>LYFT DRIVER NAME</Text>
                    <Text style={styles.nameText}>{props.reportData && props.reportData?.Username}</Text>
                  </View>
                  <View style={styles.nameinputContainer}>
                    <Text style={styles.lyftdriverName}>PHONE NUMBER</Text>
                    <Text style={styles.nameText}>{props.reportData && props.reportData.Userphone}</Text>
                  </View>
                  <View style={styles.threeinputfieldContainer}>
                    <View style={styles.nameinputContainerOne}>
                      <Text style={styles.lyftdriverName}>VEHICLE YEAR</Text>
                      <Text style={styles.threeinputFields}>{props.reportData && props.reportData?.year}</Text>
                    </View>
                    <View style={styles.nameinputContainerTwo}>
                      <Text style={styles.lyftdriverName}>VEHICLE MAKE</Text>
                      <Text style={styles.threeinputFields}>{props.reportData && props.reportData?.make}</Text>
                    </View>
                    <View style={styles.nameinputContainerThree}>
                      <Text style={styles.lyftdriverName}>VEHICLE MODEL</Text>
                      <Text style={styles.threeinputFields}>{props.reportData && props.reportData?.model}</Text>
                    </View>
                  </View>

                  <View style={styles.twoinputfieldContainer}>
                    <View style={styles.licenseplateContainer}>
                      <Text style={styles.lyftdriverName}>LICENSE PLATE #</Text>
                      <Text style={styles.codeText}>{props.reportData && props.reportData.licensePlateNumber}</Text>
                    </View>
                    <View style={{ width: '60%' }}>
                      <View style={{ flexDirection: 'row' }}>
                        {props.reportData &&
                          props?.reportData?.vin?.split('').map((char, index) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                              {index == 0 ? <Text style={{ marginTop: 27, fontSize: 15, paddingLeft: -1 }}>|</Text> : null}

                              <Text style={[styles.topText]}>{char}</Text>
                              <Text style={{ marginTop: 27, fontSize: 15 }}>|</Text>
                            </View>
                          ))}
                      </View>

                      <View style={styles.vintopBorder} />
                      <Text style={styles.vinContainer}>VIN</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.vehicleinspectionPadding}>
                <View style={styles.lyftdrivertextContainer}>
                  <Text style={styles.lyftdriverText}>VEHICLE INSPECTION</Text>
                  <Text style={styles.allfieldsText}>[TO BE COMPLETED BY INSPECTOR]</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', paddingHorizontal: '30px' }}>
                <View style={{ flexDirection: 'column', width: '50%' }}>
                  <View style={styles.inspectionfirstContainer}>
                    <Text style={styles.inspectionText}>Inspection Point</Text>
                    <View style={styles.passfailContainer}>
                      <Text style={styles.passText}>Pass</Text>
                      <Text style={styles.failText}>Fail</Text>
                    </View>
                  </View>
                  {props?.checksData?.map((check, index) =>
                    index <= 11 ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={styles.numbersText}>{index + 1}.</Text>
                          <Text style={styles.detailsText}>{check?.Check?.name}</Text>
                        </View>
                        <View style={styles.passfailContainer}>
                          {check?.status == true || check?.status == 1 ? (
                            <View style={styles.tickpassContainer}>
                              <Image style={{ width: '16px', marginLeft: '2px' }} source={TicketImg} />
                            </View>
                          ) : (
                            <View style={styles.tickpassContainer}></View>
                          )}
                          {check?.status == false || check?.status == 0 ? (
                            <View style={styles.tickfailContainer}>
                              <Image style={{ width: '16px', marginLeft: '2px' }} source={TicketImg} />
                            </View>
                          ) : (
                            <View style={styles.tickfailContainer}></View>
                          )}
                        </View>
                      </View>
                    ) : null
                  )}
                </View>
                {console.log(props?.checksData)}
                <View style={{ flexDirection: 'column', width: '50%' }}>
                  <View style={styles.inspectionfirstContainer}>
                    <Text style={styles.inspectionText}>Inspection Point</Text>
                    <View style={styles.passfailContainer}>
                      <Text style={styles.passText}>Pass</Text>
                      <Text style={styles.failText}>Fail</Text>
                    </View>
                  </View>

                  {props?.checksData?.map((check, index) =>
                    index > 11 ? (
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={styles.numbersText}>{index + 1}.</Text>
                          <Text style={styles.detailsText}>{check?.Check?.name}</Text>
                        </View>
                        <View style={styles.passfailContainer}>
                          {check?.status == true || check?.status == 1 ? (
                            <View style={styles.tickpassContainer}>
                              <Image style={{ width: '16px', marginLeft: '2px' }} source={TicketImg} />
                            </View>
                          ) : (
                            <View style={styles.tickpassContainer}></View>
                          )}
                          {check?.status == false || check?.status == 0 ? (
                            <View style={styles.tickfailContainer}>
                              <Image style={{ width: '16px', marginLeft: '2px' }} source={TicketImg} />
                            </View>
                          ) : (
                            <View style={styles.tickfailContainer}></View>
                          )}
                        </View>
                      </View>
                    ) : null
                  )}

                  <View style={[styles.inspectionsecondContainer, { marginTop: '20px', width: '96%', marginLeft: -13 }]}>
                    <View style={styles.failpassbox}>
                      <View style={styles.boxinspectionContainer}>
                        <Text style={styles.boxinspectionText}>VEHICLE INSPECTION</Text>
                        <Text style={styles.circleoneText}>(Please circle one)</Text>
                      </View>
                      {props.reportData && props?.reportData?.finalStatus === 'pass' ? (
                        <View style={styles.orangeCircle}>
                          <Text style={styles.boxpassText}>PASS</Text>
                        </View>
                      ) : (
                        <Text style={styles.boxpassText}>PASS</Text>
                      )}
                      {props.reportData && props.reportData?.finalStatus === 'fail' ? (
                        <View style={styles.orangeCircle}>
                          <Text style={styles.boxpassText}>FAIL</Text>
                        </View>
                      ) : (
                        <Text style={styles.boxpassText}>FAIL</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.tobecompletedWidth}>
                <View style={styles.tobecompletedContainer}>
                  <View style={styles.tobecompletedtextContainer}>
                    <Text style={styles.tobecompletedText}>to be completed by inspector only </Text>
                    <Text style={styles.fieldsText}>[all fields are mandatory]</Text>
                  </View>
                  <View style={styles.datemainContainer}>
                    <View style={styles.inspectiondateContainer}>
                      <Text style={styles.inpectionText}>Inspection date</Text>
                      <Text style={styles.dateText}>{moment(new Date(props.reportData && props.reportData?.updatedAt)).format('MM/ DD /YYYY')}</Text>
                    </View>
                    <Text style={styles.documentexpiryText}>(document expires one year from this date)</Text>
                  </View>
                  <View style={styles.namesfieldscontainer}>
                    <View style={{ width: '50%', marginRight: '20@s' }}>
                      <Text style={styles.topName}>Chex.AI</Text>
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>Company Name</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.topName}>{props.reportData && props.reportData?.milage}</Text>
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>vehicle mileage from odometer</Text>
                    </View>
                  </View>
                  <View style={styles.namesfieldscontainer}>
                    <View style={{ width: '50%', marginRight: '20@s' }}>
                      <Text style={styles.topName}>3120 Scott Blvd. Santa Clara, CA 95054</Text>
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>Company Address</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={styles.topName}>{`${props.reportData && props.reportData?.Inspectorname} ${props.reportData && props.reportData?.InspectorlastName}`}</Text>
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>inspector name</Text>
                    </View>
                  </View>
                  <View style={styles.namesfieldscontainer}>
                    <View style={{ width: '50%', marginRight: '20@s' }}>
                      <Text style={styles.topName}>299664</Text>
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>ard number</Text>
                    </View>
                    <View style={{ width: '50%', marginTop: '20px' }}>
                      {/* <Text style={styles.topName}>12122</Text> */}
                      <Image
                        style={{ position: 'absolute', height: '100px', width: '100px', top: '-45px', right: '100px' }}
                        src={`${process.env.REACT_APP_AWS_S3_LINK}/${props.reportData && props.reportData?.Inspectorsignature}?x-request=xhr`}
                      />
                      <View style={styles.borderWidth} />
                      <Text style={styles.bottomName}>inspector signature</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ paddingHorizontal: '20px' }}>
                <Text style={styles.bottomPara}>
                  Applicants who do not match the photo on their driver’s license or do not have the proper documents, cannot complete an inspection. Failing inspections can only
                  be remedied by the same shop on the same day. If an applicant fails the inspection and is unable to fix the issues on the spot, a new appointment must be made,
                  and a new inspection form must be used.
                </Text>
                <Text style={styles.bottomPara}>
                  This inspection form reflects a 19 point inspection only on the date of the inspection listed above. For purposes of this inspection, the wheels were not removed
                  from the vehicle, and the vehicle was not put on a lift, nor was it checked for emissions.
                </Text>
              </View>
            </Page>
          </Document>
        }
        fileName="Vehicle-certificate.pdf"
      >
        {({ blob, url, loading, error }) => (
          <>
            {isLoading ? (
              <ClipLoader color={'#246DB5'} size={40} />
            ) : (
              <div style={{ display: 'flex', marginTop: '30px', flexDirection: 'row', alignItems: 'center' }}>
                <div
                  style={{
                    fontSize: '15px',
                    marginBottom: '20px',
                    marginTop: '20px',
                    color: 'white',
                    fontWeight: 'bold',
                    margin: 'auto',
                    background: '#3276ba',
                    padding: '13px',
                    borderRadius: '50px',
                  }}
                >
                  Download vehicle report
                </div>
                <i className="fa fa-download" />
              </div>
            )}
          </>
        )}
      </PDFDownloadLink>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log('Lyft Certification dtsate', state);
  return {
    reportData: state.vehicleInstruction.lyftVehicleCertificate,
    checksData: setLyftReportData(state.vehicleInstruction.lyftVehicleCertificate?.Files),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LyftCertificate);
