import {ImageDataFacade} from "../../../data/ImageDataFacade"
import type {CarModel} from "../car-models/types/CarModel"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {convertCarModelNode} from "../car-models/convertCarModelNode"

export async function findConnectedCarModels(id: number) {
    const relations = await ImageDataFacade.getConnectedNodes(id)
    const carModels: CarModel[] = []

    for (const relation of relations) {
        if (relation.partner_node_type === DataNodeType.CAR_MODEL) {
            carModels.push(convertCarModelNode(relation.partner_node))
        }
    }

    return carModels
}
