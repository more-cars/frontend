import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a PROGRAMME EPISODE detail page', () => {
    test('when the PROGRAMME EPISODE does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/programme-episodes/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/programme-episodes/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the PROGRAMME EPISODE exists', async () => {
        vi.doMock("../../../../../src/models/node-types/programme-episodes/findNodeById", () => ({
            findNodeById: () => ({id: 1, title: "dummy 1"}),
        }))

        const response = await supertestGet('/programme-episodes/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
