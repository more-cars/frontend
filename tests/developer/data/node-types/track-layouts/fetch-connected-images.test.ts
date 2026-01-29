import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected IMAGES from data source', () => {
    test('when there are no IMAGES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedImages} = await import("../../../../../src/data/node-types/track-layouts/getConnectedImages")
        expect(await getConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are multiple IMAGES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedImages} = await import("../../../../../src/data/node-types/track-layouts/getConnectedImages")
        expect(await getConnectedImages(1))
            .toHaveLength(3)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/track-layouts/getTrackLayoutById", () => ({
            getTrackLayoutById: vi.fn(() => null)
        }))

        const {getConnectedImages} = await import("../../../../../src/data/node-types/track-layouts/getConnectedImages")
        expect(await getConnectedImages(1))
            .toHaveLength(0)
    })
})
