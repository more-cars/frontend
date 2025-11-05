import {loadEnv} from 'vite'
import {defineConfig} from 'vitest/config'

const rootDir = __dirname + '/../../'

export default defineConfig(({mode}) => ({
    test: {
        name: 'developer',
        root: rootDir,
        include: [
            'tests/developer/**/*.test.ts',
        ],
        // giving vitest access to all environment variables, so the tests can for example find the API
        env: loadEnv(mode, rootDir, ''),
        reporters: [
            'default',
            ['junit', {
                outputFile: 'test-reports/developer/report.xml',
                suiteName: 'Developer Tests',
                classnameTemplate: ''
            }],
        ],
        coverage: {
            provider: 'v8',
            include: ['src/**'],
            exclude: [
                'src/**/types/**',
                'src/server.ts',
            ],
            reporter: [
                'text',
                'html',
            ],
            reportsDirectory: 'test-reports/developer/coverage',
            reportOnFailure: true,
            thresholds: {
                statements: 91,
                branches: 66,
            },
        }
    },
}))
