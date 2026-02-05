import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedTrackLayout} from "../../../../../src/models/node-types/lap-times/findConnectedTrackLayout"
import {LapTimeAchievedOnTrackLayoutRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeAchievedOnTrackLayoutRelationship"

describe('Collect connected TRACK LAYOUT for the LAP TIME detail page', () => {
    test('when no TRACK LAYOUT is connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(null)

        expect(await findConnectedTrackLayout(1))
            .toEqual(null)
    })

    test('when there is a TRACK LAYOUT connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as LapTimeAchievedOnTrackLayoutRelationship
        vi.spyOn(LapTimeDataFacade, 'getConnectedTrackLayoutNode').mockResolvedValue(data)

        expect(await findConnectedTrackLayout(1))
            .toHaveProperty('id', 1)
    })
})
