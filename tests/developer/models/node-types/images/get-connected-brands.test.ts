import {describe, expect, test, vi} from "vitest"
import {ImageDataFacade} from "../../../../../src/data/ImageDataFacade"
import {findConnectedBrands} from "../../../../../src/models/node-types/images/findConnectedBrands"
import type {
    ImageBelongsToNodeRelationship
} from "../../../../../src/data/node-types/images/types/ImageBelongsToNodeRelationship"
import type {BrandNode} from "../../../../../src/data/node-types/brands/types/BrandNode"
import type {CarModelNode} from "../../../../../src/data/node-types/car-models/types/CarModelNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"

describe('Collect connected BRANDS for the IMAGE detail page', () => {
    test('when no BRANDS are connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([])

        expect(await findConnectedBrands(1))
            .toHaveLength(0)
    })

    test('when there are BRANDS connected', async () => {
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

        expect(await findConnectedBrands(1))
            .toHaveLength(1)
    })
})
