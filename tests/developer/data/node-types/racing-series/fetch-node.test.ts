import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING SERIES node from data source', () => {
    test('when there is no RACING SERIES', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSeriesById} = await import("../../../../../src/data/node-types/racing-series/getRacingSeriesById")
        expect(await getRacingSeriesById(1))
            .toEqual(null)
    })

    test('when there is a RACING SERIES', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSeriesById} = await import("../../../../../src/data/node-types/racing-series/getRacingSeriesById")
        expect(await getRacingSeriesById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
