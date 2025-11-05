import {describe, expect, test, vi} from "vitest"
import {ImageDataFacade} from "../../../../src/data/ImageDataFacade"
import {findConnectedCarModels} from "../../../../src/models/node-types/images/findConnectedCarModels"
import type {BrandNode} from "../../../../src/data/node-types/brands/types/BrandNode"
import {DataNodeType} from "../../../../src/data/types/DataNodeType"
import type {
    ImageBelongsToNodeRelationship
} from "../../../../src/data/node-types/images/types/ImageBelongsToNodeRelationship"
import type {CarModelNode} from "../../../../src/data/node-types/car-models/types/CarModelNode"

describe('Collect connected CAR MODELS for the IMAGE detail page', () => {
    test('when no CAR MODELS are connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([])

        expect(await findConnectedCarModels(1))
            .toHaveLength(0)
    })

    test('when there are CAR MODELS connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([
            {
                id: 2,
                name: "dummy 1",
                partner_node: {} as BrandNode,
                partner_node_type: DataNodeType.BRAND,
            } as unknown as ImageBelongsToNodeRelationship,
            {
                id: 2,
                name: "dummy 1",
                partner_node: {} as CarModelNode,
                partner_node_type: DataNodeType.CAR_MODEL,
            } as unknown as ImageBelongsToNodeRelationship,
        ])

        expect(await findConnectedCarModels(1))
            .toHaveLength(1)
    })
})
