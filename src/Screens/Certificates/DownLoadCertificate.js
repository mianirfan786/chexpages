/* eslint-disable */

import React, { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';

//@ts-ignore
import TicketImg from '../../Assets/tickimg.png';
import ActionCreators from '../../actions';
import { setOtherReportData } from '../../utils/functions';

import './styles.css';

const styles = StyleSheet.create({
  body: {
    paddingBottom: 65,
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    marginTop: '10px',
  },

  tobecompletedContainer: {
    backgroundColor: '#E6E6E6',
    padding: '5px',
  },
  tobecompletedText: {
    color: '#FF4A86',
    fontSize: '9px',
    fontWeight: '200',
    fontStyle: 'normal',
    marginLeft: '14px',
  },
  topfieldsmainContainer: {
    backgroundColor: '#F7F7F7',
    padding: '10px',
    height: '90px',
  },
  namefiledsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'flex-end',
    marginTop: '15@s',
  },
  firstField: {
    width: '55%',
    marginRight: '20px',
  },
  secondfield: {
    width: '45%',
  },
  fieldBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#3F3F3F',
  },
  fieldBorder2: {
    borderBottomWidth: 1,
    borderBottomColor: '#3F3F3F',
  },
  topnameText: {
    color: 'black',
    fontSize: '16px',
    fontWeight: '100',
    fontStyle: 'normal',
    marginLeft: '10px',
    marginBottom: '3px',
  },
  bottomnameText: {
    color: 'black',
    fontSize: '8px',
    fontWeight: '100',
    fontStyle: 'normal',
    marginTop: '3px',
  },
  inspectionpointsText: {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '25px',
  },
  passfailrowmainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10px',
    justifyContent: 'space-around',
    flex: '0 0 45%',
    marginRight: '30px',
  },

  dashedBorder: {
    width: '80px',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#959595',
    marginRight: '5px',
  },
  dashedBorder2: {
    width: '80px',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#959595',
    marginRight: '5px',
  },

  tickimgContainer: {
    width: '18px',
    height: '15px',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '4px',
  },
  tickimgContainer2: {
    width: '18px',
    height: '15px',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '4px',
  },
  emptytickimgContainer: {
    width: '19px',
    height: '15px',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8px',
  },
  emptytickimgContainer2: {
    width: '18px',
    height: '15px',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8px',
  },
  nameText: {
    color: 'black',
    fontSize: '9px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    width: '65%',
  },
  passText: {
    color: '#959595',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    marginLeft: '5px',
  },
  failText: {
    color: '#959595',
    fontSize: '11px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    marginLeft: '5px',
  },
  nameTextss: {
    color: 'black',
    fontSize: '10px',
    fontWeight: '300',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    marginLeft: '20px',
    width: '30%',
  },

  passTexts2: {
    color: '#959595',
    fontSize: '11px',
    fontWeight: '700',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    marginLeft: '5px',
  },
  failTexts2: {
    color: '#959595',
    fontSize: '11px',
    fontWeight: '700',
    fontStyle: 'normal',
    textTransform: 'uppercase',
    marginLeft: '5px',
  },
  inspectionresultContainer: {
    width: '70%',
    backgroundColor: '#767170',
    padding: '10px',
    alignSelf: 'center',
    marginTop: '40px',
  },
  inspectionrexultText: {
    fontSize: '20px',
    fontStyle: 'normal',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inspectiondatemainContainer: {
    padding: '10px',
    backgroundColor: '#F7F7F7',
    width: '70%',
    alignSelf: 'center',
  },
  markingText: {
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#767170',
    textAlign: 'center',
    marginTop: '5px',
  },
  passfaildatedirectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '30px',
    marginBottom: '15px',
  },
  boxBorder: {
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: 'black',
    width: '110px',
  },
  boxpasscircleContainer: {
    width: '70px',
    height: '70px',
    borderWidth: 8,
    borderColor: '#FC6522',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50px',
  },
  boxpassText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
  },
  boxdateText: {
    fontSize: '12px',
    color: '#767170',
    marginBottom: '3px',
    fontWeight: 'bold',
  },
  inspectiondateText: {
    fontSize: '12px',
    fontWeight: '300',
    color: '#767170',
    marginTop: '3px',
  },
  textDirection: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  bottommainContainer: {
    backgroundColor: '#F7F7F7',
    padding: '10px',
    marginTop: '30px',
  },
  byvehicleText: {
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#FF4A86',
    textTransform: 'uppercase',
  },
  firstfourfieldsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15px',
    marginBottom: '10px',
    alignItems: 'flex-end',
  },
  firstfourfieldsContainerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '25px',
    marginBottom: '5px',
    alignItems: 'flex-end',
  },
  bottomboxBorder: {
    borderBottomWidth: 1,
    borderColor: ' #767170',
  },
  bottomboxtoptext: {
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'black',
    marginLeft: '10px',
    marginBottom: '3px',
    textTransform: 'uppercase',
    lineHeight: '22@s',
  },
  bottomboxbootomText: {
    fontSize: '8px',
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'black',
    textTransform: 'uppercase',
    marginTop: '3px',
  },
  lastbottomText: {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '10px',
    color: '#4F4F4F',
  },
  vehicleinspectiontopText: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'black',
  },
});

