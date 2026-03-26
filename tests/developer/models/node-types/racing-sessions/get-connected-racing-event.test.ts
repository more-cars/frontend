import {describe, expect, test, vi} from "vitest"
import {RacingSessionDataFacade} from "../../../../../src/data/RacingSessionDataFacade"
import {findConnectedRacingEvent} from "../../../../../src/models/node-types/racing-sessions/findConnectedRacingEvent"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {RacingSessionBelongsToRacingEventRelationship} from "../../../../../src/data/node-types/racing-sessions/types/RacingSessionBelongsToRacingEventRelationship"

describe('Collect connected RACING EVENT for the RACING SESSION detail page', () => {
    test('when no RACING EVENT is connected', async () => {
        vi.spyOn(RacingSessionDataFacade, 'getConnectedRacingEventNode').mockResolvedValue(null)

        expect(await findConnectedRacingEvent(12345678))
            .toEqual(null)
    })

    test('when there is a RACING EVENT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeRacingEvent.data} as unknown as RacingSessionBelongsToRacingEventRelationship

        vi.spyOn(RacingSessionDataFacade, 'getConnectedRacingEventNode').mockResolvedValue(data)

        expect(await findConnectedRacingEvent(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
