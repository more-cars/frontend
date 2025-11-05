import {describe, expect, test, vi} from "vitest"
import {CarModelDataFacade} from "../../../../src/data/CarModelDataFacade"
import {findConnectedImages} from "../../../../src/models/node-types/car-models/findConnectedImages"
import type {
    CarModelHasImageRelationship
} from "../../../../src/data/node-types/car-models/types/CarModelHasImageRelationship"

describe('Collect connected IMAGES for the CAR MODEL detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(CarModelDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2"} as unknown as CarModelHasImageRelationship,
            {id: 3, name: "dummy 3"} as unknown as CarModelHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
