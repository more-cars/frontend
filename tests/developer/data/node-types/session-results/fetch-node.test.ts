import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching SESSION RESULT node from data source', () => {
    test('when there is no SESSION RESULT', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getSessionResultById} = await import("../../../../../src/data/node-types/session-results/getSessionResultById")
        expect(await getSessionResultById(1))
            .toEqual(null)
    })

    test('when there is a SESSION RESULT', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getSessionResultById} = await import("../../../../../src/data/node-types/session-results/getSessionResultById")
        expect(await getSessionResultById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
