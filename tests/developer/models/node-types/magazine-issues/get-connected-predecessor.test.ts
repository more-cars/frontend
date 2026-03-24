import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/magazine-issues/findConnectedPredecessor"
import {MagazineIssueFollowsIssueRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueFollowsIssueRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected PREDECESSOR for the MAGAZINE ISSUE detail page', () => {
    test('when no PREDECESSOR is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a PREDECESSOR connected', async () => {
        const data = {partner_node: {type: DataNodeType.MAGAZINE_ISSUE, data: {id: 1, title: "dummy"}}} as MagazineIssueFollowsIssueRelationship
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(1))
            .toHaveProperty('id', 1)
    })
})
