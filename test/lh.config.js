const chromeLauncher = require('chrome-launcher');
const lighthouse = require('lighthouse');
const ReportGenerator = require('lighthouse/report/generator/report-generator');
const fs = require('fs');

/**
 * lighthouse desktop configuration.
 * @tutorial https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
 * @type {LH.Config.Json}
 */
const desktop = {
  extends: 'lighthouse:default',
  settings: {
    formFactor: 'desktop',
    screenEmulation: {
      mobile: false,
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      disabled: false,
    },
    throttling: {
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  },
};

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
