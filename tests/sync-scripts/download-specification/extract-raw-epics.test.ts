import fs from "fs"
import {expect, test} from "vitest"
import {validateJson} from "../../_toolbox/validateJson.ts"
import {RawEpic} from "../../../specification/lib/Types/RawEpic.ts"
import {EpicSchema} from "../../_toolbox/schemas/EpicSchema.ts"
import {extractRawEpics} from "../../../specification/lib/extractRawEpics.ts"

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
