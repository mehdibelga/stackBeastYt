const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("span [title='Lwalida']");
  const target = await page.$("span [title='Lwalida']");
  await target.click();
  const inp = await page.$(<div role="textbox" class="_13NKt copyable-text selectable-text" contenteditable="true" data-tab="9" dir="ltr" spellcheck="true"></div>);
  for (let i = 0; i < 50; i++) {
    await inp.type("salam mama");
    await page.keyboard.press("Enter");
  }
}

scrape("https://web.whatsapp.com");
