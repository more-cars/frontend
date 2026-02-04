import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the SESSION RESULT overview page', () => {
    test('when there exist no SESSION RESULTS', async () => {
        vi.doMock("../../../../../src/models/node-types/session-results/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/session-results')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple SESSION RESULTS', async () => {
        vi.doMock("../../../../../src/models/node-types/session-results/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, position: 1},
                {id: 2, position: 2},
                {id: 3, position: 3},
            ],
        }))

        const response = await supertestGet('/session-results')

        expect(response.statusCode)
            .toBe(200)
    })
})
