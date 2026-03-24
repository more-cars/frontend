import {describe, expect, test, vi} from "vitest"
import {MagazineDataFacade} from "../../../../../src/data/MagazineDataFacade"
import {findConnectedMainImage} from "../../../../../src/models/node-types/magazines/findConnectedMainImage"
import {MagazineHasMainImageRelationship} from "../../../../../src/data/node-types/magazines/types/MagazineHasMainImageRelationship"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected main IMAGE for the MAGAZINE detail page', () => {
    test('when no main IMAGE is connected', async () => {
        vi.spyOn(MagazineDataFacade, 'getConnectedMainImageNode').mockResolvedValue(null)

        expect(await findConnectedMainImage(1))
            .toEqual(null)
    })

    test('when there is a main IMAGE connected', async () => {
        const data = {partner_node: {type: DataNodeType.IMAGE, data: {id: 1, name: "dummy"}}} as MagazineHasMainImageRelationship
        vi.spyOn(MagazineDataFacade, 'getConnectedMainImageNode').mockResolvedValue(data)

        expect(await findConnectedMainImage(1))
            .toHaveProperty('id', 1)
    })
})
