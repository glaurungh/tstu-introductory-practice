const { test, expect } = require('@playwright/test');

const settings = {
  screenshot: {
    type: 'jpeg',
    quality: 100,
    fullPage: true,
  },
  viewport: {
    width: 900,
    height: 500,
  },
};

test.describe('Shadow Text Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/4-2d-skew.html');
    await page.setViewportSize(settings.viewport);
    await page.waitForTimeout(1000);
  });

  test('The initial state of the component', async ({ page }) => {
    const template = await page
      .screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
