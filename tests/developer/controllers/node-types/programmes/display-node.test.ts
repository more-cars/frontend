import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a PROGRAMME detail page', () => {
    test('when the PROGRAMME does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/programmes/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/programmes/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the PROGRAMME exists', async () => {
        vi.doMock("../../../../../src/models/node-types/programmes/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/programmes/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
