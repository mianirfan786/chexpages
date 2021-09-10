/* eslint-disable */

import React, { useEffect } from "react";
import moment from "moment";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { ClipLoader } from 'react-spinners';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';
import { setLyftReportData } from '../../utils/functions';
// import { imageBaseUrl } from "../utils/api";
import TicketImg from '../../Assets/tickimg.png';
import LyftImg from '../../Assets/liftimg.png';
import Checkbox from "../../Assets/Checkbox.png"
import CheckBox from "../../Assets/lyftCheckBox.png"



const styles = StyleSheet.create({
  body: {
    paddingBottom: 65,
  },
  headerWidth: {
    // paddingHorizontal: 10,
    marginBottom: "25px",
  },
  header: {
    backgroundColor: "#00B3AD",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  californiaText: {
    color: "white",
    fontSize: "20px",
    textTransform: "uppercase",
  },
  boxContainer: {
    padding: "10@s",
  },
  lyftdrivertextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "15@s",
  },
  boxWidth: {
    paddingHorizontal: 20,
    // paddingTop: 10,
  },
  lyftdriverText: {
    fontSize: "30px",
    fontStyle: "sans-serif",
    fontWeight: "bold",
    lineHeight: "42@s",
    color: "black",
    // fontFamily: "sans-serif",
    float: "left"
  },
  allfieldsText: {
    color: "#8E8B8C",
    fontSize: "20px",
    fontWeight: "400",
    marginLeft: "200px",
  },
  nameinputContainer: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    marginTop: "10@s",
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "30px"
  },
  nameinputContain: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    marginTop: "10@s",
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px"
  },
  lyftdriverName: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23@s",
    color: "#47484F",
    marginBottom: 0,
    // width:"100px",
    marginTop: "3@s",
  },
  lyftInspectionDate: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23@s",
    color: "#47484F",
    marginBottom: 0,
    // width:"100px",
    marginTop: "3@s",
  },
  lyftdriver: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23@s",
    color: "#47484F",
    marginBottom: 0,
    // width:"100px",
    marginTop: "3@s",
    borderTop: "3px solid #A6A4A4",
    paddingTop: "5px"
  },
  nameText: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "23@s",
    color: "black",
    // width: "100%",
    borderBottom: "3px solid #A6A4A4"
  },
  threeinputfieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "30px"
  },
  nameinputContainerOne: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    marginTop: "10@s",
    width: "30%",
    marginRight: "10@s",
  },
  nameinputContainerTwo: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    marginTop: "10@s",
    width: "30%",
    marginRight: "10@s",
  },
  nameinputContainerThree: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    marginTop: "10@s",
    width: "40%",
  },
  threeinputFields: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "23@s",
    color: "black",
    borderBottom: "3px solid #A6A4A4"
  },
  licenseplateContainer: {
    // borderWidth: 1,
    // borderColor: "#47484F",
    width: "45%",
    marginRight: "10@s",
  },
  codeText: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "300",
    lineHeight: "23@s",
    color: "black",
    marginLeft: "50%",
  },
  vinContainer: {
    fontSize: "12px",
    fontWeight: "30",
    fontStyle: "normal",
    color: "black",
  },
  twoinputfieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10@s",
  },
  vintopBorder: {
    borderTopWidth: 1,
    borderTopColor: "#47484F",
    width: "100%",
  },
  topText: {
    marginTop: "30px",
    fontSize: "12px",
    paddingLeft: "8px",
    paddingRight: "10px",
  },
  vehicleinspectionPadding: {
    paddingHorizontal: "30@s",
    paddingTop: "10@s",
  },
  checkboxesmainContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "30@s",
  },
  checkboxesmainContainerTwo: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "30@s",
    marginTop: "10@s",
  },
  inspectionfirstContainer: {
    width: "94%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inspectionsecondContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inspectionText: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "#716E6E",
    textTransform: "uppercase",
  },
  inspectiontextTwo: {
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "#716E6E",
    marginLeft: "15@s",
    textTransform: "uppercase",
  },
  passText: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "#716E6E",
    marginRight: "15@s",
    textTransform: "uppercase",
  },
  failText: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "#716E6E",
    textTransform: "uppercase",
  },
  passfailContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  numbersText: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "#716E6E",
  },
  detailsText: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "21@s",
    color: "black",
    marginLeft: "5px",
  },
  failpassbox: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "black",
    marginLeft: "15@s",
    width: "92%",
    padding: "10@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    height: "50px",
    top: 10,
  },

  boxinspectionText: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "21@s",
    color: "black",
    textTransform: "uppercase",
  },
  circleoneText: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "21@s",
    color: "#716E6E",
    marginTop: "5px",
  },
  boxpassText: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "21@s",
    color: "black",
  },
  orangeCircle: {
    borderWidth: 7,
    borderColor: "#FC6522",
    borderRadius: "50%",
    height: "75px",
    width: "75px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boxfailText: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "21@s",
    color: "black",
  },
  boxinspectionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tobecompletedContainer: {
    backgroundColor: "#E4E5E7",
    padding: "10@s",
    flexDirection: "row",
    alignItems: "center",
  },
  tobecompletedWidth: {
    paddingHorizontal: "30@s",
    marginTop: "50@s",
  },
  tobecompletedtextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tobecompletedText: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "23@s",
    color: "black",
    textDecoration: "underline",
    textTransform: "uppercase",
  },
  fieldsText: {
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "21@s",
    color: "#716E6E",
    textTransform: "uppercase",
  },

  inpectionText: {
    fontSize: "16px",
    color: "#47484F",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  documentexpiryText: {
    fontSize: "12px",
    color: "#47484F",
  },
  dateText: {
    fontSize: "16px",
    letterSpacing: "1px",
  },
  datemainContainer: {
    marginTop: "10@s",
    marginLeft: "52%",
  },
  namesfieldscontainer: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "18@s",
    alignItems: "flex-end",
  },
  borderWidth: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  topName: {
    fontSize: "14px",
    color: "black",
    marginLeft: "12@s",
  },
  bottomName: {
    fontSize: "12px",
    color: "#47484F",
    textTransform: "uppercase",
  },
  bottomPara: {
    paddingHorizontal: "30@s",
    fontSize: 10,
    marginTop: "15@s",
    color: "#716E6E",
  },
  tickpassContainer: {
    borderWidth: 1,
    borderColor: "black",
    height: "14px",
    width: "14px",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "28px",
  },
  tickfailContainer: {
    borderWidth: 1,
    borderColor: "black",
    height: "14px",
    width: "14px",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "28px",
  },
  inspectiondateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
});

