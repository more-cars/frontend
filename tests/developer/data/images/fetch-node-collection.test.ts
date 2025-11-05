import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching IMAGE collection from data source', () => {
    test('when there are no IMAGES', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllImages} = await import("../../../../src/data/node-types/images/getAllImages")
        expect(await getAllImages())
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllImages} = await import("../../../../src/data/node-types/images/getAllImages")
        expect(await getAllImages())
            .toHaveLength(3)
    })
})
