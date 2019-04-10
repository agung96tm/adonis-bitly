const { BitlyClient } = require('bitly');
const GE = require('@adonisjs/generic-exceptions');

class Bitly {
  constructor(Config) {
    this.config = Config.get('bitly', {
      accessToken: null
    })
    this.bitly = new BitlyClient(this.config.accessToken, {});
  }

  async shorten(url, detail = false) {
    try {
      const result = await this.bitly.shorten(url);
      return detail ? result : result.url;

    } catch (e) {
      throw e
    }
  }
}

module.exports = Bitly