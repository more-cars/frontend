import {CarModelNode} from "../../../data/node-types/car-models/types/CarModelNode"
import {CarModel} from "./types/CarModel"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertCarModelNode(dataNode: CarModelNode) {
    const carModel: CarModel = {
        type: ModelNodeType.CAR_MODEL,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            generation: dataNode.data.generation || null,
            internal_code: dataNode.data.internal_code || null,
            built_from: dataNode.data.built_from || null,
            built_to: dataNode.data.built_to || null,
            total_production: dataNode.data.total_production || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return carModel
}
