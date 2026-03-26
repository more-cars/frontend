import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/race-tracks/getRaceTrackById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRaceTrack} from "../../../../_toolbox/fixtures/node-types/FakeRaceTrack"
import {getConnectedTrackLayouts} from "../../../../../src/data/node-types/race-tracks/getConnectedTrackLayouts"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected TRACK LAYOUTS from data source', () => {
    test('when there are no TRACK LAYOUTS connected', async () => {
        const source = FakeRaceTrack.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedTrackLayouts(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple TRACK LAYOUTS connected', async () => {
        const source = FakeRaceTrack.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedTrackLayouts(12345678))
            .toHaveLength(3)
    })

    test('when the RACE TRACK does not exist', async () => {
        vi.spyOn(node, 'getRaceTrackById')
            .mockImplementation(async () => null)

        expect(await getConnectedTrackLayouts(12345678))
            .toHaveLength(0)
    })
})
