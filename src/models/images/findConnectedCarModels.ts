import {ImageDataFacade} from "../../data/ImageDataFacade"
import type {CarModelNode} from "../car-models/types/CarModelNode"
import {DataNodeType} from "../../data/types/DataNodeType"

export async function findConnectedCarModels(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const nodes: CarModelNode[] = []

    for (const relation of relations) {
        if (relation.partner_node_type === DataNodeType.CAR_MODEL) {
            nodes.push(relation.partner_node)
        }
    }

    return nodes
}
