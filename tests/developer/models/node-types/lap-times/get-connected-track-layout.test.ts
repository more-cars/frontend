import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedTrackLayout} from "../../../../../src/models/node-types/lap-times/findConnectedTrackLayout"
import {FakeTrackLayout} from "../../../../_toolbox/fixtures/node-types/FakeTrackLayout"
import {LapTimeAchievedOnTrackLayoutRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeAchievedOnTrackLayoutRelationship"

describe('Collect connected TRACK LAYOUT for the LAP TIME detail page', () => {
    test('when no TRACK LAYOUT is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(null)

        expect(await findConnectedTrackLayout(12345678))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeTrackLayout.data} as unknown as LapTimeAchievedOnTrackLayoutRelationship

        vi.spyOn(LapTimeDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(data)

        expect(await findConnectedTrackLayout(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
