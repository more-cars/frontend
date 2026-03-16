import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the PROGRAMME EPISODE overview page', () => {
    test('when there exist no PROGRAMME EPISODES', async () => {
        vi.doMock("../../../../../src/models/node-types/programme-episodes/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/programme-episodes')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple PROGRAMME EPISODES', async () => {
        vi.doMock("../../../../../src/models/node-types/programme-episodes/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, title: "dummy 1"},
                {id: 2, title: "dummy 2"},
                {id: 3, title: "dummy 3"},
            ],
        }))

        const response = await supertestGet('/programme-episodes')

        expect(response.statusCode)
            .toBe(200)
    })
})
