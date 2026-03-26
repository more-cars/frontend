import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/magazines/findConnectedMainImage"
import {FakeImage} from "../../../../_toolbox/fixtures/node-types/FakeImage"
import {MagazineHasMainImageRelationship} from "../../../../../src/data/node-types/magazines/types/MagazineHasMainImageRelationship"

describe('Collect connected main IMAGE for the MAGAZINE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(12345678))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {id: 11111118, name: "dummy", partner_node: FakeImage.data} as unknown as MagazineHasMainImageRelationship

        vi.spyOn(MagazineDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(12345678))
            .toHaveProperty('fields.id', data.partner_node.data.id)
    })
})
