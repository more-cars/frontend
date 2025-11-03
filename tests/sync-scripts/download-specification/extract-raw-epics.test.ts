import fs from "fs"
import {expect, test} from "vitest"
import {validateJson} from "../../_toolbox/validateJson"
import {RawEpic} from "../../../specification/lib/Types/RawEpic"
import {EpicSchema} from "../../_toolbox/schemas/EpicSchema"
import {extractRawEpics} from "../../../specification/lib/extractRawEpics"

test('Extracting all epics from the Jira response', async () => {
    const rawEpics: Array<RawEpic> = JSON.parse(
        fs.readFileSync(__dirname + '/../../_toolbox/fixtures/rawEpicsFromJira.json', {
            encoding: 'utf8',
            flag: 'r'
        }))

    const extractedEpics = extractRawEpics(rawEpics)

    expect(extractedEpics.length)
        .toEqual(rawEpics.length)

    extractedEpics.forEach((epic) => {
        expect(validateJson(epic, EpicSchema))
            .toBeTruthy()
    })
})
