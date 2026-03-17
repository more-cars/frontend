import {afterEach, describe, expect, test, vi} from "vitest"

afterEach(() => {
    vi.resetModules()
})

describe('Fetching MOTOR SHOW node from data source', () => {
    test('when there is no MOTOR SHOW', async () => {
        const responseData = null
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMotorShowById} = await import("../../../../../src/data/node-types/motor-shows/getMotorShowById")
        expect(await getMotorShowById(1))
            .toEqual(null)
    })

    test('when there is a MOTOR SHOW', async () => {
        const responseData = {
            type: "motor-shows",
            id: 1,
            attributes: {
                name: "dummy 1"
            }
        }
        vi.doMock("../../../../../src/data/requestDataFromApi", () => ({
            requestDataFromApi: vi.fn(() => (responseData))
        }))

        const {getMotorShowById} = await import("../../../../../src/data/node-types/motor-shows/getMotorShowById")
        expect(await getMotorShowById(1))
            .toEqual({id: 1, name: "dummy 1"})
    })
})
