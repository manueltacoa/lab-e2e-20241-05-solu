import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mtt98t",
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   reportFilename: 'results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // }
});
