import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getAllMagazines} from "../../../../../src/data/node-types/magazines/getAllMagazines"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMagazineNode} from "../../../../../src/data/node-types/magazines/types/ApiMagazineNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MAGAZINE collection from data source', () => {
    test('when there are no MAGAZINES', async () => {
        const apiResponse = {data: []}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazines())
            .toHaveLength(0)
    })

    test('when there are multiple MAGAZINES', async () => {
        const node = {type: ApiNodeType.MAGAZINE} as ApiMagazineNode
        const apiResponse = {data: [node, node, node]}

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazines())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        const apiResponse = undefined

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getAllMagazines())
            .toHaveLength(0)
    })
})
