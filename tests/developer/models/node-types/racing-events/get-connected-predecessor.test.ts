import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedPredecessor} from "../../../../../src/models/node-types/racing-events/findConnectedPredecessor"
import {
    RacingEventFollowsEventRelationship
} from "../../../../../src/data/node-types/racing-events/types/RacingEventFollowsEventRelationship"

describe('Collect connected predecessor for the RACING EVENT detail page', () => {
    test('when no predecessor is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(null)

        expect(await findConnectedPredecessor(1))
            .toEqual(null)
    })

    test('when there is a predecessor connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventFollowsEventRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedPredecessorNode').mockResolvedValue(data)

        expect(await findConnectedPredecessor(1))
            .toHaveProperty('id', 1)
    })
})
