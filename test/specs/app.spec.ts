import { GenericContainer, StartedTestContainer } from 'testcontainers';
import { RunnerResult } from 'lighthouse/types/externs';
import { launchChromeAndRunLighthouse, generateReportHtml } from '../lh.helper.js';

describe('Audit via Lighthouse', () => {
  let container: StartedTestContainer;
  let baseUrl: string;
  let lighthouse: RunnerResult;

  beforeAll(async () => {
    container = await new GenericContainer('angular13:latest')
      .withExposedPorts(8080)
      .start();

    baseUrl = `http://localhost:${container.getMappedPort(8080)}`;

    lighthouse = await launchChromeAndRunLighthouse(baseUrl);
  });

  afterAll(async () => {
    await container.stop();
    await generateReportHtml('home-page', lighthouse.lhr);
  });

  it('performance should score 90+', () => {
    expect(lighthouse.lhr.categories['performance'].score).toBeGreaterThanOrEqual(0.9);
  });

  it('accessibility should score 90+', () => {
    expect(lighthouse.lhr.categories['accessibility'].score).toBeGreaterThanOrEqual(0.9);
  });

  it('best practices should score 90+', () => {
    expect(lighthouse.lhr.categories['best-practices'].score).toBeGreaterThanOrEqual(0.9);
  });

  it('seo should score 90+', () => {
    expect(lighthouse.lhr.categories['seo'].score).toBeGreaterThanOrEqual(0.9);
  });
});
