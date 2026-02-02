import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING EVENT node from data source', () => {
    test('when there is no RACING EVENT', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingEventById} = await import("../../../../../src/data/node-types/racing-events/getRacingEventById")
        expect(await getRacingEventById(1))
            .toEqual(null)
    })

    test('when there is a RACING EVENT', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingEventById} = await import("../../../../../src/data/node-types/racing-events/getRacingEventById")
        expect(await getRacingEventById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
