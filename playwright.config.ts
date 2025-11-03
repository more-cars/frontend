import {defineConfig, devices} from '@playwright/test'
import {cucumberReporter, defineBddConfig} from "playwright-bdd"

export default defineConfig({
    testDir: defineBddConfig({
        features: ['specification/**/*.feature'],
        steps: ['tests/behavior/**/*.ts'],
        outputDir: 'tests/behavior/.features-gen',
    }),
    outputDir: 'test-reports/behavior/artifacts',
    fullyParallel: false,
    reporter: [
        ['html', {outputFolder: 'test-reports/behavior/html'}],
        ['list'],
        cucumberReporter('html', {outputFile: 'test-reports/behavior/cucumber/index.html'}),
    ],
    use: {
        baseURL: 'http://localhost:3001',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
    },
    timeout: 10000,
})
