import {describe, expect, test, vi} from "vitest"
import {RacingEventDataFacade} from "../../../../../src/data/RacingEventDataFacade"
import {findConnectedTrackLayout} from "../../../../../src/models/node-types/racing-events/findConnectedTrackLayout"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"
import {RacingEventUsedTheTrackLayoutRelationship} from "../../../../../src/data/node-types/racing-events/types/RacingEventUsedTheTrackLayoutRelationship"

describe('Collect connected TRACK LAYOUT for the RACING EVENT detail page', () => {
    test('when no TRACK LAYOUT is connected', async () => {
        vi.spyOn(RacingEventDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(null)

        expect(await findConnectedTrackLayout(12345678))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeTrackLayout.data} as unknown as RacingEventUsedTheTrackLayoutRelationship

        vi.spyOn(RacingEventDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(data)

        expect(await findConnectedTrackLayout(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
