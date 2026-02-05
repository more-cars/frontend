import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the LAP TIME overview page', () => {
    test('when there exist no LAP TIMES', async () => {
        vi.doMock("../../../../../src/models/node-types/lap-times/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/lap-times')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple LAP TIMES', async () => {
        vi.doMock("../../../../../src/models/node-types/lap-times/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, driver_name: "dummy 1"},
                {id: 2, driver_name: "dummy 2"},
                {id: 3, driver_name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/lap-times')

        expect(response.statusCode)
            .toBe(200)
    })
})
