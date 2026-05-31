import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllBooks} from "../../../../../src/data/node-types/books/getAllBooks"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiBookNode} from "../../../../../src/data/node-types/books/types/ApiBookNode"

describe('Fetching BOOK collection from data source', () => {
    test('when there are no BOOKS', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBooks())
            .toHaveLength(0)
    })

    test('when there are multiple BOOKS', async () => {
        const node = {type: ApiNodeType.BOOK} as ApiBookNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBooks())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllBooks())
            .toHaveLength(0)
    })
})
