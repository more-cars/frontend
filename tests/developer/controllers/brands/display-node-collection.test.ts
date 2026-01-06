import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the BRAND overview page', () => {
    test('when there exist no BRANDS', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/brands')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple BRANDS', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/brands')

        expect(response.statusCode)
            .toBe(200)
    })
})
