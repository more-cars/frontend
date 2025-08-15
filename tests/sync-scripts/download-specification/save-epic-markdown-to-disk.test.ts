import fs from "fs"
import {expect, test} from "vitest"
import {saveEpicMarkdownFile} from "../../../specification/lib/saveEpicMarkdownFile.ts"

test('Save epic markdown file at default path', async () => {
    const epicMarkdown =
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/epic.md', {
            encoding: 'utf8',
            flag: 'r'
        })
    const epicData = require("../../_toolbox/fixtures/epicData.json")

    const filename = 'test-specification.md'
    const foldername = 'test ' + epicData.id + ' » ' + epicData.title

    saveEpicMarkdownFile(epicMarkdown, filename, foldername)

    const epicFolderLocation = __dirname + '/../../../specification/epics/' + foldername
    const epicFileLocation = epicFolderLocation + '/' + filename
    expect(fs.existsSync(epicFileLocation))
        .toBeTruthy()

    const epicFile = fs.readFileSync(epicFileLocation, {
        encoding: 'utf8',
        flag: 'r'
    })
    expect(epicFile)
        .toEqual(epicMarkdown)

    fs.rmSync(epicFolderLocation, {recursive: true})
    expect(fs.existsSync(epicFolderLocation))
        .toBeFalsy()
})

test('Save epic markdown file at custom path', async () => {
    const epicMarkdown =
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/epic.md', {
            encoding: 'utf8',
            flag: 'r'
        })
    const epicData = require("../../_toolbox/fixtures/epicData.json")

    const basepath = __dirname + '/_temp'
    const filename = 'test-specification.md'
    const foldername = 'test ' + epicData.id + ' » ' + epicData.title

    saveEpicMarkdownFile(epicMarkdown, filename, foldername, basepath)

    const epicFolderLocation = basepath + '/' + foldername
    const epicFileLocation = epicFolderLocation + '/' + filename
    expect(fs.existsSync(epicFileLocation))
        .toBeTruthy()

    const epicFile = fs.readFileSync(epicFileLocation, {
        encoding: 'utf8',
        flag: 'r'
    })
    expect(epicFile)
        .toEqual(epicMarkdown)

    fs.rmSync(epicFolderLocation, {recursive: true})
    expect(fs.existsSync(epicFolderLocation))
        .toBeFalsy()
})
