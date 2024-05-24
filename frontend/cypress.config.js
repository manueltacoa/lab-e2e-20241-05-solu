import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mtt98t",
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'results',
    overwrite: false,
    html: false,
    json: true,
  }
});
