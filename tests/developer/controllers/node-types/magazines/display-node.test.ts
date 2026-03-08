import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a MAGAZINE detail page', () => {
    test('when the MAGAZINE does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/magazines/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/magazines/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the MAGAZINE exists', async () => {
        vi.doMock("../../../../../src/models/node-types/magazines/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/magazines/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
