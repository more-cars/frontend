import {afterEach, describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/car-models/getCarModelById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import {FakeCarModel} from "../../../../_toolbox/fixtures/node-types/FakeCarModel"
import {getConnectedSuccessorCarModel} from "../../../../../src/data/node-types/car-models/getConnectedSuccessorCarModel"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected successor CAR MODEL from data source', () => {
    test('when there is no successor CAR MODEL connected', async () => {
        const source = FakeCarModel.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedSuccessorCarModel(12345678))
            .toEqual(null)
    })

    test('when there is a successor CAR MODEL connected', async () => {
        const source = FakeCarModel.data
        const target = {node_type: ApiNodeType.CAR_MODEL, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedSuccessorCarModel(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the CAR MODEL does not exist', async () => {
        vi.spyOn(node, 'getCarModelById')
            .mockImplementation(async () => null)

        expect(await getConnectedSuccessorCarModel(12345678))
            .toEqual(null)
    })
})
