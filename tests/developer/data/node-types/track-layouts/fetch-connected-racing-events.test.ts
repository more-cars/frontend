import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/track-layouts/getTrackLayoutById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"
import {getConnectedRacingEvents} from "../../../../../src/data/node-types/track-layouts/getConnectedRacingEvents"

describe('Fetching connected RACING EVENTS from data source', () => {
    test('when there are no RACING EVENTS connected', async () => {
        const source = FakeTrackLayout.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple RACING EVENTS connected', async () => {
        const source = FakeTrackLayout.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(3)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.spyOn(node, 'getTrackLayoutById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })
})
