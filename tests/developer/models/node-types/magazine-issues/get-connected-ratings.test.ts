import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedRatings} from "../../../../../src/models/node-types/magazine-issues/findConnectedRatings"
import {MagazineIssueReviewedCarModelVariantWithRatingRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueReviewedCarModelVariantWithRatingRelationship"

describe('Collect connected RATINGS for the MAGAZINE ISSUE detail page', () => {
    test('when no RATINGS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRatingNodes').mockResolvedValue([])

        expect(await findConnectedRatings(1))
            .toHaveLength(0)
    })

    test('when there are RATINGS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRatingNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MagazineIssueReviewedCarModelVariantWithRatingRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MagazineIssueReviewedCarModelVariantWithRatingRelationship,
        ])

        expect(await findConnectedRatings(1))
            .toHaveLength(2)
    })
})
