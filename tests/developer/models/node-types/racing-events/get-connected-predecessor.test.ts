import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/racing-events/findConnectedPredecessor"
import {FakeRacingEvent} from "../../../../_toolbox/fixtures/node-types/FakeRacingEvent"
import {RacingEventFollowsEventRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventFollowsEventRelationship"

describe('Collect connected predecessor for the RACING EVENT detail page', () => {
    test('when no predecessor is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(12345678))
            .toEqual(null)
    })

    test('when there is a predecessor connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeRacingEvent.data} as unknown as RacingEventFollowsEventRelationship

        vi.spyOn(RacingEventDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
