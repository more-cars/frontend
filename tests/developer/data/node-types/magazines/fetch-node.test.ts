import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getMagazineById} from "../../../../../src/data/node-types/magazines/getMagazineById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiMagazineNode} from "../../../../../src/data/node-types/magazines/types/ApiMagazineNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {MagazineNode} from "../../../../../src/data/node-types/magazines/types/MagazineNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MAGAZINE node from data source', () => {
    test('when there is no MAGAZINE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMagazineById(12345678))
            .toEqual(null)
    })

    test('when there is a MAGAZINE', async () => {
        const apiResponse = {
            type: ApiNodeType.MAGAZINE,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiMagazineNode

        const expectedDataNode = {
            type: DataNodeType.MAGAZINE,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as MagazineNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getMagazineById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
