import {afterEach, describe, expect, test, vi} from "vitest"
import {RaceTrackControllerFacade} from "../../../../../src/controllers/RaceTrackControllerFacade"
import {RaceTrackModelFacade} from "../../../../../src/models/RaceTrackModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import type {RaceTrack} from "../../../../../src/models/node-types/race-tracks/types/RaceTrack"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting the RACE TRACK overview page', () => {
    test('when there exist no RACE TRACKS', async () => {
        const spy = vi.spyOn(RaceTrackControllerFacade, 'showAllNodes')

        vi.spyOn(RaceTrackModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/race-tracks')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RACE TRACKS', async () => {
        const spy = vi.spyOn(RaceTrackControllerFacade, 'showAllNodes')

        vi.spyOn(RaceTrackModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRaceTrack.model,
                FakeRaceTrack.model,
                FakeRaceTrack.model,
            ] satisfies RaceTrack[])

        const response = await supertestGet('/race-tracks')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
