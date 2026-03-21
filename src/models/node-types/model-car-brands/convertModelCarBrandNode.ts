import {ModelCarBrandNode} from "../../../data/node-types/model-car-brands/types/ModelCarBrandNode"
import {ModelCarBrand} from "./types/ModelCarBrand"

export function convertModelCarBrandNode(dataNode: ModelCarBrandNode) {
    const modelCarBrand: ModelCarBrand = {
        id: dataNode.id,
        name: dataNode.name,
        founded: dataNode.founded || null,
        defunct: dataNode.defunct || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return modelCarBrand
}
