import {assert, expect, test} from "vitest"
import {fetchEpicsFromJira} from "../../../specification/lib/fetchEpicsFromJira"
import {validateJson} from "../../_toolbox/validateJson"
import {FetchEpicsResponseSchema} from "../../_toolbox/schemas/FetchEpicsResponseSchema"

test('Fetching all epics from Jira', async () => {
    const rawEpics = await fetchEpicsFromJira()
    if (!rawEpics) {
        assert(false, 'Epics not found')
    }

    expect(rawEpics.length)
        .toBeGreaterThan(0)

    expect(validateJson(rawEpics, FetchEpicsResponseSchema))
        .toBeTruthy()
})
