import {describe, expect, test, vi} from "vitest"
import {FakeModelCarBrand} from "../../../../_toolbox/fixtures/node-types/FakeModelCarBrand"
import * as node from "../../../../../src/data/node-types/model-car-brands/getModelCarBrandById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedVideos} from "../../../../../src/data/node-types/model-car-brands/getConnectedVideos"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected VIDEOS from data source', () => {
    test('when there are no VIDEOS connected', async () => {
        const source = FakeModelCarBrand.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getModelCarBrandById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple VIDEOS connected', async () => {
        const source = FakeModelCarBrand.data
        const target = {node_type: ApiNodeType.VIDEO}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getModelCarBrandById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(3)
    })

    test('when the MODEL CAR BRAND does not exist', async () => {
        vi.spyOn(node, 'getModelCarBrandById')
            .mockImplementation(async () => null)

        expect(await getConnectedVideos(12345678))
            .toHaveLength(0)
    })
})
