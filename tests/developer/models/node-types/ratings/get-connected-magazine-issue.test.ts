import {describe, expect, test, vi} from "vitest"
import {RatingDataFacade} from "../../../../../src/data/RatingDataFacade"
import {findConnectedMagazineIssue} from "../../../../../src/models/node-types/ratings/findConnectedMagazineIssue"
import {RatingByMagazineIssueRelationship} from "../../../../../src/data/node-types/ratings/types/RatingByMagazineIssueRelationship"

describe('Collect connected MAGAZINE ISSUE for the RATING detail page', () => {
    test('when no MAGAZINE ISSUE is connected', async () => {
        vi.spyOn(RatingDataFacade, 'getConnectedMagazineIssueNode').mockResolvedValue(null)

        expect(await findConnectedMagazineIssue(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        const data = {partner_node: {id: 1, title: "dummy"}} as RatingByMagazineIssueRelationship
        vi.spyOn(RatingDataFacade, 'getConnectedMagazineIssueNode').mockResolvedValue(data)

        expect(await findConnectedMagazineIssue(1))
            .toHaveProperty('id', 1)
    })
})
