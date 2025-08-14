import fs from "fs"
import {expect, test} from "vitest"
import {extractRawXrayScenarios} from "../../../specification/lib/extractRawXrayScenarios.ts"
import type {RawScenario} from "../../../specification/lib/Types/RawScenario.ts"
import {validateJson} from "../../_toolbox/validateJson.ts"
import {ScenarioSchema} from "../../_toolbox/schemas/ScenarioSchema.ts"

test('Extracting all scenarios from the Xray response', async () => {
    const xrayResponse = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawGherkinScenariosFromXray.json', {
            encoding: 'utf8',
            flag: 'r'
        }))
    const rawScenarios: Array<RawScenario> = xrayResponse.getTests.results

    const extractedScenarios = extractRawXrayScenarios(rawScenarios)

    expect(extractedScenarios.length)
        .toBeGreaterThan(0)

    extractedScenarios.forEach((scenario) => {
        expect(validateJson(scenario, ScenarioSchema))
            .toBeTruthy()
    })
})
