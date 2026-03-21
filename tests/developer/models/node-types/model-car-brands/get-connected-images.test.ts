import {describe, expect, test, vi} from "vitest"
import {ModelCarBrandDataFacade} from "../../../../../src/data/ModelCarBrandDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/model-car-brands/findConnectedImages"
import {ModelCarBrandHasImageRelationship} from "../../../../../src/data/node-types/model-car-brands/types/ModelCarBrandHasImageRelationship"

describe('Collect connected IMAGES for the MODEL CAR BRAND detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(ModelCarBrandDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ModelCarBrandHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ModelCarBrandHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
