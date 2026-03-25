import {afterEach, describe, expect, test, vi} from "vitest"
import {RacingSessionControllerFacade} from "../../../../../src/controllers/RacingSessionControllerFacade"
import {RacingSessionModelFacade} from "../../../../../src/models/RacingSessionModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRacingSession} from "../../../../_toolbox/fixtures/node-types/FakeRacingSession"
import type {RacingSession} from "../../../../../src/models/node-types/racing-sessions/types/RacingSession"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RACING SESSION overview page', () => {
    test('when there exist no RACING SESSIONS', async () => {
        const spy = vi.spyOn(RacingSessionControllerFacade, 'showAllNodes')

        vi.spyOn(RacingSessionModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/racing-sessions')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RACING SESSIONS', async () => {
        const spy = vi.spyOn(RacingSessionControllerFacade, 'showAllNodes')

        vi.spyOn(RacingSessionModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRacingSession.model,
                FakeRacingSession.model,
                FakeRacingSession.model,
            ] satisfies RacingSession[])

        const response = await supertestGet('/racing-sessions')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
