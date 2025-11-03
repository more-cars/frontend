import fs from "fs"
import {expect, test} from "vitest"
import {cacheRawEpics} from "../../../specification/lib/cacheRawEpics"

test('Caching fetched epics at default path with default filename', async () => {
    const fetchedEpics = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawEpicsFromJira.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    cacheRawEpics(fetchedEpics)
    expect(fs.existsSync('./_temp/epics.json'))
        .toBeTruthy()

    const cachedEpics = JSON.parse(fs.readFileSync('./_temp/epics.json', {
        encoding: 'utf8',
        flag: 'r'
    }))
    expect(cachedEpics)
        .toEqual(fetchedEpics)

    fs.rmSync('./_temp/epics.json')
    expect(fs.existsSync('./_temp/epics.json'))
        .toBeFalsy()
})

test('Caching fetched epics at custom path with custom filename', async () => {
    const fetchedEpics = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawEpicsFromJira.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    cacheRawEpics(fetchedEpics, 'testEpics.json', './_temporary')
    expect(fs.existsSync('./_temporary/testEpics.json'))
        .toBeTruthy()

    const cachedEpics = JSON.parse(fs.readFileSync('./_temporary/testEpics.json', {
        encoding: 'utf8',
        flag: 'r'
    }))
    expect(cachedEpics)
        .toEqual(fetchedEpics)

    fs.rmSync('./_temporary', {recursive: true})
    expect(fs.existsSync('./_temporary/testEpics.json'))
        .toBeFalsy()
})