function LyftCertificateArizona(props) {

  // const { checksData, reportData, isLoading, handleReload } = props;

  const { checksData, reportData, isLoading, handleModal, SetModal } = props;
  console.log('Props in lyft :: ', props);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const getToken = () => localStorage.getItem('token') || null;
    if (getToken) {
      props.getVehicleCertificate({ id: props?.id, companyId: props.companyId }, props.setLoading, 'template3');
    } else {
      props.history.push('/login');
    }
  }, [props?.companyId]);

  const handleReload = () => {
    SetModal(false);
    localStorage.setItem('tabStatus', 'REVIEWED');
    setTimeout(function () {
      handleModal();
    }, 200);
  };

  return (
    <div className="App">
      <PDFDownloadLink
        wrap={false}
        document={
          <Document>
            <Page size="A3" style={styles.body}>
              <View style={styles.headerWidth}>
                <View style={styles.header}>
                  <Image style={{ width: "40px" }} source={LyftImg} />
                  <Text style={styles.californiaText}>
                    Vehicle Inspection
                  </Text>
                </View>
              </View>
              <View style={styles.boxWidth}>
                <View style={styles.boxContainer}>
                  <View style={styles.lyftdrivertextContainer}>
                    <Text style={styles.lyftdriverText}>LYFT DRIVER INFO</Text>
                    <Text style={styles.allfieldsText}>
                      ALL FIELDS ARE MANDATORY
                    </Text>
                  </View>

                  <View style={styles.nameinputContainer}>
                    <View style={{ width: "50%", marginRight: "10px" }}>
                      <Text style={styles.nameText}>
                        {reportData && reportData?.Username}
                      </Text>
                      <Text style={styles.lyftdriverName}>LYFT DRIVER NAME</Text>
                    </View>
                    <View style={{ width: "50%", marginLeft: "10px" }}>
                      <Text style={styles.nameText}>
                        {reportData && reportData?.Useremail}
                      </Text>
                      <Text style={styles.lyftdriverName}>EMAIL ADDRESS</Text>
                    </View>
                  </View>
                  <View style={styles.threeinputfieldContainer}>
                    <View style={styles.nameinputContainerOne} style={{ width: "45%", marginRight: "10px" }}>
                      <Text style={styles.threeinputFields}>
                        {reportData && reportData.licensePlateNumber}
                      </Text>
                      <Text style={styles.lyftdriverName}>LICENSE PLATE #</Text>
                    </View>
                    <View style={styles.nameinputContainerTwo} style={{ width: "55%", marginLeft: "10px" }}>
                      <Text style={styles.threeinputFields}>
                        {reportData && reportData.vin}
                      </Text>
                      <Text style={styles.lyftdriverName}>VIN #</Text>
                    </View>
                  </View>
                  <View style={styles.twoinputfieldContainer}>
                    <View style={styles.licenseplateContainer} style={{ width: "45%", marginRight: "12px" }}>
                      <Text style={styles.threeinputFields}>
                        {reportData && reportData.make}
                      </Text>
                      <Text style={styles.lyftdriverName}>VEHICLE MAKE</Text>
                    </View>
                    <View style={{ width: "32%", marginRight: "10px", marginLeft: "5px" }}>
                      <Text style={styles.threeinputFields}>
                        {reportData && reportData.model}
                      </Text>
                      <Text style={styles.lyftdriverName}>VEHICLE MODEL</Text>
                    </View>
                    <View style={{ width: "20%", marginLeft: "18px" }}>
                      <Text style={styles.threeinputFields}>
                        {reportData && reportData.year}
                      </Text>
                      <Text style={styles.lyftdriverName}>VEHICLE YEAR</Text>
                    </View>
                  </View>
                  <View style={styles.nameinputContain}>
                    <View style={{ width: "45%", marginRight: "10px", marginTop: "15px" }}>
                      {/* <Image
                          style={{
                            position: "absolute",
                            height: "100px",
                            width: "100px",
                            top: "-50px",
                            right: "100px",
                          }}
                          src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${
                            reportData && reportData.Inspectorsignature
                          }?x-request=xhr`}
                        /> */}
                      <Text style={styles.lyftdriver}>LYFT DRIVER SIGNATURE</Text>
                    </View>
                    <View style={{ width: "55%", marginLeft: "10px" }}>
                      <Text style={styles.nameText}>
                        {reportData && reportData?.Userphone}
                      </Text>
                      <Text style={styles.lyftdriverName}>LYFT DRIVER PHONE NUMBER</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: "20@s" }}>
                {/* <Text style={styles.inspectionpointsText}>INSPECTION POINTS</Text> */}
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                  <Image
                    style={{
                      width: "100%",
                      marginLeft: -10,
                      // marginTop: "20px",
                    }}
                    source={CheckBox}
                  />
                </View>
              </View>
              {/* <View style={styles.vehicleinspectionPadding}>
                <View style={styles.lyftdrivertextContainer}>
                  <Text style={styles.lyftdriverText}>VEHICLE INSPECTION</Text>
                </View>
              </View>
              <View style={{ marginLeft: "20@s" }}>
                <Text style={styles.inspectionpointsText}>INSPECTION POINTS</Text>
                <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
                  <Image
                    style={{
                      width: "100%",
                      marginLeft: -10,
                      marginTop: "20px",
                    }}
                    source={Checkbox}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row", paddingHorizontal: "30px" }}>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <View style={styles.inspectionfirstContainer}>
                    <Text style={styles.inspectionText}>Inspection Point</Text>
                    <View style={styles.passfailContainer}>
                      <Text style={styles.passText}>Pass</Text>
                      <Text style={styles.failText}>Fail</Text>
                    </View>
                  </View>

                  {checksData?.map((check, index) =>
                    index <= 11 ? (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={styles.numbersText}>{index + 1}.</Text>
                          <Text style={styles.detailsText}>{check.Check.name}</Text>
                        </View>
                        <View style={styles.passfailContainer}>
                          {check.status == true || check.status == 1 ? (
                            <View style={styles.tickpassContainer}>
                              <Image
                                style={{ width: "16px", marginLeft: "2px" }}
                                source={TicketImg}
                              />
                            </View>
                          ) : (
                            <View style={styles.tickpassContainer}></View>
                          )}
                          {check.status == false || check.status == 0 ? (
                            <View style={styles.tickfailContainer}>
                              <Image
                                style={{ width: "16px", marginLeft: "2px" }}
                                source={TicketImg}
                              />
                            </View>
                          ) : (
                            <View style={styles.tickfailContainer}></View>
                          )}
                        </View>
                      </View>
                    ) : null
                  )}
                </View>

                <View style={{ flexDirection: "column", width: "50%" }}>
                  <View style={styles.inspectionfirstContainer}>
                    <Text style={styles.inspectionText}>Inspection Point</Text>
                    <View style={styles.passfailContainer}>
                      <Text style={styles.passText}>Pass</Text>
                      <Text style={styles.failText}>Fail</Text>
                    </View>
                  </View>

                  {checksData?.map((check, index) =>
                    index > 11 ? (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text style={styles.numbersText}>{index + 1}.</Text>
                          <Text style={styles.detailsText}>{check.Check.name}</Text>
                        </View>
                        <View style={styles.passfailContainer}>
                          {check.status == true || check.status == 1 ? (
                            <View style={styles.tickpassContainer}>
                              <Image
                                style={{ width: "16px", marginLeft: "2px" }}
                                source={TicketImg}
                              />
                            </View>
                          ) : (
                            <View style={styles.tickpassContainer}></View>
                          )}
                          {check.status == false || check.status == 0 ? (
                            <View style={styles.tickfailContainer}>
                              <Image
                                style={{ width: "16px", marginLeft: "2px" }}
                                source={TicketImg}
                              />
                            </View>
                          ) : (
                            <View style={styles.tickfailContainer}></View>
                          )}
                        </View>
                      </View>
                    ) : null
                  )}

                  <View
                    style={[
                      styles.inspectionsecondContainer,
                      { marginTop: "20px", marginLeft: -10 },
                    ]}
                  >
                    <View style={styles.failpassbox}>
                      <View style={styles.boxinspectionContainer}>
                        <Text style={styles.boxinspectionText}>
                          VEHICLE INSPECTION
                        </Text>
                        <Text style={styles.circleoneText}>
                          (Please circle one)
                        </Text>
                      </View>
                      {reportData &&
                        reportData.finalStatus === "pass" ? (
                        <View style={styles.orangeCircle}>
                          <Text style={styles.boxpassText}>PASS</Text>
                        </View>
                      ) : (
                        <Text style={styles.boxpassText}>PASS</Text>
                      )}
                      {reportData &&
                        reportData.finalStatus === "fail" ? (
                        <View style={styles.orangeCircle}>
                          <Text style={styles.boxpassText}>FAIL</Text>
                        </View>
                      ) : (
                        <Text style={styles.boxpassText}>FAIL</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View> */}
              <View style={styles.tobecompletedWidth}>
                <View style={styles.tobecompletedContainer}>
                  <View style={{ width: "50%", marginLeft: "20px", marginTop: "10px", marginRight: "20px" }}>
                    <Text>TO BE COMPLETED BY INSPECTOR</Text>
                  </View>
                </View>
                <View style={styles.tobecompletedContainer}>
                  <View style={{ width: "50%", marginLeft: "20px", marginRight: "20px" }}>
                    <Text style={styles.threeinputFields}>Chex.AI</Text>
                    <Text style={styles.lyftdriverName}>COMPANY / FACILITY NAME</Text>
                  </View>
                  <View style={{ width: "50%", marginRight: "20px" }}>
                    <Text style={styles.threeinputFields}>{`${reportData && reportData.Inspectorname
                      } ${reportData && reportData.InspectorlastName
                      }`}</Text>
                    <Text style={styles.lyftdriverName}>INSPECTOR NAME</Text>
                  </View>
                </View>
                <View style={styles.tobecompletedContainer}>
                  <View style={{ width: "50%", marginRight: "20px", marginLeft: "20px", marginBottom: "10px" }}>
                    <Text style={styles.threeinputFields}>{reportData && reportData.stateAddress}</Text>
                    <Text style={styles.lyftdriverName}>COMPANY / FACILITY ADDRESS</Text>
                  </View>
                  <View style={{ width: "50%", marginRight: "20px", marginBottom: "10px" }} >
                    <Text style={styles.threeinputFields}>
                      {moment(
                        new Date(
                          reportData &&
                          reportData?.updatedAt
                        )
                      ).format("MM/ DD /YYYY")}
                    </Text>
                    <Text style={styles.lyftInspectionDate}>INSPECTION DATE(document expires one year from this date)</Text>
                  </View>
                </View>
              </View>
              {/*<Text style={styles.bottomPara}>*/}
              {/*  Applicants who do not match the photo on their driver’s license*/}
              {/*  or do not have the proper documents, cannot complete an*/}
              {/*  inspection. Failing inspections can only be remedied by the same*/}
              {/*  shop on the same day. If an applicant fails the inspection and*/}
              {/*  is unable to fix the issues on the spot, a new appointment must*/}
              {/*  be made, and a new inspection form must be used.*/}
              {/*</Text>*/}
              {/*<Text style={styles.bottomPara}>*/}
              {/*  This inspection form reflects a 19 point inspection only on the*/}
              {/*  date of the inspection listed above. For purposes of this*/}
              {/*  inspection, the wheels were not removed from the vehicle, and*/}
              {/*  the vehicle was not put on a lift, nor was it checked for*/}
              {/*  emissions.*/}
              {/*</Text>*/}
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
              <div
                style={{
                  display: 'flex', marginTop: '30px', flexDirection: 'row', alignItems: 'center'
                }}
              >
                <div
                  onClick={() => {
                    handleReload();
                  }}
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
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  console.log('State Lyft Arizona: ', state);
  return {
    reportData: state.vehicleInstruction.lyftVehicleCertificate,
    checksData: setLyftReportData(state.vehicleInstruction.lyftVehicleCertificate?.Files),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LyftCertificateArizona);
