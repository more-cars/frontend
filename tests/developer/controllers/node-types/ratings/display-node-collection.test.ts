import {afterEach, describe, expect, test, vi} from "vitest"
import {supertestGet} from "../../../supertestGet"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RATING overview page', () => {
    test('when there exist no RATINGS', async () => {
        vi.doMock("../../../../../src/models/node-types/ratings/findAllNodes", () => ({
            findAllNodes: () => [],
        }))

        const response = await supertestGet('/ratings')

        expect(response.statusCode)
            .toBe(200)
    })


    test('when there exist multiple RATINGS', async () => {
        vi.doMock("../../../../../src/models/node-types/ratings/findAllNodes", () => ({
            findAllNodes: () => [
                {id: 1, rating_value: 93},
                {id: 2, rating_value: 93},
                {id: 3, rating_value: 93},
            ],
        }))

        const response = await supertestGet('/ratings')

        expect(response.statusCode)
            .toBe(200)
    })
})
