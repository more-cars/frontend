import fs from "fs"
import {expect, test} from "vitest"
import {createFeature} from "../../../specification/lib/createFeature"
import type {Scenario} from "../../../specification/lib/Types/Scenario"

test('Create feature from scenario data', async () => {
    const scenarioData: Scenario = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/scenarioData.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    const expectedFeature = fs.readFileSync(__dirname + '/../../_toolbox/fixtures/scenario.feature', {
        encoding: 'utf8',
        flag: 'r'
    })

    const feature = createFeature(scenarioData)

    expect(feature.length)
        .toBeGreaterThan(0)

    expect(feature)
        .toEqual(expectedFeature)
})
