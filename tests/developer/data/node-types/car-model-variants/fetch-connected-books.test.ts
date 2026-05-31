import {describe, expect, test, vi} from "vitest"
import {FakeCarModelVariant} from "../../../../_toolbox/fixtures/node-types/FakeCarModelVariant"
import * as node from "../../../../../src/data/node-types/car-model-variants/getCarModelVariantById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedBooks} from "../../../../../src/data/node-types/car-model-variants/getConnectedBooks"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected BOOKS from data source', () => {
    test('when there are no BOOKS connected', async () => {
        const source = FakeCarModelVariant.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedBooks(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple BOOKS connected', async () => {
        const source = FakeCarModelVariant.data
        const target = {node_type: ApiNodeType.BOOK}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedBooks(12345678))
            .toHaveLength(3)
    })

    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.spyOn(node, 'getCarModelVariantById')
            .mockImplementation(async () => null)

        expect(await getConnectedBooks(12345678))
            .toHaveLength(0)
    })
})
