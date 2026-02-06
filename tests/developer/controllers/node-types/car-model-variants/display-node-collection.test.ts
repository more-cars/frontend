import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the CAR MODEL VARIANT overview page', () => {
    test('when there exist no CAR MODEL VARIANTS', async () => {
        vi.doMock("../../../../../src/models/node-types/car-model-variants/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/car-model-variants')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple CAR MODEL VARIANTS', async () => {
        vi.doMock("../../../../../src/models/node-types/car-model-variants/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/car-model-variants')

        expect(response.statusCode)
            .toBe(200)
    })
})
