import {describe, expect, test, vi} from "vitest"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"
import * as node from "../../../../../src/data/node-types/model-cars/getModelCarById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {getConnectedCarModelVariant} from "../../../../../src/data/node-types/model-cars/getConnectedCarModelVariant"

describe('Fetching connected CAR MODEL VARIANT from data source', () => {
    test('when there is no CAR MODEL VARIANT connected', async () => {
        const source = FakeModelCar.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const source = FakeModelCar.data
        const target = {node_type: ApiNodeType.CAR_MODEL_VARIANT, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModelVariant(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the MODEL CAR does not exist', async () => {
        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModelVariant(12345678))
            .toEqual(null)
    })
})
