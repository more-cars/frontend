import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected PROGRAMME EPISODES from data source', () => {
    test('when there are no PROGRAMME EPISODES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: []}))
        }))

        const {getConnectedProgrammeEpisodes} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedProgrammeEpisodes")
        expect(await getConnectedProgrammeEpisodes(1))
            .toHaveLength(0)
    })

    test('when there are multiple PROGRAMME EPISODES connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: [
                    {data: {partner_node: {data: {id: 1}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}},
                    {data: {partner_node: {data: {id: 3}}, created_at: 'dummy', updated_at: 'dummy'}},
                ]
            }))
        }))

        const {getConnectedProgrammeEpisodes} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedProgrammeEpisodes")
        expect(await getConnectedProgrammeEpisodes(1))
            .toHaveLength(3)
    })

    test('when the CAR MODEL VARIANT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/car-model-variants/getCarModelVariantById", () => ({
            getCarModelVariantById: vi.fn(() => null)
        }))

        const {getConnectedProgrammeEpisodes} = await import("../../../../../src/data/node-types/car-model-variants/getConnectedProgrammeEpisodes")
        expect(await getConnectedProgrammeEpisodes(1))
            .toHaveLength(0)
    })
})
