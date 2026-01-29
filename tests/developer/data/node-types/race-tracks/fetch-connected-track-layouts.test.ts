import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected TRACK LAYOUTS from data source', () => {
    test('when there are no TRACK LAYOUTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedTrackLayouts} = await import("../../../../../src/data/node-types/race-tracks/getConnectedTrackLayouts")
        expect(await getConnectedTrackLayouts(1))
            .toHaveLength(0)
    })

    test('when there are multiple TRACK LAYOUTS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedTrackLayouts} = await import("../../../../../src/data/node-types/race-tracks/getConnectedTrackLayouts")
        expect(await getConnectedTrackLayouts(1))
            .toHaveLength(3)
    })

    test('when the RACE TRACK does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/race-tracks/getRaceTrackById", () => ({
            getRaceTrackById: vi.fn(() => null)
        }))

        const {getConnectedTrackLayouts} = await import("../../../../../src/data/node-types/race-tracks/getConnectedTrackLayouts")
        expect(await getConnectedTrackLayouts(1))
            .toHaveLength(0)
    })
})
