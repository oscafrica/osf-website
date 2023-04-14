import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1660,
  chromeWebSecurity: false,
  video: false,
  fixturesFolder: "test/cypress/fixtures",
  videosFolder: "test/cypress/video",
  screenshotsFolder: "test/cypress/screenshots",
  e2e: {
    // We"ve imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./test/cypress/plugins/index.js")(on, config);
    },
    specPattern: "test/cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "test/cypress/support/index.js",
    baseUrl: "http://localhost:8000"
  }
});
