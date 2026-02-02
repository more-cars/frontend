import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedTrackLayout} from "../../../../../src/models/node-types/racing-events/findConnectedTrackLayout"
import {RacingEventUsedTheTrackLayoutRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventUsedTheTrackLayoutRelationship"

describe('Collect connected TRACK LAYOUT for the RACING EVENT detail page', () => {
    test('when no TRACK LAYOUT is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(null)

        expect(await findConnectedTrackLayout(1))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as RacingEventUsedTheTrackLayoutRelationship
        vi.spyOn(RacingEventDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(data)

        expect(await findConnectedTrackLayout(1))
            .toHaveProperty('id', 1)
    })
})
