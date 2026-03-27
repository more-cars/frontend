import {describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getModelCarBrandById} from "../../../../../src/data/node-types/model-car-brands/getModelCarBrandById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ApiModelCarBrandNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {ModelCarBrandNode} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandNode"

describe('Fetching MODEL CAR BRAND node from data source', () => {
    test('when there is no MODEL CAR BRAND', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarBrandById(12345678))
            .toEqual(null)
    })

    test('when there is a MODEL CAR BRAND', async () => {
        const apiResponse = {
            type: ApiNodeType.MODEL_CAR_BRAND,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiModelCarBrandNode

        const expectedDataNode = {
            type: DataNodeType.MODEL_CAR_BRAND,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as ModelCarBrandNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getModelCarBrandById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
