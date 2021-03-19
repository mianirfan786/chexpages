export function setCompanies(companiesArray) {
  let updatedArray = [];
  companiesArray?.map((company) => {
    return updatedArray.push({
      label: company.name,
      value: company.id,
    });
  });
  return updatedArray;
}
