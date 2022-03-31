const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {
    var searchString = "Jope";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    await driver.get("https://www.weekendshoes.ee/naistele/saapad.html");

    driver.manage().setTimeouts({ implicit: 0.5 });

    await driver.manage().window().maximize();

    await driver.get(
        "https://www.weekendshoes.ee/tamaris-poolsaapad-578215.html"
    );

    driver.manage().setTimeouts({ implicit: 0.5 });

    await driver.findElement(By.className("selectric")).click();

    driver.manage().setTimeouts({ implicit: 0.5 });

    await driver
        .findElement(
            By.xpath(
                '//*[@id="product-options-wrapper"]/div/div/div/div/div[3]/div/ul/li[3]/div[1]'
            )
        )
        .click();

    driver.manage().setTimeouts({ implicit: 0.5 });

    await driver
        .findElement(By.id("product-addtocart-button"))
        .sendKeys(searchString, Key.RETURN);

    setTimeout(async function() {
        await driver.get("https://www.weekendshoes.ee/checkout/cart/");
    }, 6000);


    // increases quantity in chart
    setTimeout(async function() {
        await driver
            .findElement(
                By.className("action qty increase-qty increase-item-qty-btn")
            )
            .sendKeys(searchString, Key.RETURN);
    }, 15000);

    // removes items in chart

    setTimeout(async function() {
        await driver
            .findElement(By.xpath('//*[@id="shopping-cart-table"]/tbody/tr[1]/td[6]/a'))
            .click()
    }, 30000);

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is:", title);

    //It is always a safe practice to quit the browser after execution

    //await driver.quit();
}

example();