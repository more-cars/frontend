import path from "node:path"

module.exports = {
    displayName: 'Controller Tests',
    preset: 'ts-jest',
    rootDir: path.resolve(__dirname, '../../'),
    testMatch: ['<rootDir>/tests/integration/**/*.test.ts'],
    reporters: [
        "default"
    ],
    forceExit: true,
}
