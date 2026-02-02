import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a RACING EVENT detail page', () => {
    test('when the RACING EVENT does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-events/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/racing-events/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the RACING EVENT exists', async () => {
        vi.doMock("../../../../../src/models/node-types/racing-events/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/racing-events/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
