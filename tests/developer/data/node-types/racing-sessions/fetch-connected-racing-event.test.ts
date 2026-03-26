import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-sessions/getRacingSessionById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingSession} from "../../../../_toolbox/fixtures/node-types/FakeRacingSession"
import {getConnectedRacingEvent} from "../../../../../src/data/node-types/racing-sessions/getConnectedRacingEvent"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING EVENT from data source', () => {
    test('when there is no RACING EVENT connected', async () => {
        const source = FakeRacingSession.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getRacingSessionById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingEvent(12345678))
            .toEqual(null)
    })

    test('when there is a RACING EVENT connected', async () => {
        const source = FakeRacingSession.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getRacingSessionById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingEvent(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the RACING SESSION does not exist', async () => {
        vi.spyOn(node, 'getRacingSessionById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingEvent(12345678))
            .toEqual(null)
    })
})
