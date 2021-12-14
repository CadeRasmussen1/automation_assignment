const {By} = require('selenium-webdriver')

module.exports = {
    deleteMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Movie title')

        await driver.sleep(3000)

        await driver.findElement(By.xpath('//button')).click()

        await driver.sleep(3000)

        await driver.findElement(By.xpath('//ul/li/button')).click()

        await driver.sleep(3000)
    },
}