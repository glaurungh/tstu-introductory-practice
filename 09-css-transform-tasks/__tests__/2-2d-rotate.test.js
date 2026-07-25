const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 700,
    height: 700,
  },
};

test.describe('Card Flipping Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/2-2d-rotate.html');
    await page.setViewportSize(settings.viewport);
    await page.waitForTimeout(1000);
  });

  test('Initial state of the card', async ({ page }) => {
    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test('Finished state of the card', async ({ page }) => {
    await page.locator('.flipping-card').hover();
    await page.waitForTimeout(1000);

    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
