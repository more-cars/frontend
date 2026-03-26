import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import {RaceTrackModelFacade} from "../../../../../src/models/RaceTrackModelFacade"
import * as node from "../../../../../src/controllers/node-types/race-tracks/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RACE TRACK detail page', () => {
    test('when the RACE TRACK does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/race-track-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RACE TRACK exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRaceTrack.model))
        vi.spyOn(RaceTrackModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRaceTrack.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/race-track-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
