import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MODEL CAR BRAND overview page', () => {
    test('when there exist no MODEL CAR BRANDS', async () => {
        vi.doMock("../../../../../src/models/node-types/model-car-brands/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/model-car-brands')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple MODEL CAR BRANDS', async () => {
        vi.doMock("../../../../../src/models/node-types/model-car-brands/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/model-car-brands')

        expect(response.statusCode)
            .toBe(200)
    })
})
