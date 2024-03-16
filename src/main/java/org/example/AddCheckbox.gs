function addCheckboxes() {
  const s = SpreadsheetApp.getActiveSpreadsheet();
  const apiList = s.getSheetByName("Public APIs List");
  const range = apiList.getRange("D:D");
  const values = range.getValues();

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] !== "") {
      // Arrays begin at 0, while row numbers in Sheets start from 1, hence i + 1.
      apiList.getRange(i + 1, 5).insertCheckboxes();
    }
  }
}
