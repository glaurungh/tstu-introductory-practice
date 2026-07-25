const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

test.describe("Bootstrap Table Professions", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/4-table.html");
    await page.waitForTimeout(300);
  });

  test("Table Test", async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 500 });
    expect(await page.screenshot(settings.screenshot)).toMatchSnapshot();
  });
});
