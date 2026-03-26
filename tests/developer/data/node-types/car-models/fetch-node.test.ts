import {afterEach, describe, expect, test, vi} from "vitest"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getCarModelById} from "../../../../../src/data/node-types/car-models/getCarModelById"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import type {ApiCarModelNode} from "../../../../../src/data/node-types/car-models/types/ApiCarModelNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import type {CarModelNode} from "../../../../../src/data/node-types/car-models/types/CarModelNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Fetching CAR MODEL node from data source', () => {
    test('when there is no CAR MODEL', async () => {
        const apiResponse = null

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCarModelById(12345678))
            .toEqual(null)
    })

    test('when there is a CAR MODEL', async () => {
        const apiResponse = {
            type: ApiNodeType.CAR_MODEL,
            id: 12345678,
            attributes: {
                name: "dummy",
            },
        } as ApiCarModelNode

        const expectedDataNode = {
            type: DataNodeType.CAR_MODEL,
            data: {
                id: 12345678,
                name: "dummy",
            },
        } as CarModelNode

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getCarModelById(12345678))
            .to.deep.equal(expectedDataNode)
    })
})
