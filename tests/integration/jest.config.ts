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
    collectCoverage: false,
    coverageProvider: "v8",
    coverageDirectory: '<rootDir>/test-reports/integration/code-coverage',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        '!<rootDir>/src/server.ts',
        '!<rootDir>/src/**/types/**',
    ],
    coverageThreshold: {
        global: {
            statements: 48,
            branches: 83,
        }
    }
}
