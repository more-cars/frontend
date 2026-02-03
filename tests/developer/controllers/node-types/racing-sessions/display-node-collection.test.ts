import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RACING SESSION overview page', () => {
    test('when there exist no RACING SESSIONS', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-sessions/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/racing-sessions')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple RACING SESSIONS', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-sessions/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/racing-sessions')

        expect(response.statusCode)
            .toBe(200)
    })
})
