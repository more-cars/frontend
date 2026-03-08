import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/magazine-issues/findConnectedPredecessor"
import {MagazineIssueFollowsIssueRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueFollowsIssueRelationship"

describe('Collect connected MAGAZINE ISSUE for the MAGAZINE ISSUE detail page', () => {
    test('when no MAGAZINE ISSUE is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a MAGAZINE ISSUE connected', async () => {
        const data = {partner_node: {id: 1, title: "dummy"}} as MagazineIssueFollowsIssueRelationship
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(1))
            .toHaveProperty('id', 1)
    })
})
