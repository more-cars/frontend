import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {getConnectedTrackLayout} from "../../../../../src/data/node-types/racing-events/getConnectedTrackLayout"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected TRACK LAYOUT from data source', () => {
    test('when there is no TRACK LAYOUT connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedTrackLayout(12345678))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedTrackLayout(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedTrackLayout(12345678))
            .toEqual(null)
    })
})
