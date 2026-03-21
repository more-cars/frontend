import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MODEL CAR overview page', () => {
    test('when there exist no MODEL CARS', async () => {
        vi.doMock("../../../../../src/models/node-types/model-cars/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/model-cars')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple MODEL CARS', async () => {
        vi.doMock("../../../../../src/models/node-types/model-cars/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/model-cars')

        expect(response.statusCode)
            .toBe(200)
    })
})
