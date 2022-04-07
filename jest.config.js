const DEBUG_MODE = process.argv.includes('--runInBand') || process.argv.includes('-t');
const DEBUG_CONFIG = ['<rootDir>/src/test.ts'];

/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: DEBUG_MODE ? DEBUG_CONFIG : [],
  globalSetup: 'jest-preset-angular/global-setup',
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageDirectory: 'build/coverage',
  collectCoverageFrom: ['src/app/**/*.ts']
};
