const assert = require('assert');
const CLIEngine = require("eslint").CLIEngine;
const cli = new CLIEngine();

const goodReport = cli.executeOnFiles([
  './**/good.js'
]);

goodReport.results.forEach((goodReportForOneFile) => {
  assert.equal(goodReportForOneFile.errorCount, 0, `${goodReportForOneFile.filePath} should have no error`);
});

const badReport = cli.executeOnFiles([
  './**/bad.js'
]);

badReport.results.forEach((badReportForOneFile) => {
  assert(badReportForOneFile.errorCount > 0, `${badReportForOneFile.filePath} should have at least one error`);
});

console.log('Test passed!');
