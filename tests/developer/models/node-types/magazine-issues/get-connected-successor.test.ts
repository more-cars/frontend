import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/magazine-issues/findConnectedSuccessor"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"
import {MagazineIssueFollowedByIssueRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueFollowedByIssueRelationship"

describe('Collect connected SUCCESSOR for the MAGAZINE ISSUE detail page', () => {
    test('when no SUCCESSOR is connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a SUCCESSOR connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeMagazineIssue.data} as unknown as MagazineIssueFollowedByIssueRelationship

        vi.spyOn(MagazineIssueDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
