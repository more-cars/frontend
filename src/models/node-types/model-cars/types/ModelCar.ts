import {ModelNodeType} from "../../../types/ModelNodeType"

export type ModelCar = {
    type: ModelNodeType.MODEL_CAR
    fields: {
        id: number
        name: string
        product_code: string | null
        release_year: number | null
        scale: string | null
        series: string | null
        created_at: string
        updated_at: string
    }
}
