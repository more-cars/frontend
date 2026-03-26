import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/car-models/getCarModelById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {getConnectedBrand} from "../../../../../src/data/node-types/car-models/getConnectedBrand"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected BRAND from data source', () => {
    test('when there is no BRAND connected', async () => {
        const source = FakeCarModel.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedBrand(12345678))
            .toEqual(null)
    })

    test('when there is a BRAND connected', async () => {
        const source = FakeCarModel.data
        const target = {node_type: ApiNodeType.BRAND, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedBrand(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the CAR MODEL does not exist', async () => {
        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => null)

        expect(await getConnectedBrand(12345678))
            .toEqual(null)
    })
})
