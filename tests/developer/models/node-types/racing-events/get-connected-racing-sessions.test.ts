import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedRacingSessions} from "../../../../../src/models/node-types/racing-events/findConnectedRacingSessions"
import {RacingEventHasRacingSessionRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventHasRacingSessionRelationship"
import {FakeRacingSession} from "../../../../_toolbox/fixtures/node-types/FakeRacingSession"

describe('Collect connected RACING SESSIONS for the RACING EVENT detail page', () => {
    test('when no RACING SESSIONS are connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSessionNodes').mockResolvedValue([])

        expect(await findConnectedRacingSessions(12345678))
            .toHaveLength(0)
    })

    test('when there are RACING SESSIONS connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedRacingSessionNodes').mockResolvedValue([
            {id: 12222228, name: "dummy 2", partner_node: FakeRacingSession.data} as unknown as RacingEventHasRacingSessionRelationship,
            {id: 13333338, name: "dummy 3", partner_node: FakeRacingSession.data} as unknown as RacingEventHasRacingSessionRelationship,
        ])

        expect(await findConnectedRacingSessions(12345678))
            .toHaveLength(2)
    })
})
