import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a TRACK LAYOUT detail page', () => {
    test('when the TRACK LAYOUT does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/track-layouts/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/track-layouts/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the TRACK LAYOUT exists', async () => {
        vi.doMock("../../../../../src/models/node-types/track-layouts/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/track-layouts/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
