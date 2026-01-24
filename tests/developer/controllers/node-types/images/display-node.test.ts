import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a IMAGE detail page', () => {
    test('when the IMAGE does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/images/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/images/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the IMAGE exists', async () => {
        vi.doMock("../../../../../src/models/node-types/images/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        // The following mocks are not needed,
        // but they avoid flooding the log with error messages (when the app tries to fetch all relationships).
        vi.doMock("../../../../../src/models/node-types/images/findConnectedBrands", () => ({
            findConnectedBrands: () => [],
        }))
        vi.doMock("../../../../../src/models/node-types/images/findConnectedCarModels", () => ({
            findConnectedCarModels: () => [],
        }))

        const response = await supertestGet('/images/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
