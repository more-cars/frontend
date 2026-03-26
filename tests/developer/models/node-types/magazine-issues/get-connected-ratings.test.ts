import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedRatings} from "../../../../../src/models/node-types/magazine-issues/findConnectedRatings"
import {
    MagazineIssueReviewedCarModelVariantWithRatingRelationship
} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueReviewedCarModelVariantWithRatingRelationship"
import {FakeRating} from "../../../../_toolbox/fixtures/node-types/FakeRating"

describe('Collect connected RATINGS for the MAGAZINE ISSUE detail page', () => {
    test('when no RATINGS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRatingNodes').mockResolvedValue([])

        expect(await findConnectedRatings(12345678))
            .toHaveLength(0)
    })

    test('when there are RATINGS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRatingNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRating.data} as unknown as MagazineIssueReviewedCarModelVariantWithRatingRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRating.data} as unknown as MagazineIssueReviewedCarModelVariantWithRatingRelationship,
        ])

        expect(await findConnectedRatings(12345678))
            .toHaveLength(2)
    })
})
