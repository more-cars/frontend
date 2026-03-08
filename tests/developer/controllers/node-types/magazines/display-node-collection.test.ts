import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MAGAZINE overview page', () => {
    test('when there exist no MAGAZINES', async () => {
        vi.doMock("../../../../../src/models/node-types/magazines/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple MAGAZINES', async () => {
        vi.doMock("../../../../../src/models/node-types/magazines/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/magazines')

        expect(response.statusCode)
            .toBe(200)
    })
})
