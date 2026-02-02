import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected RACING SERIES from data source', () => {
    test('when there is no RACING SERIES connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedRacingSeries} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSeries")
        expect(await getConnectedRacingSeries(1))
            .toEqual(null)
    })

    test('when there is a RACING SERIES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedRacingSeries} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSeries")
        expect(await getConnectedRacingSeries(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the RACING EVENT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/racing-events/getRacingEventById", () => ({
            getRacingEventById: vi.fn(() => null)
        }))

        const {getConnectedRacingSeries} = await import("../../../../../src/data/node-types/racing-events/getConnectedRacingSeries")
        expect(await getConnectedRacingSeries(1))
            .toEqual(null)
    })
})
