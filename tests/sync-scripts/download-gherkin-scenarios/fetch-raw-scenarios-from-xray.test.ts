import {expect, test} from "vitest"
import {fetchRawScenariosFromXray} from "../../../specification/lib/fetchRawScenariosFromXray.ts"

test('Xray - Fetching scenarios', async () => {
    const rawScenarios = await fetchRawScenariosFromXray()

    expect(rawScenarios.getTests.results.length)
        .toBeGreaterThan(0)

    expect(rawScenarios.getTests.results[0])
        .toHaveProperty('gherkin')

    expect(rawScenarios.getTests.results[0])
        .toHaveProperty('jira')
}, 15000)
