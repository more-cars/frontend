import fs from "fs"
import {expect, test} from "vitest"
import {saveFeatureFile} from "../../../specification/lib/saveFeatureFile.ts"

test('Save feature specification as feature file at default path', async () => {
    const feature = fs.readFileSync(__dirname + '/../../_toolbox/fixtures/scenario.feature', {
        encoding: 'utf8',
        flag: 'r'
    })

    saveFeatureFile(feature, 'test-scenario.feature')

    const featureFileLocation = __dirname + '/../../../specification/behavior/test-scenario.feature'
    expect(fs.existsSync(featureFileLocation))
        .toBeTruthy()

    const savedFeatureFile = fs.readFileSync(featureFileLocation, {
        encoding: 'utf8',
        flag: 'r'
    })
    expect(savedFeatureFile)
        .toEqual(feature)

    fs.rmSync(featureFileLocation)
    expect(fs.existsSync(featureFileLocation))
        .toBeFalsy()
})

test('Save feature specification as feature file at custom path', async () => {
    const feature = fs.readFileSync(__dirname + '/../../_toolbox/fixtures/scenario.feature', {
        encoding: 'utf8',
        flag: 'r'
    })

    saveFeatureFile(feature, 'scenario.feature', './_temp')

    const featureFileLocation = './_temp/scenario.feature'
    expect(fs.existsSync(featureFileLocation))
        .toBeTruthy()

    const savedFeatureFile = fs.readFileSync(featureFileLocation, {
        encoding: 'utf8',
        flag: 'r'
    })
    expect(savedFeatureFile)
        .toEqual(feature)

    fs.rmSync(featureFileLocation)
    expect(fs.existsSync(featureFileLocation))
        .toBeFalsy()
})
