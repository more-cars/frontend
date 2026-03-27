import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/images/getImageById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {getConnectedNodes} from "../../../../../src/data/node-types/images/getConnectedNodes"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected NODES from data source', () => {
    test('when there are no NODES connected', async () => {
        const source = FakeImage.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getImageById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedNodes(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple NODES connected', async () => {
        const source = FakeImage.data

        const apiResponse = {
            data: [
                {data: {partner_node: {node_type: ApiNodeType.BRAND}}},
                {data: {partner_node: {node_type: ApiNodeType.CAR_MODEL}}},
                {data: {partner_node: {node_type: ApiNodeType.RACE_TRACK}}},
            ]
        }

        vi.spyOn(node, 'getImageById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedNodes(12345678))
            .toHaveLength(3)
    })

    test('when the IMAGE does not exist', async () => {
        vi.spyOn(node, 'getImageById')
            .mockImplementation(async () => null)

        expect(await getConnectedNodes(12345678))
            .toHaveLength(0)
    })
})
