const puppeteer = require('puppeteer');

// 원피스 데이터 크롤링
async function onepieceCrawl() {
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--window-size=1920,1080',
            '--disable-notifications',
            '--no-sandbox',
            '--disable-setuid-sandbox',
        ],
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1080,
        height: 1080,
    });
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://ordsearch.net/mix/helper');
    const onepieceData = await page.evaluate(() => {
        let textArray = Array.from(document.querySelectorAll('tbody > tr > td:first-of-type > button')).map(
            (v) => v.textContent.replace(/\s{2,}/g,'')
        )

        let datasetArray = Array.from(document.querySelectorAll('tbody > tr > td:first-of-type > button')).map(
            (v) => String(v.dataset.mateTitle).match(/(<\/i> ).+?\)/g)
        )

        return textArray.map((v, i) => {
          return [
            v,
              datasetArray[i]
          ]
        });
    });
    await page.close();
    await browser.close();

    return { onepieceData };
}

module.exports.onepieceCrawl = onepieceCrawl;
