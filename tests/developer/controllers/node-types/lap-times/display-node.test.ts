import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a LAP TIME detail page', () => {
    test('when the LAP TIME does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/lap-times/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/lap-times/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the LAP TIME exists', async () => {
        vi.doMock("../../../../../src/models/node-types/lap-times/findNodeById", () => ({
            findNodeById: () => ({id: 1, driver_name: "dummy 1"}),
        }))

        const response = await supertestGet('/lap-times/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
