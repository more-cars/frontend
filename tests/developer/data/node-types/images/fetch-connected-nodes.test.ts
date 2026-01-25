import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected NODES from data source', () => {
    test('when there are no NODES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedNodes} = await import("../../../../../src/data/node-types/images/getConnectedNodes")
        expect(await getConnectedNodes(1))
            .toHaveLength(0)
    })

    test('when there are multiple NODES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {relationship_partner: {}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedNodes} = await import("../../../../../src/data/node-types/images/getConnectedNodes")
        expect(await getConnectedNodes(1))
            .toHaveLength(3)
    })

    test('when the IMAGE does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/images/getImageById", () => ({
            getImageById: vi.fn(() => null)
        }))

        const {getConnectedNodes} = await import("../../../../../src/data/node-types/images/getConnectedNodes")
        expect(await getConnectedNodes(1))
            .toHaveLength(0)
    })
})
