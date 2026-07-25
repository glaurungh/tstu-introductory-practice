const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

test.describe.serial("Adaptive Bootstrap grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/2-adaptive.html");
    await page.waitForTimeout(300);
  });

  test("Page with a viewport of 1280px", async ({ page }) => {
    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });

  test("Page with a viewport of 850px", async ({ page }) => {
    await page.setViewportSize({
      width: 850,
      height: 100,
    });

    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });

  test("Page with a viewport of 460px", async ({ page }) => {
    await page.setViewportSize({
      width: 460,
      height: 100,
    });

    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });
});
