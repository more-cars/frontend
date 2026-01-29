import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACE TRACK from data source', () => {
    test('when there is no RACE TRACK connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/track-layouts/getTrackLayoutById", () => ({
            getTrackLayoutById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedRaceTrack} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRaceTrack")
        expect(await getConnectedRaceTrack(1))
            .toEqual(null)
    })

    test('when there is a RACE TRACK connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedRaceTrack} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRaceTrack")
        expect(await getConnectedRaceTrack(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the TRACK LAYOUT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/track-layouts/getTrackLayoutById", () => ({
            getTrackLayoutById: vi.fn(() => null)
        }))

        const {getConnectedRaceTrack} = await import("../../../../../src/data/node-types/track-layouts/getConnectedRaceTrack")
        expect(await getConnectedRaceTrack(1))
            .toEqual(null)
    })
})
