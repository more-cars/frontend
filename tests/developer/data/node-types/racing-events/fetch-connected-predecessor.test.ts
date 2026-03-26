import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {getConnectedPredecessor} from "../../../../../src/data/node-types/racing-events/getConnectedPredecessor"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected predecessor from data source', () => {
    test('when there is no predecessor connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedPredecessor(12345678))
            .toEqual(null)
    })

    test('when there is a predecessor connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.RACING_EVENT, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedPredecessor(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the predecessor does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedPredecessor(12345678))
            .toEqual(null)
    })
})