const DownloadCertifcate = (props) => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const getToken = () => localStorage.getItem('token') || null;
    if (getToken) {
      props.getVehicleCertificate({ id: user?.vehicles[0]?.id, company_id: props.id }, props.setLoading, 'template2');
    } else {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('vehicleData');
      window.location.reload('/login');
    }
  }, []);
  return (
    <div className="App">
      <PDFDownloadLink
        wrap={false}
        document={
          <Document>
            <Page size="A3" style={styles.body}>
              <View style={styles.headerContainer}>
                <View></View>
                <Text style={styles.vehicleinspectiontopText}>Vehicle Inspection</Text>
                {props.reportData && props.reportData[0]?.url ? (
                  <Image style={{ width: '80px' }} source={`${process.env.REACT_APP_AWS_S3_LINK}/${props.reportData && props.reportData[0]?.url}?x-request=xhr`} />
                ) : (
                  <Text style={{ color: 'white', fontSize: '100px' }}>Test</Text>
                )}
              </View>
              <View style={styles.tobecompletedContainer}>
                <Text style={styles.tobecompletedText}>TO BE COMPLETED BY VEHICLE OPERATOR</Text>
              </View>
              <View style={styles.topfieldsmainContainer}>
                <View style={styles.namefiledsContainer}>
                  <View style={styles.firstField}>
                    <Text style={styles.topnameText}>{`${props.reportData && props.reportData[0]?.name}`}</Text>
                    <View style={styles.fieldBorder} />
                    <Text style={styles.bottomnameText}>FULL NAME</Text>
                  </View>
                  <View style={styles.secondfield}>
                    <Text style={styles.topnameText}>{props.reportData && props.reportData[0]?.email}</Text>
                    <View style={styles.fieldBorder2} />
                    <Text style={styles.bottomnameText}>Email</Text>
                  </View>
                </View>

                <View style={styles.firstfourfieldsContainerTop}>
                  <View style={{ width: '35%', marginRight: '15px' }}>
                    <Text style={{ color: '#F7F7F7' }}>Testing</Text>
                    {/* <Image style={{ width: '100px', marginTop: -25, marginLeft: '50px' }} source={SignatureImage} /> */}
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>Signature</Text>
                  </View>
                  <View style={{ width: '20%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{moment(new Date(props.reportData && props.reportData[0]?.VehicleUpdatedAt)).format('MM-DD-YYYY')}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>Date</Text>
                  </View>
                  <View style={{ width: '46%' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.phone}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>phone number</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: '20@s' }}>
                <Text style={styles.inspectionpointsText}>INSPECTION POINTS</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {props.checksData &&
                      props.checksData.map((data) => (
                        <View style={styles.passfailrowmainContainer}>
                          <Text style={styles.nameText}>{data.name} </Text>
                          <View style={styles.dashedBorder} />
                          {data.status === 1 || data.status === true ? (
                            <View style={{ flexDirection: 'row', marginRight: '10px' }}>
                              <View style={styles.tickimgContainer}>
                                <Image style={{ width: '15px' }} source={TicketImg} />
                              </View>
                              <Text style={styles.passText}>PASS</Text>
                            </View>
                          ) : (
                            <View style={{ flexDirection: 'row', marginRight: '16px' }}>
                              <View style={styles.emptytickimgContainer}></View>
                              <Text style={styles.passText}>PASS</Text>
                            </View>
                          )}

                          {data.status === 0 || data.status === false ? (
                            <View style={{ flexDirection: 'row' }}>
                              <View style={styles.tickimgContainer}>
                                <Image style={{ width: '15px' }} source={TicketImg} />
                              </View>
                              <Text style={styles.passText}>FAIL</Text>
                            </View>
                          ) : (
                            <View style={{ flexDirection: 'row' }}>
                              <View style={styles.emptytickimgContainer}></View>
                              <Text style={styles.passText}>FAIL</Text>
                            </View>
                          )}
                        </View>
                      ))}
                  </View>
                </View>
              </View>

              <View style={styles.inspectionresultContainer}>
                <Text style={styles.inspectionrexultText}>VEHICLE INSPECTION RESULTS (Inspector To Circle)</Text>
              </View>
              <View style={styles.inspectiondatemainContainer}>
                <Text style={styles.markingText}>Any markings on the “fail” side will automatically fail inspection</Text>

                <View style={styles.passfaildatedirectionContainer}>
                  {props.reportData && props.reportData[0]?.final_status === 'pass' ? (
                    <View style={styles.boxpasscircleContainer}>
                      <Text style={styles.boxpassText}>PASS</Text>
                    </View>
                  ) : (
                    <Text style={styles.boxpassText}>PASS</Text>
                  )}

                  <View style={styles.textDirection}>
                    <Text style={styles.boxdateText}>{moment(props.reportData && props.reportData[0]?.vehicleUpdatedAt).format('MM-DD-YYYY')}</Text>
                    <View style={styles.boxBorder} />
                    <Text style={styles.inspectiondateText}>Inspection Date</Text>
                  </View>
                  {props.reportData && props.reportData[0]?.final_status === 'fail' ? (
                    <View style={styles.boxpasscircleContainer}>
                      <Text style={styles.boxpassText}>FAIL</Text>
                    </View>
                  ) : (
                    <Text style={styles.boxpassText}>FAIL</Text>
                  )}
                </View>
              </View>
              <View style={styles.bottommainContainer}>
                <Text style={styles.byvehicleText}>to be completed by vehicle inspector</Text>

                <View style={styles.firstfourfieldsContainer}>
                  <View style={{ width: '20%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.vehicle_mileage}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>Vehicle mileage</Text>
                  </View>
                  <View style={{ width: '20%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.registration_state}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>license plate state</Text>
                  </View>
                  <View style={{ width: '20%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.license_plate_no}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>License plate number</Text>
                  </View>
                  <View style={{ width: '40%' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.vin}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>Vin</Text>
                  </View>
                </View>

                <View style={styles.firstfourfieldsContainer}>
                  <View style={{ width: '40%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.make}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>vehicle make</Text>
                  </View>
                  <View style={{ width: '22%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.model}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>vehicle model</Text>
                  </View>
                  <View style={{ width: '18%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.year}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>vehicle year</Text>
                  </View>
                  <View style={{ width: '15%' }}>
                    <Text style={styles.bottomboxtoptext}>{props.reportData && props.reportData[0]?.vehicleDoors}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>number of doors</Text>
                  </View>
                </View>

                <View style={styles.firstfourfieldsContainer}>
                  <View style={{ width: '41%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>CHEX.AI</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>inspector company</Text>
                  </View>
                  <View style={{ width: '60%' }}>
                    <Text style={styles.bottomboxtoptext}>3120 Scott Blvd. Santa Clara, CA 95054</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>inspector address</Text>
                  </View>
                </View>

                <View style={styles.firstfourfieldsContainer}>
                  <View style={{ width: '42%', marginRight: '15px' }}>
                    <Text style={styles.bottomboxtoptext}>{`${props.reportData && props.reportData[0]?.reviewName} ${props.reportData && props.reportData[0]?.reviewLast}`}</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>inspector name </Text>
                  </View>
                  {props?.reportData && props?.reportData[0]?.reviewSignature ? (
                    <View style={{ width: '30%', marginRight: '15px' }}>
                      <Image
                        style={{ width: '100px', marginLeft: '50px', marginBottom: -18 }}
                        source={`${process.env.REACT_APP_AWS_S3_LINK}/${props.reportData && props.reportData[0]?.reviewSignature}?x-request=xhr`}
                      />
                      <View style={styles.bottomboxBorder} />
                      <Text style={styles.bottomboxbootomText}>inspector signature</Text>
                    </View>
                  ) : (
                    <View style={{ width: '30%', marginRight: '15px' }}>
                      <Text style={styles.bottomboxtoptext}>{`${props?.reportData && props?.reportData[0]?.reviewName} ${
                        props.reportData && props.reportData[0]?.reviewLast
                      }`}</Text>
                      <View style={styles.bottomboxBorder} />
                      <Text style={styles.bottomboxbootomText}>inspector signature</Text>
                    </View>
                  )}

                  <View style={{ width: '30%' }}>
                    <Text style={styles.bottomboxtoptext}>299664</Text>
                    <View style={styles.bottomboxBorder} />
                    <Text style={styles.bottomboxbootomText}>state certification number</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.lastbottomText}>This certification expires on (1) year from inspection date</Text>
            </Page>
          </Document>
        }
        fileName="Vehicle-certificate.pdf"
      >
        {({ blob, url, loading, error }) => (
          <>
            {loading ? (
              <ClipLoader color={'#246DB5'} size={40} />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
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
            {console.log(error)}
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
  return {
    reportData: state.vehicleInstruction.vehicleCertificate,
    checksData: setOtherReportData(state.vehicleInstruction.vehicleCertificate, 'index_2'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadCertifcate);
