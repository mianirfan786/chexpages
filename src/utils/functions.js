export function setCompanies(companiesArray) {
  let updatedArray = [];
  companiesArray?.map((company) => {
    return updatedArray.push({
      label: `${company.name}......+$4.99`,
      value: company.id,
    });
  });
  return updatedArray;
}
