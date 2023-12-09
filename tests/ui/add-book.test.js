const { test, expect } = require('@playwright/test');

test('Check add book page', async ({ page }) => {
    //await page.goto('http://localhost:8080/add-book');
    await page.goto('https://kuzmanovb-prepare-retake-exam1.onrender.com/add-book');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  