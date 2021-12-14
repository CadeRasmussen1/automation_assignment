const {By} = require('selenium-webdriver')

module.exports = {
deleteMovieTitle: async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Movie title')

    await driver.sleep(3000)
    
    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(3000)

    await driver.findElement(By.xpath('//ul/li/button')).click()

    const moviedeleted = await driver.findElement(By.xpath('//aside')).getText()

    expect(moviedeleted).toEqual('Movie title deleted!')

    await driver.sleep(3000)
}
}