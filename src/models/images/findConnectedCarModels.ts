import {ImageDataFacade} from "../../data/ImageDataFacade"
import type {CarModelNode} from "../../types/car-models/CarModelNode"

export async function findConnectedCarModels(imageId: number) {
    const allRelations = await ImageDataFacade.getConnectedNodes(imageId)
    if (!allRelations) {
        return []
    }

    const carModels = []
    for (const relation of allRelations) {
        if (relation.data.relationship_partner.node_type === 'car model') {
            carModels.push(relation.data.relationship_partner as CarModelNode)
        }
    }

    return carModels
}
