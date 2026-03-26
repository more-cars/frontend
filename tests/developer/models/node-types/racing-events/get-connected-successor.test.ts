import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/racing-events/findConnectedSuccessor"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {RacingEventIsFollowedByEventRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventIsFollowedByEventRelationship"

describe('Collect connected successor for the RACING EVENT detail page', () => {
    test('when no successor is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(12345678))
            .toEqual(null)
    })

    test('when there is a successor connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeRacingEvent.data} as unknown as RacingEventIsFollowedByEventRelationship

        vi.spyOn(RacingEventDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
