import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the Track Layout overview page', () => {
    test('when there exist no TRACK LAYOUTS', async () => {
        vi.doMock("../../../../src/models/node-types/track-layouts/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/track-layouts')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple Track Layouts', async () => {
        vi.doMock("../../../../src/models/node-types/track-layouts/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, name: "dummy 1"},
                {id: 2, name: "dummy 2"},
                {id: 3, name: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/track-layouts')

        expect(response.statusCode)
            .toBe(200)
    })
})
