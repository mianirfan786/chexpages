export function setCompanies(companiesArray) {
  let updatedArray = [];
  companiesArray?.map((company) => {
    updatedArray.push({
      label: company.name,
      value: company.id,
    });
  });
  return updatedArray;
}
