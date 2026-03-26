import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/car-model-variants/getCarModelVariantById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import {getConnectedCarModel} from "../../../../../src/data/node-types/car-model-variants/getConnectedCarModel"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL from data source', () => {
    test('when there is no CAR MODEL connected', async () => {
        const source = FakeCarModelVariant.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModel(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL connected', async () => {
        const source = FakeCarModelVariant.data
        const target = {node_type: ApiNodeType.CAR_MODEL, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModel(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModel(12345678))
            .toEqual(null)
    })
})
