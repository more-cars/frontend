import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected BRANDS from data source', () => {
    test('when there are no BRANDS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedBrands} = await import("../../../../../src/data/node-types/companies/getConnectedBrands")
        expect(await getConnectedBrands(1))
            .toHaveLength(0)
    })

    test('when there are multiple BRANDS connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedBrands} = await import("../../../../../src/data/node-types/companies/getConnectedBrands")
        expect(await getConnectedBrands(1))
            .toHaveLength(3)
    })
})
