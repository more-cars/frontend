import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Pagination on the BRAND overview page', () => {
    test('valid page numbers should be accepted', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/brands?page=1')

        expect(response.statusCode)
            .toBe(200)
    })

    test('page numbers should be accepted, even when out of range', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/brands?page=100')

        expect(response.statusCode)
            .toBe(200)
    })


    test('page numbers should be accepted, even when invalid', async () => {
        vi.doMock("../../../../src/models/node-types/brands/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/brands?page=-1')

        expect(response.statusCode)
            .toBe(200)
    })
})
