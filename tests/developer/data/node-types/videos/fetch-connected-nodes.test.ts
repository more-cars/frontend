import {describe, expect, test, vi} from "vitest"
import {FakeVideo} from "../../../../_toolbox/fixtures/node-types/FakeVideo"
import * as node from "../../../../../src/data/node-types/videos/getVideoById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedNodes} from "../../../../../src/data/node-types/videos/getConnectedNodes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected NODES from data source', () => {
    test('when there are no NODES connected', async () => {
        const source = FakeVideo.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getVideoById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedNodes(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple NODES connected', async () => {
        const source = FakeVideo.data
        const target = {node_type: ApiNodeType.BRAND}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getVideoById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedNodes(12345678))
            .toHaveLength(3)
    })

    test('when the VIDEO does not exist', async () => {
        vi.spyOn(node, 'getVideoById')
            .mockImplementation(async () => null)

        expect(await getConnectedNodes(12345678))
            .toHaveLength(0)
    })
})
