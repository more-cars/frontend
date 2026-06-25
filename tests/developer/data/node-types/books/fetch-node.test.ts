import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getBookById} from "../../../../../src/data/node-types/books/getBookById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiBookNode} from "../../../../../src/data/node-types/books/types/ApiBookNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {BookNode} from "../../../../../src/data/node-types/books/types/BookNode"

describe('Fetching BOOK node from data source', () => {
    test('when there is no BOOK', async () => {
        const apiResponse = {errors: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getBookById(1))
            .toEqual(null)
    })

    test('when there is a BOOK', async () => {
        const apiResponse = {
            type: ApiNodeType.BOOK,
            id: 12345678,
            attributes: {
                title: "dummy",
            },
        } as ApiBookNode

        const expectedDataNode = {
            type: DataNodeType.BOOK,
            data: {
                id: 12345678,
                title: "dummy",
            },
        } as BookNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getBookById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
