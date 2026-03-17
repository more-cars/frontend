import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the MOTOR SHOW overview page', () => {
    test('when there exist no MOTOR SHOWS', async () => {
        vi.doMock("../../../../../src/models/node-types/motor-shows/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/motor-shows')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple MOTOR SHOWS', async () => {
        vi.doMock("../../../../../src/models/node-types/motor-shows/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/motor-shows')

        expect(response.statusCode)
            .toBe(200)
    })
})
