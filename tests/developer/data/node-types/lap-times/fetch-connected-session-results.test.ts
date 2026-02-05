import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching connected SESSION RESULT from data source', () => {
    test('when there is no SESSION RESULT connected', async () => {
        // mocking the node
        vi.doMock("../../../../../src/data/node-types/lap-times/getLapTimeById", () => ({
            getLapTimeById: vi.fn(() => ({
                driver_name: 'test'
            }))
        }))

        // mocking the relationship
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({driver_name: null}))
        }))

        const {getConnectedSessionResult} = await import("../../../../../src/data/node-types/lap-times/getConnectedSessionResult")
        expect(await getConnectedSessionResult(1))
            .toEqual(null)
    })

    test('when there is a SESSION RESULT connected', async () => {
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => ({
                data: {relationship_partner: {data: {id: 2}}, created_at: 'dummy', updated_at: 'dummy'}
            }))
        }))

        const {getConnectedSessionResult} = await import("../../../../../src/data/node-types/lap-times/getConnectedSessionResult")
        expect(await getConnectedSessionResult(1))
            .toHaveProperty('partner_node.id', 2)
    })

    test('when the LAP TIME does not exist', async () => {
        vi.doMock("../../../../../src/data/node-types/lap-times/getLapTimeById", () => ({
            getLapTimeById: vi.fn(() => null)
        }))

        const {getConnectedSessionResult} = await import("../../../../../src/data/node-types/lap-times/getConnectedSessionResult")
        expect(await getConnectedSessionResult(1))
            .toEqual(null)
    })
})
