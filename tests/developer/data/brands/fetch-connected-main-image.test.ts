import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected main IMAGE from data source', () => {
    test('when there in no main IMAGE connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getMainImageRelationship} = await import("../../../../src/data/node-types/brands/getMainImageRelationship")
        expect(await getMainImageRelationship(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        vi.doMock("../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getMainImageRelationship} = await import("../../../../src/data/node-types/brands/getMainImageRelationship")
        expect(await getMainImageRelationship(1))
            .toHaveProperty('partner_node.id', 2)
    })
})
