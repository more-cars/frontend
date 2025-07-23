import path from "node:path"

module.exports = {
    displayName: 'Integration Tests',
    preset: 'ts-jest',
    rootDir: path.resolve(__dirname, '../../'),
    testMatch: ['<rootDir>/tests/integration/**/*.test.ts'],
    reporters: [
        "default",
        ['jest-junit', {
            outputDirectory: 'test-reports/integration',
            outputName: 'report.xml',
            suiteName: 'Integration Tests',
            suiteNameTemplate: '{filepath}',
            classNameTemplate: '',
        }],
    ],
    forceExit: true,
}
