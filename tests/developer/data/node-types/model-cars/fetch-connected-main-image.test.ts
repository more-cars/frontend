import {describe, expect, test, vi} from "vitest"
import * as node from "../../../../../src/data/node-types/model-cars/getModelCarById"
import {getConnectedMainImage} from "../../../../../src/data/node-types/model-cars/getConnectedMainImage"
import * as api from "../../../../../src/data/requestDataFromApi"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"

describe('Fetching connected main IMAGE from data source', () => {
    test('when there is no main IMAGE connected', async () => {
        const source = FakeModelCar.data
        const apiResponse = {data: null}

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const source = FakeModelCar.data
        const target = {node_type: ApiNodeType.IMAGE, data: {id: 11111118}}

        const apiResponse = {data: {partner_node: target}}

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedMainImage(12345678))
            .toHaveProperty('partner_node.data.id', 11111118)
    })

    test('when the MODEL CAR does not exist', async () => {
        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => null)

        expect(await getConnectedMainImage(12345678))
            .toEqual(null)
    })
})
