import {ModelCarBrandNode} from "../../../data/node-types/model-car-brands/types/ModelCarBrandNode"
import {ModelCarBrand} from "./types/ModelCarBrand"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertModelCarBrandNode(dataNode: ModelCarBrandNode) {
    const modelCarBrand: ModelCarBrand = {
        type: ModelNodeType.MODEL_CAR_BRAND,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            founded: dataNode.data.founded || null,
            defunct: dataNode.data.defunct || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return modelCarBrand
}
