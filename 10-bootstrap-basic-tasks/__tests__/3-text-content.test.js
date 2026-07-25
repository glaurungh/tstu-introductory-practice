const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

test.describe("Adaptive Bootstrap Blog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/3-text-content.html");
    await page.waitForTimeout(300);
  });

  test("Page with a viewport of 1280px", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 500 });
    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });

  test("Page with a viewport of 580px", async ({ page }) => {
    await page.setViewportSize({ width: 580, height: 500 });
    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });
});
