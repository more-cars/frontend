import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a MODEL CAR detail page', () => {
    test('when the MODEL CAR does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/model-cars/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/model-cars/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the MODEL CAR exists', async () => {
        vi.doMock("../../../../../src/models/node-types/model-cars/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/model-cars/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
