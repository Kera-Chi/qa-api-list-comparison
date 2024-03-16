function listUniqueValues() {
  const s = SpreadsheetApp.getActiveSpreadsheet();
  const compareDiff = s.getSheetByName("Compare Diff API");

  const rangeA = compareDiff.getRange("A2:A" + compareDiff.getLastRow()); //Default A1 is title
  const valuesA = rangeA.getValues().flat().filter(String); // Retrieve the values from column A, flatten the array, and filter out empty strings

  const rangeB = compareDiff.getRange("B2:B" + compareDiff.getLastRow());
  const valuesB = rangeB.getValues().flat().filter(String);

  // Filter the values in A that are not present in B
  const uniqueInA = valuesA.filter(function (value) {
    return valuesB.indexOf(value) === -1;
  });
  // Filter the values in B that are not present in A
  const uniqueInB = valuesB.filter(function (value) {
    return valuesA.indexOf(value) === -1;
  });

  compareDiff.getRange("C:C").clear();
  compareDiff.getRange("D:D").clear();

  // column C lists deleted APIs
  compareDiff.getRange(1, 3).setValue("Deleted APIs");
  if (uniqueInA.length > 0) {
    compareDiff.getRange(2, 3, uniqueInA.length, 1).setValues(
      uniqueInA.map(function (value) {
        return [value];
      })
    );
  }

  // column D lists new APIs
  compareDiff.getRange(1, 4).setValue("New APIs");
  if (uniqueInB.length > 0) {
    compareDiff.getRange(2, 4, uniqueInB.length, 1).setValues(
      uniqueInB.map(function (value) {
        return [value];
      })
    );
  }
}
