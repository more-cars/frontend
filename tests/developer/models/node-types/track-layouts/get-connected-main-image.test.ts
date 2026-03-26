import {describe, expect, test, vi} from "vitest"
import {TrackLayoutDataFacade} from "../../../../../src/data/TrackLayoutDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/track-layouts/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {TrackLayoutHasMainImageRelationship} from "../../../../../src/data/node-types/track-layouts/types/TrackLayoutHasMainImageRelationship"

describe('Collect connected main IMAGE for the TRACK LAYOUT detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(TrackLayoutDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as TrackLayoutHasMainImageRelationship

        vi.spyOn(TrackLayoutDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
