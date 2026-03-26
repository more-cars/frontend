import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/race-tracks/getRaceTrackById"
import {getConnectedMainImage} from "../../../../../src/data/node-types/race-tracks/getConnectedMainImage"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = FakeRaceTrack.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = FakeRaceTrack.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the RACE TRACK does not exist', async () => {
        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
