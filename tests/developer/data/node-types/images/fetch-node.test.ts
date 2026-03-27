import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getImageById} from "../../../../../src/data/node-types/images/getImageById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiImageNode} from "../../../../../src/data/node-types/images/types/ApiImageNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {ImageNode} from "../../../../../src/data/node-types/images/types/ImageNode"

describe('Fetching IMAGE node from data source', () => {
    test('when there is no IMAGE', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getImageById(12345678))
            .toEqual(null)
    })

    test('when there is a IMAGE', async () => {
        const apiResponse = {
            type: ApiNodeType.IMAGE,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiImageNode

        const expectedDataNode = {
            type: DataNodeType.IMAGE,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as ImageNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getImageById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
