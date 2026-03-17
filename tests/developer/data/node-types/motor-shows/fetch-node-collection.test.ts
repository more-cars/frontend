import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MOTOR SHOW collection from data source', () => {
    test('when there are no MOTOR SHOWS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllMotorShows} = await import("../../../../../src/data/node-types/motor-shows/getAllMotorShows")
        expect(await getAllMotorShows())
            .toHaveLength(0)
    })

    test('when there are multiple MOTOR SHOWS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllMotorShows} = await import("../../../../../src/data/node-types/motor-shows/getAllMotorShows")
        expect(await getAllMotorShows())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllMotorShows} = await import("../../../../../src/data/node-types/motor-shows/getAllMotorShows")
        expect(await getAllMotorShows())
            .toHaveLength(0)
    })
})
