import {afterEach, describe, expect, test, vi} from "vitest"
import {RatingControllerFacade} from "../../../../../src/controllers/RatingControllerFacade"
import {RatingModelFacade} from "../../../../../src/models/RatingModelFacade"
import {supertestGet} from "../../../supertestGet"
import {FakeRating} from "../../../../_toolbox/fixtures/node-types/FakeRating"
import type {Rating} from "../../../../../src/models/node-types/ratings/types/Rating"

afterEach(() => {
    vi.resetModules()
})

describe('Requesting the RATING overview page', () => {
    test('when there exist no RATINGS', async () => {
        const spy = vi.spyOn(RatingControllerFacade, 'showAllNodes')

        vi.spyOn(RatingModelFacade, 'getAllNodes')
            .mockImplementation(async () => [])

        const response = await supertestGet('/ratings')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })


    test('when there exist multiple RATINGS', async () => {
        const spy = vi.spyOn(RatingControllerFacade, 'showAllNodes')

        vi.spyOn(RatingModelFacade, 'getAllNodes')
            .mockImplementation(async () => [
                FakeRating.model,
                FakeRating.model,
                FakeRating.model,
            ] satisfies Rating[])

        const response = await supertestGet('/ratings')

        expect(response.statusCode)
            .toBe(200)

        expect(spy)
            .toHaveBeenCalledTimes(1)
    })
})
