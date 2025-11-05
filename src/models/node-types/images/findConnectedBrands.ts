import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {BrandNode} from "../../../data/node-types/brands/types/BrandNode"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function findConnectedBrands(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const nodes: BrandNode[] = []

    for (const relation of relations) {
        if (relation.partner_node_type === DataNodeType.BRAND) {
            nodes.push(relation.partner_node)
        }
    }

    return nodes
}
