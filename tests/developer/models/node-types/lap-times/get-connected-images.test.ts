import {describe, expect, test, vi} from "vitest"
import {LapTimeDataFacade} from "../../../../../src/data/LapTimeDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/lap-times/findConnectedImages"
import {LapTimeHasImageRelationship} from "../../../../../src/data/node-types/lap-times/types/LapTimeHasImageRelationship"

describe('Collect connected IMAGES for the LAP TIME detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(LapTimeDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as LapTimeHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as LapTimeHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
