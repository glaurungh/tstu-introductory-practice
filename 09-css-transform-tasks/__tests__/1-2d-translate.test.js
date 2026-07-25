const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1920,
    height: 1080,
  },
};

test.describe('Modal Component Template', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/1-2d-translate.html');
    await page.setViewportSize(settings.viewport);
  });

  test('Page with a viewport width of 1920px', async ({ page }) => {
    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test('Page with a viewport width of 720px', async ({ page }) => {
    await page.setViewportSize({ width: 720, height: 1080 });

    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
