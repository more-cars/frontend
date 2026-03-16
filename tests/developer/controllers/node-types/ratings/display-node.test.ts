import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a RATING detail page', () => {
    test('when the RATING does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/ratings/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/ratings/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the RATING exists', async () => {
        vi.doMock("../../../../../src/models/node-types/ratings/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/ratings/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
