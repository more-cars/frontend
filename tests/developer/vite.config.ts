import {defineConfig} from 'vitest/config'

const rootDir = __dirname + '/../../'

export default defineConfig(_ => ({
    test: {
        name: 'developer',
        root: rootDir,
        include: [
            'tests/developer/**/*.test.ts',
        ],
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
                statements: 89,
                branches: 95,
            },
        }
    },
}))
