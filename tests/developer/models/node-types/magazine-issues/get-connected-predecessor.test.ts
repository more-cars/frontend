import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/magazine-issues/findConnectedPredecessor"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {MagazineIssueFollowsIssueRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueFollowsIssueRelationship"

describe('Collect connected PREDECESSOR for the MAGAZINE ISSUE detail page', () => {
    test('when no PREDECESSOR is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(12345678))
            .toEqual(null)
    })

    test('when there is a PREDECESSOR connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeMagazineIssue.data} as unknown as MagazineIssueFollowsIssueRelationship

        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
