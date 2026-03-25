import {afterEach, describe, expect, test, vi} from "vitest"
import {SessionResultControllerFacade} from "../../../../../src/controllers/SessionResultControllerFacade"
import {SessionResultModelFacade} from "../../../../../src/models/SessionResultModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeSessionResult} from "../../../../_toolbox/fixtures/node-types/FakeSessionResult"
import type {SessionResult} from "../../../../../src/models/node-types/session-results/types/SessionResult"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the SESSION RESULT overview page', () => {
    test('when there exist no SESSION RESULTS', async () => {
        const spy = vi.spyOn(SessionResultControllerFacade, 'showAllNodes')

        vi.spyOn(SessionResultModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/session-results')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple SESSION RESULTS', async () => {
        const spy = vi.spyOn(SessionResultControllerFacade, 'showAllNodes')

        vi.spyOn(SessionResultModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeSessionResult.model,
                FakeSessionResult.model,
                FakeSessionResult.model,
            ] satisfies SessionResult[])

        const response = await supertestGet('/session-results')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
