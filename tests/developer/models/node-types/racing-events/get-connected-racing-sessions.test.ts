import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedRacingSessions} from "../../../../../src/models/node-types/racing-events/findConnectedRacingSessions"
import {RacingEventHasRacingSessionRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventHasRacingSessionRelationship"

describe('Collect connected RACING SESSIONS for the RACING EVENT detail page', () => {
    test('when no RACING SESSIONS are connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSessionNodes').mockResolvedValue([])

        expect(await findConnectedRacingSessions(1))
            .toHaveLength(0)
    })

    test('when there are RACING SESSIONS connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSessionNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as RacingEventHasRacingSessionRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as RacingEventHasRacingSessionRelationship,
        ])

        expect(await findConnectedRacingSessions(1))
            .toHaveLength(2)
    })
})
