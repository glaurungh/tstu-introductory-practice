const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

test.describe("Bootstrap Grid Template", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/1-grid.html");
    await page.waitForTimeout(300);
  });

  test("Template Test", async ({ page }) => {
    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });
});
