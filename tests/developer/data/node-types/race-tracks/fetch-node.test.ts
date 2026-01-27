import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACE TRACK node from data source', () => {
    test('when there is no RACE TRACK', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRaceTrackById} = await import("../../../../../src/data/node-types/race-tracks/getRaceTrackById")
        expect(await getRaceTrackById(1))
            .toEqual(null)
    })

    test('when there is a RACE TRACK', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRaceTrackById} = await import("../../../../../src/data/node-types/race-tracks/getRaceTrackById")
        expect(await getRaceTrackById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
