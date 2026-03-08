import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/magazine-issues/findConnectedRacingEvents"
import {MagazineIssueCoversRacingEventRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueCoversRacingEventRelationship"

describe('Collect connected RACING EVENTS for the MAGAZINE ISSUE detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as MagazineIssueCoversRacingEventRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as MagazineIssueCoversRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(1))
            .toHaveLength(2)
    })
})
