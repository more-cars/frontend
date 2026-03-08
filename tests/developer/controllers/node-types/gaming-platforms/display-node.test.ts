import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a GAMING PLATFORM detail page', () => {
    test('when the GAMING PLATFORM does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/gaming-platforms/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/gaming-platforms/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the GAMING PLATFORM exists', async () => {
        vi.doMock("../../../../../src/models/node-types/gaming-platforms/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/gaming-platforms/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
