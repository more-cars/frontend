import {describe, expect, test, vi} from "vitest"
import {ModelCarDataFacade} from "../../../../../src/data/ModelCarDataFacade"
import {findConnectedImages} from "../../../../../src/models/node-types/model-cars/findConnectedImages"
import {ModelCarHasImageRelationship} from "../../../../../src/data/node-types/model-cars/types/ModelCarHasImageRelationship"

describe('Collect connected IMAGES for the MODEL CAR detail page', () => {
    test('when no IMAGES are connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedImageNodes').mockResolvedValue([])

        expect(await findConnectedImages(1))
            .toHaveLength(0)
    })

    test('when there are IMAGES connected', async () => {
        vi.spyOn(ModelCarDataFacade, 'getConnectedImageNodes').mockResolvedValue([
            {id: 2, name: "dummy 2", partner_node: {}} as unknown as ModelCarHasImageRelationship,
            {id: 3, name: "dummy 3", partner_node: {}} as unknown as ModelCarHasImageRelationship,
        ])

        expect(await findConnectedImages(1))
            .toHaveLength(2)
    })
})
