import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {CarModel} from "../car-models/types/CarModel"
import {DataNodeType} from "../../../data/types/DataNodeType"

export async function findConnectedCarModels(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const nodes: CarModel[] = []

    for (const relation of relations) {
        if (relation.partner_node_type === DataNodeType.CAR_MODEL) {
            nodes.push(relation.partner_node)
        }
    }

    return nodes
}
