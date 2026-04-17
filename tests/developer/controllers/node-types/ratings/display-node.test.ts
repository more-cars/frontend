import {afterEach, describe, expect, test, vi} from "vitest"
import {NodeModelFacade} from "../../../../../src/models/NodeModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRating} from "../../../../_toolbox/fixtures/node-types/FakeRating"
import {RatingModelFacade} from "../../../../../src/models/RatingModelFacade"
import * as node from "../../../../../src/controllers/node-types/ratings/displayNode"

afterEach(() => {
    vi.resetAllMocks()
})

describe('Requesting a RATING detail page', () => {
    test('when the RATING does not exist', async () => {
        const spy = vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => null)

        const response = await supertestGet('/rating-node-12345678')

        expect(response.statusCode)
            .toBe(404)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when the RATING exists', async () => {
        vi.spyOn(NodeModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRating.model))
        vi.spyOn(RatingModelFacade, 'getNodeById')
            .mockImplementation(async () => (FakeRating.model))

        const spy = vi.spyOn(node, 'displayNode')

        const response = await supertestGet('/rating-node-12345678')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
