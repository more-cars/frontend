import {describe, expect, test, vi} from "vitest"
import {PriceDataFacade} from "../../../../../src/data/PriceDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/prices/findConnectedImages"
import {PriceHasImageRelationship} from "../../../../../src/data/node-types/prices/types/PriceHasImageRelationship"

describe('Collect connected IMAGES for the PRICE detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(PriceDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as PriceHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as PriceHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
