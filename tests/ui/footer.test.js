const { test, expect } = require('@playwright/test');

test('Check footer', async ({ page }) => {
    //await page.goto('http://localhost:8080');  
    await page.goto('https://kuzmanovb-prepare-retake-exam1.onrender.com');  
    const footer = await page.$('div');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps Retake Exam');
  });
  