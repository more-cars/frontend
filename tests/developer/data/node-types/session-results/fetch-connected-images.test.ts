import {describe, expect, test, vi} from "vitest"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import * as node from "../../../../../src/data/node-types/session-results/getSessionResultById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedImages} from "../../../../../src/data/node-types/session-results/getConnectedImages"
import {FakeSessionResult} from "../../../../_toolbox/fixtures/node-types/FakeSessionResult"

describe('Fetching connected IMAGES from data source', () => {
    test('when there are no IMAGES connected', async () => {
        const source = FakeSessionResult.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES connected', async () => {
        const source = FakeSessionResult.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedImages(12345678))
            .toHaveLength(3)
    })

    test('when the SESSION RESULT does not exist', async () => {
        vi.spyOn(node, 'getSessionResultById')
            .mockImplementation(async () => null)

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })
})
