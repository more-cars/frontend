import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/track-layouts/getTrackLayoutById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {getConnectedRaceTrack} from "../../../../../src/data/node-types/track-layouts/getConnectedRaceTrack"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"

describe('Fetching connected RACE TRACK from data source', () => {
    test('when there is no RACE TRACK connected', async () => {
        const source = FakeTrackLayout.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRaceTrack(12345678))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        const source = FakeTrackLayout.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRaceTrack(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => null)

        expect(await getConnectedRaceTrack(12345678))
            .toEqual(null)
    })
})
