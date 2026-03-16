import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching PROGRAMME collection from data source', () => {
    test('when there are no PROGRAMMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllProgrammes} = await import("../../../../../src/data/node-types/programmes/getAllProgrammes")
        expect(await getAllProgrammes())
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMMES', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllProgrammes} = await import("../../../../../src/data/node-types/programmes/getAllProgrammes")
        expect(await getAllProgrammes())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllProgrammes} = await import("../../../../../src/data/node-types/programmes/getAllProgrammes")
        expect(await getAllProgrammes())
            .toHaveLength(0)
    })
})
