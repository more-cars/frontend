import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching TRACK LAYOUT collection from data source', () => {
    test('when there are no TRACK LAYOUTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getAllTrackLayouts} = await import("../../../../../src/data/node-types/track-layouts/getAllTrackLayouts")
        expect(await getAllTrackLayouts())
            .toHaveLength(0)
    })

    test('when there are multiple TRACK LAYOUTS', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: [{}, {}, {}]}))
        }))

        const {getAllTrackLayouts} = await import("../../../../../src/data/node-types/track-layouts/getAllTrackLayouts")
        expect(await getAllTrackLayouts())
            .toHaveLength(3)
    })

    test('when the API does not respond', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => undefined)
        }))

        const {getAllTrackLayouts} = await import("../../../../../src/data/node-types/track-layouts/getAllTrackLayouts")
        expect(await getAllTrackLayouts())
            .toHaveLength(0)
    })
})
