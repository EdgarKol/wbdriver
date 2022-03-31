const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test() {

    var searchString = "Jope";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
    //To fetch http://google.com from the browser with our code.
    await driver.get("https://www.weekendshoes.ee");

    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("search")).sendKeys(searchString, Key.RETURN);

    setTimeout(async function() {
        await driver.findElement(By.id("sorter")).click();
        await driver.findElement(By.css('#sorter>option[value="bestsellers"]')).click();

    }, 10000)

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log('Title is:', title);

    //It is always a safe practice to quit the browser after execution

    //await driver.quit();

}


test();