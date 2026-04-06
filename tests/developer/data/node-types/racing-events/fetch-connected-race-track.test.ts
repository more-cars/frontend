import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {getConnectedRaceTrack} from "../../../../../src/data/node-types/racing-events/getConnectedRaceTrack"

describe('Fetching connected RACE TRACK from data source', () => {
    test('when there is no RACE TRACK connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRaceTrack(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.RACE_TRACK, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRaceTrack(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedRaceTrack(12345678))
            .toEqual(null)
    })
})
