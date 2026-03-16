import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PROGRAMME node from data source', () => {
    test('when there is no PROGRAMME', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getProgrammeById} = await import("../../../../../src/data/node-types/programmes/getProgrammeById")
        expect(await getProgrammeById(1))
            .toEqual(null)
    })

    test('when there is a PROGRAMME', async () => {
        const responseData = {
            type: "programmes",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getProgrammeById} = await import("../../../../../src/data/node-types/programmes/getProgrammeById")
        expect(await getProgrammeById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
