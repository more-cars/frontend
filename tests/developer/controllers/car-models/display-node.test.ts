import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a CAR MODEL detail page', () => {
    test('when the CAR MODEL does not exist', async () => {
        vi.doMock("../../../../src/models/node-types/car-models/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/car-models/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the CAR MODEL exists', async () => {
        vi.doMock("../../../../src/models/node-types/car-models/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))
        vi.doMock("../../../../src/models/node-types/car-models/findConnectedBrand", () => ({
            findConnectedBrand: () => false,
        }))
        vi.doMock("../../../../src/models/node-types/car-models/findConnectedImages", () => ({
            findConnectedImages: () => [],
        }))

        const response = await supertestGet('/car-models/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
