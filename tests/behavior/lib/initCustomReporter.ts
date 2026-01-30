import fs from "node:fs"

export function initCustomReporter(on: Cypress.PluginEvents) {
    const startTime = Date.now()
    let stepCount = 0
    let scenarioCount = 0
    let passedTests = 0
    let failedTests = 0
    let skippedTests = 0

    on('task', {
        scenarioExecuted() {
            scenarioCount++
            return null
        },

        stepExecuted() {
            stepCount++
            return null
        },
    })

    on('after:run', (results) => {
        const endTime = Date.now()

        if (results && 'totalPassed' in results) {
            passedTests = results.totalPassed
            failedTests = results.totalFailed
            skippedTests = results.totalSkipped
        }

        const totalTests = passedTests + failedTests + skippedTests

        const stats = {
            duration: (endTime - startTime) / 1000,
            start_time: startTime,
            end_time: endTime,
            scenario_count: scenarioCount,
            step_count: stepCount,
            step_scenario_ratio: stepCount / scenarioCount,
            passed_tests: passedTests,
            failed_tests: failedTests,
            skipped_tests: skippedTests,
            passed_tests_percent: 100 / totalTests * passedTests,
            failed_tests_percent: 100 / totalTests * failedTests,
            skipped_tests_percent: 100 / totalTests * skippedTests,
        }

        fs.writeFileSync('test-reports/behavior/custom-report.json', JSON.stringify(stats, null, 2))
    })
}

