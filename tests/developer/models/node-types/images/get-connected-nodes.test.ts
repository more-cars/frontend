import {describe, expect, test, vi} from "vitest"
import {ImageDataFacade} from "../../../../../src/data/ImageDataFacade"
import {findConnectedNodes} from "../../../../../src/models/node-types/images/findConnectedNodes"
import type {ImageBelongsToNodeRelationship} from "../../../../../src/data/node-types/images/types/ImageBelongsToNodeRelationship"
import type {BrandNode} from "../../../../../src/data/node-types/brands/types/BrandNode"
import type {CarModelNode} from "../../../../../src/data/node-types/car-models/types/CarModelNode"
import {DataNodeType} from "../../../../../src/data/types/DataNodeType"
import {DataRelationshipType} from "../../../../../src/data/types/DataRelationshipType"
import type {ImageNode} from "../../../../../src/data/node-types/images/types/ImageNode"

describe('Collect connected NDOES for the IMAGE detail page', () => {
    test('when no NODES are connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([])

        expect(await findConnectedNodes(1))
            .toHaveLength(0)
    })

    test('when there are NODES connected', async () => {
        vi.spyOn(ImageDataFacade, 'getConnectedNodes').mockResolvedValue([
            {
                id: 41,
                name: DataRelationshipType.IMAGE_BELONGS_TO_NODE,
                source_node: {} as ImageNode,
                source_node_type: DataNodeType.IMAGE,
                partner_node: {} as BrandNode,
                partner_node_type: DataNodeType.BRAND,
                created_at: "dummy",
                updated_at: "dummy",
            } as ImageBelongsToNodeRelationship,
            {
                id: 42,
                name: DataRelationshipType.IMAGE_BELONGS_TO_NODE,
                source_node: {} as ImageNode,
                source_node_type: DataNodeType.IMAGE,
                partner_node: {} as CarModelNode,
                partner_node_type: DataNodeType.CAR_MODEL,
                created_at: "dummy",
                updated_at: "dummy",
            } as ImageBelongsToNodeRelationship,
        ])

        expect(await findConnectedNodes(1))
            .toHaveLength(2)
    })
})
