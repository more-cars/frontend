import {describe, expect, test, vi} from "vitest"
import {ApiNodeType} from "../../../../../src/data/types/ApiNodeType"
import * as node from "../../../../../src/data/node-types/model-cars/getModelCarById"
import * as api from "../../../../../src/data/requestDataFromApi"
import {getConnectedImages} from "../../../../../src/data/node-types/model-cars/getConnectedImages"
import {FakeModelCar} from "../../../../_toolbox/fixtures/node-types/FakeModelCar"

describe('Fetching connected IMAGES from data source', () => {
    test('when there are no IMAGES connected', async () => {
        const source = FakeModelCar.data
        const apiResponse = {data: []}

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => (source))

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => (apiResponse))

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES connected', async () => {
        const source = FakeModelCar.data
        const target = {node_type: ApiNodeType.IMAGE}

        const apiResponse = {
            data: [
                {data: {partner_node: target}},
                {data: {partner_node: target}},
                {data: {partner_node: target}},
            ]
        }

        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => source)

        vi.spyOn(api, 'requestDataFromApi')
            .mockImplementation(async () => apiResponse)

        expect(await getConnectedImages(12345678))
            .toHaveLength(3)
    })

    test('when the MODEL CAR does not exist', async () => {
        vi.spyOn(node, 'getModelCarById')
            .mockImplementation(async () => null)

        expect(await getConnectedImages(12345678))
            .toHaveLength(0)
    })
})
