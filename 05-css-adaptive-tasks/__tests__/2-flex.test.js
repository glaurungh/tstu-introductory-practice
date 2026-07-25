const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 70,
    fullPage: true,
  },
};

test.describe('Product cards Template', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/2-flex.html');
  });

  test('Product cards with a viewport width of 1500', async ({ page }) => {
    await page.setViewportSize({ width: 1500, height: 400 });

    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

      expect(template).toMatchSnapshot();
  });

  test('Product cards with a viewport width of 1200px', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 400 });

    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

      expect(template).toMatchSnapshot();
  });

  test('Product cards with a viewport width of 850px', async ({ page }) => {
    await page.setViewportSize({ width: 850, height: 800 });

    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

      expect(template).toMatchSnapshot();
  });

  test('Product cards with a viewport width of 300px', async ({ page }) => {
    await page.setViewportSize({ width: 300, height: 1200 });

    const template = await page
      .locator('html')
      .screenshot(settings.screenshot);

      expect(template).toMatchSnapshot();
  });
});
