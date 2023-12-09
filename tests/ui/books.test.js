const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    //await page.goto('http://localhost:8080/books');
    await page.goto('https://kuzmanovb-prepare-retake-exam1.onrender.com/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  