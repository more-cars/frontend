import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getModelCarById} from "../../../../../src/data/node-types/model-cars/getModelCarById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ApiModelCarNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {ModelCarNode} from "../../../../../src/data/node-types/model-cars/types/ModelCarNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching MODEL CAR node from data source', () => {
    test('when there is no MODEL CAR', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarById(12345678))
            .toEqual(null)
    })

    test('when there is a MODEL CAR', async () => {
        const apiResponse = {
            type: ApiNodeType.MODEL_CAR,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiModelCarNode

        const expectedDataNode = {
            type: DataNodeType.MODEL_CAR,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as ModelCarNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
