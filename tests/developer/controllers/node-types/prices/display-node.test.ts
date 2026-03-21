import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a PRICE detail page', () => {
    test('when the PRICE does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/prices/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/prices/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the PRICE exists', async () => {
        vi.doMock("../../../../../src/models/node-types/prices/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/prices/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
