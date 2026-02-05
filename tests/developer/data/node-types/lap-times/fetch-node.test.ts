import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching LAP TIME node from data source', () => {
    test('when there is no LAP TIME', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getLapTimeById} = await import("../../../../../src/data/node-types/lap-times/getLapTimeById")
        expect(await getLapTimeById(1))
            .toEqual(null)
    })

    test('when there is a LAP TIME', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getLapTimeById} = await import("../../../../../src/data/node-types/lap-times/getLapTimeById")
        expect(await getLapTimeById(1))
            .toEqual({id: 1, driver_name: "dummy 1"})
    })
})
