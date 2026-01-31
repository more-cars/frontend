import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RACING SERIES overview page', () => {
    test('when there exist no RACING SERIES', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-series/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/racing-series')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple RACING SERIES', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-series/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/racing-series')

        expect(response.statusCode)
            .toBe(200)
    })
})
