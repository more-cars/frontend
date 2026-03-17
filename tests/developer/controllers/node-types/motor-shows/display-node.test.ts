import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting a MOTOR SHOW detail page', () => {
    test('when the MOTOR SHOW does not exist', async () => {
        vi.doMock("../../../../../src/models/node-types/motor-shows/findNodeById", () => ({
            findNodeById: () => false,
        }))

        const response = await supertestGet('/motor-shows/1')

        expect(response.statusCode)
            .toBe(404)
    })


    test('when the MOTOR SHOW exists', async () => {
        vi.doMock("../../../../../src/models/node-types/motor-shows/findNodeById", () => ({
            findNodeById: () => ({id: 1, name: "dummy 1"}),
        }))

        const response = await supertestGet('/motor-shows/1')

        expect(response.statusCode)
            .toBe(200)
    })
})
