import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
    testDir: './',
    outputDir: '../../test-reports/a11y/artifacts',
    fullyParallel: false,
    reporter: [
        ['html', {outputFolder: '../../test-reports/a11y/reports'}],
        ['list'],
    ],
    use: {
        baseURL: 'http://localhost:4000',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome'],
    },
})
