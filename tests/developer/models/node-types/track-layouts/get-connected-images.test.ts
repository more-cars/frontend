import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/track-layouts/findConnectedImages"
import {TrackLayoutHasImageRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutHasImageRelationship"

describe('Collect connected IMAGES for the TRACK LAYOUT detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as TrackLayoutHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as TrackLayoutHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
