import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/track-layouts/findConnectedMainImage"
import {TrackLayoutHasMainImageRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutHasMainImageRelationship"

describe('Collect connected main IMAGE for the TRACK LAYOUT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {id: 1, name: "dummy"}} as TrackLayoutHasMainImageRelationship
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
