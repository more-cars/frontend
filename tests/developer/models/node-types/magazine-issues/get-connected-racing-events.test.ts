import {describe, expect, test, vi} from "vitest"
import {MagazineIssueDataFacade} from "../../../../../src/data/MagazineIssueDataFacade"
import {findConnectedRacingEvents} from "../../../../../src/models/node-types/magazine-issues/findConnectedRacingEvents"
import {MagazineIssueCoversRacingEventRelationship} from "../../../../../src/data/node-types/magazine-issues/types/MagazineIssueCoversRacingEventRelationship"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"

describe('Collect connected RACING EVENTS for the MAGAZINE ISSUE detail page', () => {
    test('when no RACING EVENTS are connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING EVENTS connected', async () => {
        vi.spyOn(MagazineIssueDataFacade, 'getConnectedRacingEventNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingEvent.data} as unknown as MagazineIssueCoversRacingEventRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingEvent.data} as unknown as MagazineIssueCoversRacingEventRelationship,
        ])

        expect(await findConnectedRacingEvents(12345678))
            .toHaveLength(2)
    })
})
