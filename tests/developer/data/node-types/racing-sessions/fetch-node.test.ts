import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching RACING SESSION node from data source', () => {
    test('when there is no RACING SESSION', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSessionById} = await import("../../../../../src/data/node-types/racing-sessions/getRacingSessionById")
        expect(await getRacingSessionById(1))
            .toEqual(null)
    })

    test('when there is a RACING SESSION', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getRacingSessionById} = await import("../../../../../src/data/node-types/racing-sessions/getRacingSessionById")
        expect(await getRacingSessionById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
