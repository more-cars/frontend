import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedRacingEvent} from "../../../../../src/models/node-types/racing-sessions/findConnectedRacingEvent"
import {RacingSessionBelongsToRacingEventRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionBelongsToRacingEventRelationship"

describe('Collect connected RACING EVENT for the RACING SESSION detail page', () => {
    test('when no RACING EVENT is connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedRacingEventNode').mockResolvedValue(null)

        expect(await findConnectedRacingEvent(1))
            .toEqual(null)
    })

    test('when there is a RACING EVENT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingSessionBelongsToRacingEventRelationship
        vi.spyOn(RacingSessionDataFacade, 'getConnectedRacingEventNode').mockResolvedValue(data)

        expect(await findConnectedRacingEvent(1))
            .toHaveProperty('id', 1)
    })
})
