import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedMagazineIssues} from "../../../../../src/models/node-types/racing-events/findConnectedMagazineIssues"
import {RacingEventCoveredByMagazineIssueRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventCoveredByMagazineIssueRelationship"

describe('Collect connected MAGAZINE ISSUES for the RACING EVENT detail page', () => {
    test('when no MAGAZINE ISSUES are connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(0)
    })

    test('when there are MAGAZINE ISSUES connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedMagazineIssueNodes').mockResolvedValue([
            {id: 2, title: "dummy 2", partner_node: {}} as unknown as RacingEventCoveredByMagazineIssueRelationship,
            {id: 3, title: "dummy 3", partner_node: {}} as unknown as RacingEventCoveredByMagazineIssueRelationship,
        ])

        expect(await findConnectedMagazineIssues(1))
            .toHaveLength(2)
    })
})
