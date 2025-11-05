import {BrandDataFacade} from "../../../data/BrandDataFacade"
import type {CarModelNode} from "../car-models/types/CarModelNode"

export async function findConnectedCarModels(id: number) {
    const relations = await BrandDataFacade.getConnectedCarModelNodes(id)
    const nodes: CarModelNode[] = []

    for (const relation of relations) {
        nodes.push(relation.partner_node)
    }

    return nodes
}
