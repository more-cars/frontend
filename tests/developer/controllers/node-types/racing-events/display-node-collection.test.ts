import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RACING EVENT overview page', () => {
    test('when there exist no RACING EVENTS', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-events/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/racing-events')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple RACING EVENTS', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-events/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/racing-events')

        expect(response.statusCode)
            .toBe(200)
    })
})
