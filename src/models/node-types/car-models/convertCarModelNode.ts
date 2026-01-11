import {CarModelNode} from "../../../data/node-types/car-models/types/CarModelNode"
import {CarModel} from "./types/CarModel"

export function convertCarModelNode(dataNode: CarModelNode) {
    const carModel: CarModel = {
        id: dataNode.id,
        name: dataNode.name,
        generation: dataNode.generation || null,
        internal_code: dataNode.internal_code || null,
        built_from: dataNode.built_from || null,
        built_to: dataNode.built_to || null,
        total_production: dataNode.total_production || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return carModel
}
