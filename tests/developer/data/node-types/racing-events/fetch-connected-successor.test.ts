import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {getConnectedSuccessor} from "../../../../../src/data/node-types/racing-events/getConnectedSuccessor"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected successor from data source', () => {
    test('when there is no successor connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a successor connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.RACING_EVENT, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedSuccessor(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the successor does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedSuccessor(12345678))
            .toEqual(null)
    })
})
