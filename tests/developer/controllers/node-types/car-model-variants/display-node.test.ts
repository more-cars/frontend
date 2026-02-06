import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a CAR MODEL VARIANT detail page', () => {
    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/car-model-variants/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/car-model-variants/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the CAR MODEL VARIANT exists', async () => {
        vi.doMock("../../../../../src/models/node-types/car-model-variants/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/car-model-variants/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
