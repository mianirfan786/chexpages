export function setCompanies(companiesArray) {
  let updatedArray = [];
  companiesArray?.map((company) => {
    return updatedArray.push({
      label: `${company.name}`,
      value: company.id,
    });
  });
  return updatedArray;
}

export function setReportData(array) {
  let vehicleArray = [];
  array.map((vehicle) => {
    vehicle.vehicleChecks.map((check) => {
      if (check.displayOnCertificate) {
        vehicleArray.push({
          name: check.name,
          status: check.status,
        });
      }
    });
  });
  return vehicleArray;
}
