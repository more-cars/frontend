import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/session-results/getSessionResultById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeSessionResult} from "../../../../_toolbox/fixtures/node-types/FakeSessionResult"
import {getConnectedRacingSession} from "../../../../../src/data/node-types/session-results/getConnectedRacingSession"

describe('Fetching connected RACING SESSION from data source', () => {
    test('when there is no RACING SESSION connected', async () => {
        const source = FakeSessionResult.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingSession(12345678))
            .toEqual(null)
    })

    test('when there is a RACING SESSION connected', async () => {
        const source = FakeSessionResult.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingSession(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the SESSION RESULT does not exist', async () => {
        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingSession(12345678))
            .toEqual(null)
    })
})
