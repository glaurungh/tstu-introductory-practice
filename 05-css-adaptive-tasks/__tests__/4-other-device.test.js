const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 90,
    fullPage: true,
  },
  viewport: {
    width: 800,
    height: 400,
  },
};

test.describe('Terminal Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/4-other-device.html');
    await page.setViewportSize(settings.viewport);
  });

  test('Page with a viewport of 800px', async ({ page }) => {
    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test('Page with a viewport of 800px. Print version', async ({ page }) => {
    await page.emulateMedia({ media: 'print' });

    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
