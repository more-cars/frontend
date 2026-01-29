import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a RACING SERIES detail page', () => {
    test('when the RACING SERIES does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-series/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/racing-series/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the RACING SERIES exists', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-series/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/racing-series/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
