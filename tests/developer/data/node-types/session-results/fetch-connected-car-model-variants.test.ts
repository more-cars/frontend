import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected CAR MODEL VARIANT from data source', () => {
    test('when there is no CAR MODEL VARIANT connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/session-results/getSessionResultById", () => ({
            getSessionResultById: vi.fn(() => ({
                name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({data: null}))
        }))

        const {getConnectedCarModelVariant} = await import("../../../../../src/data/node-types/session-results/getConnectedCarModelVariant")
        expect(await getConnectedCarModelVariant(1))
            .toEqual(null)
    })

    test('when there is a CAR MODEL VARIANT connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedCarModelVariant} = await import("../../../../../src/data/node-types/session-results/getConnectedCarModelVariant")
        expect(await getConnectedCarModelVariant(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the SESSION RESULT does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/session-results/getSessionResultById", () => ({
            getSessionResultById: vi.fn(() => null)
        }))

        const {getConnectedCarModelVariant} = await import("../../../../../src/data/node-types/session-results/getConnectedCarModelVariant")
        expect(await getConnectedCarModelVariant(1))
            .toEqual(null)
    })
})
