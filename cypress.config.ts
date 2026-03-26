import 'dotenv/config'
import {defineConfig} from "cypress"
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"
import {createEsbuildPlugin} from "@badeball/cypress-cucumber-preprocessor/esbuild"

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    return config
}

export default defineConfig({
    e2e: {
        setupNodeEvents,
        specPattern: "frontend-specification/spec/**/*.feature",
        supportFile: 'tests/behavior/e2e.support.ts',
        baseUrl: 'http://localhost:4000',
        screenshotsFolder: 'test-reports/behavior/screenshots/',
        defaultCommandTimeout: 1000,
    },
    env: {
        tags: "@implemented",
        basicAuthUsername: process.env.BASIC_AUTH_USERNAME,
        basicAuthPassword: process.env.BASIC_AUTH_PASSWORD,
    }
})
