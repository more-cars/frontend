import fs from "fs"
import {expect, test} from "vitest"
import {saveEpicData} from "../../../specification/lib/saveEpicData"
import type {Epic} from "../../../specification/lib/Types/Epic"

test('Save epic file at default path', async () => {
    const epic: Epic = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/epicData.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    const filename = 'test-specification.json'
    const foldername = 'test ' + epic.id + ' » ' + epic.title

    saveEpicData(epic, filename, foldername)

    const epicFolderLocation = __dirname + '/../../../specification/epics/' + foldername
    const epicFileLocation = epicFolderLocation + '/' + filename
    expect(fs.existsSync(epicFileLocation))
        .toBeTruthy()

    const epicFile = JSON.parse(
        fs.readFileSync(epicFileLocation, {
            encoding: 'utf8',
            flag: 'r'
        }))
    expect(epicFile)
        .toEqual(epic)

    fs.rmSync(epicFolderLocation, {recursive: true})
    expect(fs.existsSync(epicFolderLocation))
        .toBeFalsy()
})

test('Save epic file at custom path', async () => {
    const epic: Epic = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/epicData.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    const basepath = __dirname + '/_temp'
    const filename = 'test-specification.json'
    const foldername = 'test ' + epic.id + ' » ' + epic.title

    saveEpicData(epic, filename, foldername, basepath)

    const epicFolderLocation = basepath + '/' + foldername
    const epicFileLocation = epicFolderLocation + '/' + filename

    expect(fs.existsSync(epicFileLocation))
        .toBeTruthy()

    const epicFile = JSON.parse(
        fs.readFileSync(epicFileLocation, {
            encoding: 'utf8',
            flag: 'r'
        }))
    expect(epicFile)
        .toEqual(epic)

    fs.rmSync(epicFolderLocation, {recursive: true})
    expect(fs.existsSync(epicFolderLocation))
        .toBeFalsy()
})
