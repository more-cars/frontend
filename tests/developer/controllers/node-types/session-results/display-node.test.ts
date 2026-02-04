import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a SESSION RESULT detail page', () => {
    test('when the SESSION RESULT does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/session-results/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/session-results/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the SESSION RESULT exists', async () => {
        vi.doMock("../../../../../src/models/node-types/session-results/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/session-results/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
