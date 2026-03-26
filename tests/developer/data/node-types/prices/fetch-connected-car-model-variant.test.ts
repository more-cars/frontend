import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/prices/getPriceById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {getConnectedCarModelVariant} from "../../../../../src/data/node-types/prices/getConnectedCarModelVariant"
import {FakePrice} from "../../../../_toolbox/fixtures/node-types/FakePrice"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL VARIANT from data source', () => {
    test('when there is no CAR MODEL VARIANT connected', async () => {
        const source = FakePrice.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getPriceById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModelVariant(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        const source = FakePrice.data
        const target = {node_type: ApiNodeType.CAR_MODEL_VARIANT, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getPriceById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModelVariant(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the PRICE does not exist', async () => {
        vi.spyOn(node, 'getPriceById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModelVariant(12345678))
            .toEqual(null)
    })
})
