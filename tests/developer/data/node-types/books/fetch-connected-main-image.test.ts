import {describe, expect, test, vi} from "vitest"
import {FakeBook} from "../../../../_toolbox/fixtures/node-types/FakeBook"
import * as node from "../../../../../src/data/node-types/books/getBookById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedMainImage} from "../../../../../src/data/node-types/books/getConnectedMainImage"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = FakeBook.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = FakeBook.data
        const target = {type: ApiNodeType.IMAGE, id: 11111118, attributes: {}}

        const apiResponse = {data: target}

        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the BOOK does not exist', async () => {
        vi.spyOn(node, 'getBookById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
