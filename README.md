# API List Management README

## Overview

This Apps Script automatically generates checkboxes for each API item and compares the two API lists to identify newly added and removed items.

## Examples

![Demo Video](https://lh3.googleusercontent.com/pw/AP1GczPlFc3FdBiZjy5vekh4BlE2l8BFVw42fAYhMzp28DpB5S3tHR8_XTNZsvk7mS87fzvvPCQUmMzBDZzvAFZ-UiGkzhQxWvM0QzYEZnmVZdcJ5OlY3Sg=w400)

## [Demo Video](https://www.youtube.com/watch?v=udPimBdal4s)

You may view the [Example Google Sheets file](https://docs.google.com/spreadsheets/d/1NapueIqzw6aMey19nJJFXQCmE9VHO0c-zfG7cQQIZCE/edit#gid=1127450106).
Please note that the file is view-only and you should make a copy of it if you wish to interact with it.

## Public APIs List Sheet

The **<u>Public APIs List</u>** sheet organizes information about the APIs. The layout is as follows:

1. **Row 1**: Serves as the **TITLE** row.
2. **Column B (starting from B2)**: Enter the list of APIs here. This column is used for the main API category.
3. **Column C**: Specifies the main API subcategory.
4. **Column D**: Contains the API name.
5. **Column E**: Will be automatically filled with checkboxes by the script if there is a value in Column D.

### Automation Script (AddCheckbox.gs)

This script dynamically adds checkboxes in Column E for each API listed in Column D.

## Compare Diff API Sheet

This sheet is used to compare API lists between the current and the last update:

1. **Column A2 (Last Update)**: Enter the API list data as of the last update here.
2. **Column B2 (Latest Update)**: Enter the latest API list data for comparison.

### Automation Script (CompareDiff.gs)

This script identifies the comparison between the API lists in Columns A and B, listing new and removed APIs since the last update.

## Note

The **<u>Public APIs List**</u> spreadsheet comes with predefined formulas for ease of tracking:

- `=COUNTIF(D:D, "<>")`: counts all listed APIs.
- `=(COUNTIF(E:E, TRUE))/H6`: calculates the percentage of tested APIs.

These formulas auto-update to reflect changes, facilitating the management and reporting of API coverage.


