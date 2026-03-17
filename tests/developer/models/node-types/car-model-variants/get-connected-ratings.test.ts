import {describe, expect, test, vi} from "vitest"
import {CarModelVariantDataFacade} from "../../../../../src/data/CarModelVariantDataFacade"
import {findConnectedRatings} from "../../../../../src/models/node-types/car-model-variants/findConnectedRatings"
import {CarModelVariantReviewedByMagazineIssueWithRatingRelationship} from "../../../../../src/data/node-types/car-model-variants/types/CarModelVariantReviewedByMagazineIssueWithRatingRelationship"

describe('Collect connected RATINGS for the CAR MODEL VARIANT detail page', () => {
    test('when no RATINGS are connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRatingNodes').mockResolvedValue([])

        expect(await findConnectedRatings(1))
            .toHaveLength(0)
    })

    test('when there are RATINGS connected', async () => {
        vi.spyOn(CarModelVariantDataFacade, 'getConnectedRatingNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as CarModelVariantReviewedByMagazineIssueWithRatingRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as CarModelVariantReviewedByMagazineIssueWithRatingRelationship,
        ])

        expect(await findConnectedRatings(1))
            .toHaveLength(2)
    })
})
