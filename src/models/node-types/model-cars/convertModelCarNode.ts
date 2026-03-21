import {ModelCarNode} from "../../../data/node-types/model-cars/types/ModelCarNode"
import {ModelCar} from "./types/ModelCar"

export function convertModelCarNode(dataNode: ModelCarNode) {
    const modelCar: ModelCar = {
        id: dataNode.id,
        name: dataNode.name,
        product_code: dataNode.product_code || null,
        release_year: dataNode.release_year || null,
        scale: dataNode.scale || null,
        series: dataNode.series || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return modelCar
}
