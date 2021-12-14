const {By} = require('selenium-webdriver')

module.exports = {
    crossOffMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Movie title')

    await driver.sleep(3000)
    
    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(3000)

    await driver.findElement(By.xpath('//ul/li/span')).click()

    const movieWatched = await driver.findElement(By.xpath('//aside')).getText()

    expect(movieWatched).toEqual('Movie title Watched!')

    await driver.sleep(3000)
    }
}