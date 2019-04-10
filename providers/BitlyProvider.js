'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class BitlyProvider extends ServiceProvider {
  register () {
    //
    this.app.singleton('Adonis/Addons/Bitly', (app) => {
      const Config = app.use('Adonis/Src/Config')
      const Bitly = require('../src/Bitly')

      return new Bitly(Config)
    })

    this.app.alias('Adonis/Addons/Bitly', 'Bitly')
  }

  boot () {
    //
  }
}

module.exports = BitlyProvider
