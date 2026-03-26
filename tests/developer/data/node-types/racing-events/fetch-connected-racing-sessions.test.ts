import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/racing-events/getRacingEventById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {getConnectedRacingSessions} from "../../../../../src/data/node-types/racing-events/getConnectedRacingSessions"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING SESSIONS from data source', () => {
    test('when there are no RACING SESSIONS connected', async () => {
        const source = FakeRacingEvent.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedRacingSessions(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple RACING SESSIONS connected', async () => {
        const source = FakeRacingEvent.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedRacingSessions(12345678))
            .toHaveLength(3)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.spyOn(node, 'getRacingEventById')
            .mockImplementation(async () => null)

        expect(await getConnectedRacingSessions(12345678))
            .toHaveLength(0)
    })
})
