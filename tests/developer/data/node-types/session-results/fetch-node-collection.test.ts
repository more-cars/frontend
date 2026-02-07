import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching SESSION RESULT collection from data source', () => {
    test('when there are no SESSION RESULTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllSessionResults} = await import("../../../../../src/data/node-types/session-results/getAllSessionResults")
        expect(await getAllSessionResults())
            .toHaveLength(0)
    })

    test('when there are multiple SESSION RESULTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllSessionResults} = await import("../../../../../src/data/node-types/session-results/getAllSessionResults")
        expect(await getAllSessionResults())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllSessionResults} = await import("../../../../../src/data/node-types/session-results/getAllSessionResults")
        expect(await getAllSessionResults())
            .toHaveLength(0)
    })
})
