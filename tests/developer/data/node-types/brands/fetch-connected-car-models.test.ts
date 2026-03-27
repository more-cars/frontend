import {describe, expect, test, vi} from "vitest"
import {FakeBrand} from "../../../../_toolbox/fixtures/node-types/FakeBrand"
import * as node from "../../../../../src/data/node-types/brands/getBrandById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedCarModels} from "../../../../../src/data/node-types/brands/getConnectedCarModels"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected CAR MODELS from data source', () => {
    test('when there are no CAR MODELS connected', async () => {
        const source = FakeBrand.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODELS connected', async () => {
        const source = FakeBrand.data
        const target = {node_type: ApiNodeType.CAR_MODEL}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(3)
    })

    test('when the BRAND does not exist', async () => {
        vi.spyOn(node, 'getBrandById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModels(12345678))
            .toHaveLength(0)
    })
})
