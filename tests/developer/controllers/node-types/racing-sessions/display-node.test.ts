import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a RACING SESSION detail page', () => {
    test('when the RACING SESSION does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-sessions/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/racing-sessions/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the RACING SESSION exists', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-sessions/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/racing-sessions/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
