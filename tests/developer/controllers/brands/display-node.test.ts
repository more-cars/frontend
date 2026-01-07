import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a BRAND detail page', () => {
    test('when the BRAND does not exist', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/brands/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the BRAND exists', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        // The following mocks are not needed,
        // but they avoid flooding the log with error messages (when the app tries to fetch all relationships).
        vi.doMock("../../../../src/models/node-types/brands/findConnectedCarModels", () => ({
            findConnectedCarModels: () => [],
        }))
        vi.doMock("../../../../src/models/node-types/brands/findConnectedImages", () => ({
            findConnectedImages: () => [],
        }))
        vi.doMock("../../../../src/models/node-types/brands/findConnectedMainImage", () => ({
            findConnectedMainImage: () => false,
        }))

        const response = await supertestGet('/brands/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
