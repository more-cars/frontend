import {getConnectedNodes} from "../../data/images/getConnectedNodes"
import type {CarModelNode} from "../../types/car-models/CarModelNode"

export async function findConnectedCarModels(imageId: number) {
    const allRelations = await getConnectedNodes(imageId)
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
