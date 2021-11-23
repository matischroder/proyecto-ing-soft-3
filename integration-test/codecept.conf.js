const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'y/*_test.js',
  output: 'y',
  helpers: {
    Playwright: {
      url: "http://localhost",
      show: true,
      browser: 'chromium'
    }
  }
}