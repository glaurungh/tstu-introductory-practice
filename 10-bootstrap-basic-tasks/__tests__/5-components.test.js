const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
};

test.describe("Bootstrap Form Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/5-components.html");
    await page.waitForTimeout(300);
  });

  test("Bootstrap Form", async ({ page }) => {
    const template = page.locator("[data-testing]");
    expect(await template.screenshot(settings.screenshot)).toMatchSnapshot();
  });
});
