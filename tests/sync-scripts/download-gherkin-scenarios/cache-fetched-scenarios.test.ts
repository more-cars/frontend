import fs from "fs"
import {describe, expect, test} from "vitest"
import {cacheRawScenarios} from "../../../specification/lib/cacheRawScenarios.ts"

describe('Caching fetched scenarios', () => {
    test('at default path with default filename', async () => {
        const fetchedScenarios = JSON.parse(
            fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawGherkinScenarioFromXray.json', {
                encoding: 'utf8',
                flag: 'r'
            }))

        await cacheRawScenarios(fetchedScenarios)
        expect(fs.existsSync('./_temp/scenarios.json'))
            .toBeTruthy()

        const cachedScenarios = JSON.parse(fs.readFileSync('./_temp/scenarios.json', {
            encoding: 'utf8',
            flag: 'r'
        }))
        expect(cachedScenarios)
            .toEqual(fetchedScenarios)

        fs.rmSync('./_temp', {recursive: true})
        expect(fs.existsSync('./_temp/scenarios.json'))
            .toBeFalsy()
    })

    test('at custom path with custom filename', async () => {
        const fetchedScenarios = JSON.parse(
            fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawGherkinScenarioFromXray.json', {
                encoding: 'utf8',
                flag: 'r'
            }))

        await cacheRawScenarios(fetchedScenarios, 'testScenarios.json', './_temporary')
        expect(fs.existsSync('./_temporary/testScenarios.json'))
            .toBeTruthy()

        const cachedScenarios = JSON.parse(fs.readFileSync('./_temporary/testScenarios.json', {
            encoding: 'utf8',
            flag: 'r'
        }))
        expect(cachedScenarios)
            .toEqual(fetchedScenarios)

        fs.rmSync('./_temporary', {recursive: true})
        expect(fs.existsSync('./_temporary/testScenarios.json'))
            .toBeFalsy()
    })
})
