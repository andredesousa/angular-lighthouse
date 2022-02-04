const { launchChromeAndRunLighthouse } = require('../lh.config');
const { GenericContainer } = require('testcontainers');

describe('Audit via Lighthouse', () => {
  let lighthouse;
  let container;
  let baseUrl;

  beforeAll(async () => {
    container = await new GenericContainer('angular13:latest')
      .withExposedPorts(8080)
      .start();

    baseUrl = `http://localhost:${container.getMappedPort(8080)}`;

    lighthouse = await launchChromeAndRunLighthouse(baseUrl);
  });

  afterAll(async () => {
    await container.stop();
  });

  it('performance should score 70+', () => {
    expect(lighthouse.lhr.categories.performance.score).toBeGreaterThanOrEqual(0.8);
  });

  it('accessibility should score 80+', () => {
    expect(lighthouse.lhr.categories.accessibility.score).toBeGreaterThanOrEqual(0.8);
  });

  it('best practices should score 80+', () => {
    expect(lighthouse.lhr.categories['best-practices'].score).toBeGreaterThanOrEqual(0.8);
  });

  it('seo should score 80+', () => {
    expect(lighthouse.lhr.categories.seo.score).toBeGreaterThanOrEqual(0.8);
  });
});
