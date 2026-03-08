import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/magazines/findConnectedMagazineIssues"
import {MagazineHasIssueRelationship} from "../../../../../src/data/node-types/magazines/types/MagazineHasIssueRelationship"

describe('Collect connected MAGAZINE ISSUES for the MAGAZINE detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MagazineHasIssueRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MagazineHasIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(2)
    })
})
