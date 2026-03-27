import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getBrandById} from "../../../../../src/data/node-types/brands/getBrandById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiBrandNode} from "../../../../../src/data/node-types/brands/types/ApiBrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {BrandNode} from "../../../../../src/data/node-types/brands/types/BrandNode"

describe('Fetching BRAND node from data source', () => {
    test('when there is no BRAND', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getBrandById(12345678))
            .toEqual(null)
    })

    test('when there is a BRAND', async () => {
        const apiResponse = {
            type: ApiNodeType.BRAND,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiBrandNode

        const expectedDataNode = {
            type: DataNodeType.BRAND,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as BrandNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getBrandById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
