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
    vehicle?.vehicleChecks.map((check) => {
      if (check.displayOnCertificate) {
        vehicleArray.push(check);
      }
    });
  });
  vehicleArray.sort((a, b) => a.index_3 - b.index_3);
  return vehicleArray;
}

export function setOtherReportData(array) {
  let vehicleArray = [];
  array?.map((vehicle) => {
    vehicle?.vehicleChecks.map((check) => {
      if (check.displayOnCertificate) {
        vehicleArray.push(check);
      }
    });
  });
  vehicleArray.sort((a, b) => a.index_2 - b.index_2);
  return vehicleArray;
}
