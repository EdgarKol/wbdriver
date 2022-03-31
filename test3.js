const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
    var searchString = "Jope";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");
    await driver.manage().window().maximize();

    // add item to wishlist
    setTimeout(async function() {
        await driver
            .findElement(By.className("action towishlist"))
            .sendKeys(searchString, Key.RETURN);
    }, 4000);

    // goes to wishlist
    setTimeout(async function() {
        await driver
            .findElement(By.className("action wish showminiwishlist"))
            .click();
    }, 8000);

    setTimeout(async function() {
        await driver
            .findElement(
                By.xpath('//*[@id="miniwishlist-content-wrapper"]/div/div/div/button')
            )
            .sendKeys(searchString, Key.ENTER);
    }, 10000);

    setTimeout(async function() {
        await driver
            .findElement(
                By.xpath("/html/body/div[2]/main/div[2]/div/form/div[1]/ol/li/div/a")
            )
            .click();
    }, 15000);

    setTimeout(async function() {
        await driver.findElement(By.className("selectric")).click();

        driver.manage().setTimeouts({ implicit: 0.5 });

        //select size
        await driver
            .findElement(
                By.xpath(
                    '//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[2]/div[1]'
                )
            )
            .click();
    }, 18000);

    setTimeout(async function() {
        await driver
            .findElement(By.id("product-addtocart-button"))
            .sendKeys(searchString, Key.RETURN);
    }, 20000);
    // goes to chart
    setTimeout(async function() {
        await driver.get("https://www.weekendshoes.ee/checkout/cart/");
    }, 22000);

    // increases quantity in chart
    setTimeout(async function() {
        await driver
            .findElement(
                By.className("action qty increase-qty increase-item-qty-btn")
            )
            .sendKeys(searchString, Key.RETURN);
    }, 24000);

    // removes items in chart

    setTimeout(async function() {
        await driver
            .findElement(
                By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a')
            )
            .click();
    }, 30000);

    // goes to page
    setTimeout(async function() {
        await driver.get("https://www.weekendshoes.ee");
    }, 34000);

    // searh string
    setTimeout(async function() {
        await driver
            .findElement(By.id("search"))
            .sendKeys(searchString, Key.RETURN);
    }, 38000);
    // sort by bestseller
    setTimeout(async function() {
        await driver.findElement(By.id("sorter")).click();
        await driver
            .findElement(By.css('#sorter>option[value="bestsellers"]'))
            .click();
    }, 45000);

    //It is always a safe practice to quit the browser after execution

    //await driver.quit();
}

example();