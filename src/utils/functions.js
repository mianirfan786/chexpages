/* eslint-disable */

export function setCompanies(companiesArray) {
  let updatedArray = [];
  companiesArray?.data?.map((company) => {
    return updatedArray.push({
      label: `${company.name}`,
      value: company.id,
    });
  });
  return updatedArray;
}

export function setLyftReportData(array) {
  let vehicleArray = [];
  array?.map((vehicle) => {
    vehicle?.InspectionChecks.map((check) => {
      if (check?.Check?.displayOnCertificate) {
        vehicleArray.push(check);
      }
    });
  });
  vehicleArray.sort((a, b) => a?.Check?.index_3 - b?.Check?.index_3);
  return vehicleArray;
}

export function setOtherReportData(array) {
  let vehicleArray = [];
  array?.map((vehicle) => {
    vehicle?.InspectionChecks.map((check) => {
      if (check?.Check?.displayOnCertificate) {
        vehicleArray.push(check);
      }
    });
  });
  console.log("vehicleArray : ", vehicleArray);
  vehicleArray.sort((a, b) => a.Check?.index_2 - b.Check?.index_2);
  return vehicleArray;
}
