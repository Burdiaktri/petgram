const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://petgram-bt.vercel.app/',
    setupNodeEvents (on, config) {
    }
  }
})
