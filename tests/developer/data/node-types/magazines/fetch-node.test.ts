import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MAGAZINE node from data source', () => {
    test('when there is no MAGAZINE', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMagazineById} = await import("../../../../../src/data/node-types/magazines/getMagazineById")
        expect(await getMagazineById(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE', async () => {
        const responseData = {
            type: "magazines",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMagazineById} = await import("../../../../../src/data/node-types/magazines/getMagazineById")
        expect(await getMagazineById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
