import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/magazines/findConnectedMagazineIssues"
import {MagazineHasIssueRelationship} from "../../../../../src/data/node-types/magazines/types/MagazineHasIssueRelationship"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"

describe('Collect connected MAGAZINE ISSUES for the MAGAZINE detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeMagazineIssue.data} as unknown as MagazineHasIssueRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeMagazineIssue.data} as unknown as MagazineHasIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(2)
    })
})
