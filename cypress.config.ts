import {defineConfig} from "cypress"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor"
import {createEsbuildPlugin} from "@badeball/cypress-cucumber-preprocessor/esbuild"
import 'dotenv/config'

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
    await addCucumberPreprocessorPlugin(on, config)

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin(config)],
        })
    )

    config.env.BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME
    config.env.BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD

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
        tags: "@implemented"
    }
})
