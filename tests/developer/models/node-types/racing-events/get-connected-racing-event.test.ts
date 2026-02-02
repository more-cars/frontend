import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedSuccessor} from "../../../../../src/models/node-types/racing-events/findConnectedSuccessor"
import {
    RacingEventIsFollowedByEventRelationship
} from "../../../../../src/data/node-types/racing-events/types/RacingEventIsFollowedByEventRelationship"

describe('Collect connected successor for the RACING EVENT detail page', () => {
    test('when no successor is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(null)

        expect(await findConnectedSuccessor(1))
            .toEqual(null)
    })

    test('when there is a successor connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventIsFollowedByEventRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedSuccessorNode').mockResolvedValue(data)

        expect(await findConnectedSuccessor(1))
            .toHaveProperty('id', 1)
    })
})
