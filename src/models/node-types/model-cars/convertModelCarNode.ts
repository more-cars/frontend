import {ModelCarNode} from "../../../data/node-types/model-cars/types/ModelCarNode"
import {ModelCar} from "./types/ModelCar"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertModelCarNode(dataNode: ModelCarNode) {
    const modelCar: ModelCar = {
        type: ModelNodeType.MODEL_CAR,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            product_code: dataNode.data.product_code || null,
            release_year: dataNode.data.release_year || null,
            scale: dataNode.data.scale || null,
            series: dataNode.data.series || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return modelCar
}
