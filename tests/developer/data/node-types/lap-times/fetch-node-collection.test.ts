import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching LAP TIME collection from data source', () => {
    test('when there are no LAP TIMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllLapTimes} = await import("../../../../../src/data/node-types/lap-times/getAllLapTimes")
        expect(await getAllLapTimes())
            .toHaveLength(0)
    })

    test('when there are multiple LAP TIMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllLapTimes} = await import("../../../../../src/data/node-types/lap-times/getAllLapTimes")
        expect(await getAllLapTimes())
            .toHaveLength(3)
    })
})
