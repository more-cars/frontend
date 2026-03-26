import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/racing-events/findConnectedMagazineIssues"
import {RacingEventCoveredByMagazineIssueRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventCoveredByMagazineIssueRelationship"
import {FakeMagazineIssue} from "../../../../_toolbox/fixtures/node-types/FakeMagazineIssue"

describe('Collect connected MAGAZINE ISSUES for the RACING EVENT detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 12222228, title: "dummy 2", partner_node: FakeMagazineIssue.data} as unknown as RacingEventCoveredByMagazineIssueRelationship,
            {id: 13333338, title: "dummy 3", partner_node: FakeMagazineIssue.data} as unknown as RacingEventCoveredByMagazineIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(12345678))
            .toHaveLength(2)
    })
})
