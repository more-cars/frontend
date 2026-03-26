import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/car-models/getCarModelById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {getConnectedCarModelVariants} from "../../../../../src/data/node-types/car-models/getConnectedCarModelVariants"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL VARIANTS from data source', () => {
    test('when there are no CAR MODEL VARIANTS connected', async () => {
        const source = FakeCarModel.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS connected', async () => {
        const source = FakeCarModel.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(3)
    })

    test('when the CAR MODEL does not exist', async () => {
        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })
})
