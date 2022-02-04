const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

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
    }
  },
};

/**
 * launch Google Chrome and run Lighthouse.
 * @param {string} url
 * @param {LH.Flags} flags
 * @param {LH.Config.Json} config
 * @returns {Promise<LH.RunnerResult>}
 */
async function launchChromeAndRunLighthouse(url, flags = {}, config = desktop) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {...flags, logLevel: 'info', output: 'json', port: chrome.port};

  return lighthouse(url, options, config).finally(() => chrome.kill());
}

module.exports = {
  launchChromeAndRunLighthouse,
};
