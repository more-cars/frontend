import {expect, test} from "vitest"
import {fetchRawScenariosFromXray} from "../../../specification/lib/fetchRawScenariosFromXray.ts"
import {validateJson} from "../../_toolbox/validateJson.ts"
import {FetchScenariosResponseSchema} from "../../_toolbox/schemas/FetchScenariosResponseSchema.ts"

test('Fetching all scenarios from Xray', async () => {
    const rawScenarios = await fetchRawScenariosFromXray()

    expect(rawScenarios.getTests.results.length)
        .toBeGreaterThan(0)

    expect(validateJson(rawScenarios, FetchScenariosResponseSchema))
        .toBeTruthy()

}, 15000)
