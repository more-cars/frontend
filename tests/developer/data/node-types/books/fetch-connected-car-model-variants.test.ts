import {describe, expect, test, vi} from "vitest"
import {FakeBook} from "../../../../_toolbox/fixtures/node-types/FakeBook"
import * as node from "../../../../../src/data/node-types/books/getBookById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedCarModelVariants} from "../../../../../src/data/node-types/books/getConnectedCarModelVariants"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected CAR MODEL VARIANTS from data source', () => {
    test('when there are no CAR MODEL VARIANTS connected', async () => {
        const source = FakeBook.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple CAR MODEL VARIANTS connected', async () => {
        const source = FakeBook.data
        const target = {node_type: ApiNodeType.CAR_MODEL_VARIANT}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(3)
    })

    test('when the BOOK does not exist', async () => {
        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => null)

        expect(await getConnectedCarModelVariants(12345678))
            .toHaveLength(0)
    })
})
