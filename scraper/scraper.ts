const { PrismaClient } = require('@prisma/client');
const puppeteer = require("puppeteer");
const prisma = new PrismaClient()

const url = "https://www.sreality.cz/hledani/prodej/byty?strana=";
// interface result {
//   name: string;
//   locality: string;
//   imgUrls: string[];
// };

const scrapePage = async (url: string) => {
  // let results: result[] = []
  // setup page for scraping
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: "networkidle2"});

  // scraping
  for(let i = 1; i < 20; i++) {
    let imgUrls: string[] = [];
    // img urls
    await page.waitForSelector("span.locality.ng-binding");
    for(let x = 1; x < 7; x++) {
      let [element] = await page.$x(`/html/body/div[2]/div[1]/div[2]/div[3]/div[3]/div/div/div/div/div[3]/div/div[${i}]/preact/div/div/a[${x}]/img`);
      try {
        let src = await element.getProperty("src");
        let imgUrl = await src.jsonValue();
        imgUrls.push(imgUrl);

      } catch (error) {
        let imgUrl = "No Img";
        imgUrls.push(imgUrl);
      }
    }
    // names
    const names = await page.evaluate(() => Array.from(document.querySelectorAll("span.name.ng-binding"), element => element.textContent));
    // locality
    const localities = await page.evaluate(() => Array.from(document.querySelectorAll("span.locality.ng-binding"), element => element.textContent));

    // results.push({
    //   name: names[i],
    //   locality: localities[i],
    //   imgUrls: imgUrls
    // })

    await prisma.flats.create({
      data: {
        name: names[i],
        locality: localities[i],
        imgUrls: imgUrls
      },
    })
  }

  // cleanup
  await browser.close();
  // return results;
}

// Scraping
for(let i = 1; i < 27; i++) {
  scrapePage(url + String(i));
}