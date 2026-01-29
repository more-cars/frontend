import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching TRACK LAYOUT node from data source', () => {
    test('when there is no TRACK LAYOUT', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTrackLayoutById} = await import("../../../../../src/data/node-types/track-layouts/getTrackLayoutById")
        expect(await getTrackLayoutById(1))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getTrackLayoutById} = await import("../../../../../src/data/node-types/track-layouts/getTrackLayoutById")
        expect(await getTrackLayoutById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
