const chromeLauncher = require('chrome-launcher');
const lighthouse = require('lighthouse');
const ReportGenerator = require('lighthouse/report/generator/report-generator');
const desktop = require('lighthouse/lighthouse-core/config/desktop-config')
const fs = require('fs');

/**
 * Launch Google Chrome and run Lighthouse.
 * @param {string} url
 * @param {Flags} flags
 * @param {Config.Json} config
 * @returns {Promise<RunnerResult>}
 */
async function launchChromeAndRunLighthouse(url, flags = {}, config = desktop) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {...flags, logLevel: 'info', output: 'json', port: chrome.port};

  return lighthouse(url, options, config).finally(() => chrome.kill());
}

/**
 * Returns the standalone report HTML as a string with the report JSON.
 * @param {string} filename
 * @param {LHResult} lhr
 */
async function generateReportHtml(filename, lhr) {
  fs.mkdirSync('build/audit', { recursive: true });
  fs.writeFileSync(`build/audit/${filename}.html`, ReportGenerator.generateReportHtml(lhr));
}

module.exports = {
  launchChromeAndRunLighthouse,
  generateReportHtml
};
