/**
 * Jest configuration file, see link for more information:
 * https://jestjs.io/docs/en/configuration
 *
 * @type { import("@jest/types").Config.InitialOptions }
 */
module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'jest-preset-angular',
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  transformIgnorePatterns: ['^.+\\.js$'],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageDirectory: 'build/coverage',
  collectCoverageFrom: ['src/app/**/*.ts']
};
