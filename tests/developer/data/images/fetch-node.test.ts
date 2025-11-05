import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching IMAGE node from data source', () => {
    // TODO error handling needs to be implemented before this test can work
    test.skip('when there is no IMAGE', async () => {
        const responseData = null
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getImageById} = await import("../../../../src/data/node-types/images/getImageById")
        expect(await getImageById(1))
            .toEqual(null)
    })

    test('when there is a IMAGE', async () => {
        const responseData = {data: {id: 1, name: "dummy 1"}}
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getImageById} = await import("../../../../src/data/node-types/images/getImageById")
        expect(await getImageById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
