import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/magazine-issues/findConnectedSuccessor"
import {MagazineIssueFollowedByIssueRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueFollowedByIssueRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected SUCCESSOR for the MAGAZINE ISSUE detail page', () => {
    test('when no SUCCESSOR is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(1))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const data = {partner_node: {type: DataNodeType.MAGAZINE_ISSUE, data: {id: 1, title: "dummy"}}} as MagazineIssueFollowedByIssueRelationship
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(1))
            .toHaveProperty('id', 1)
    })
})
