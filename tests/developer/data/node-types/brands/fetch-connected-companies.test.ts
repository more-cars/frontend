import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected COMPANY from data source', () => {
    test('when there is no COMPANY connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedCompany} = await import("../../../../../src/data/node-types/brands/getConnectedCompany")
        expect(await getConnectedCompany(1))
            .toEqual(null)
    })

    test('when there is a COMPANY connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedCompany} = await import("../../../../../src/data/node-types/brands/getConnectedCompany")
        expect(await getConnectedCompany(1))
            .toHaveProperty('partner_node.id', 2)
    })
})
