import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the GAMING PLATFORM overview page', () => {
    test('when there exist no GAMING PLATFORMS', async () => {
        vi.doMock("../../../../../src/models/node-types/gaming-platforms/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/gaming-platforms')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple GAMING PLATFORMS', async () => {
        vi.doMock("../../../../../src/models/node-types/gaming-platforms/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/gaming-platforms')

        expect(response.statusCode)
            .toBe(200)
    })
})
