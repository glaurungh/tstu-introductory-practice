const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1280,
    height: 768,
  },
};

test.describe('Cards Component Testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/3-2d-scale.html');
    await page.setViewportSize(settings.viewport);
    await page.waitForTimeout(500);
  });

  test('The initial state of the component', async ({ page }) => {
    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });

  test('Hovering over the Frontend card', async ({ page }) => {
    await page.locator('.card:nth-child(2)').hover();
    await page.waitForTimeout(500);

    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
