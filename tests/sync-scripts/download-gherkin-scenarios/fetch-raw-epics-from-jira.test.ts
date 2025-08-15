import {expect, test} from "vitest"
import {fetchEpicsFromJira} from "../../../specification/lib/fetchEpicsFromJira.ts"
import {validateJson} from "../../_toolbox/validateJson.ts"
import {FetchEpicsResponseSchema} from "../../_toolbox/schemas/FetchEpicsResponseSchema.ts"

test('Fetching all epics from Jira', async () => {
    const rawEpics = await fetchEpicsFromJira()

    expect(rawEpics.length)
        .toBeGreaterThan(0)

    expect(validateJson(rawEpics, FetchEpicsResponseSchema))
        .toBeTruthy()
})
