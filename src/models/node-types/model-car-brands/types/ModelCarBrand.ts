import {ModelNodeType} from "../../../types/ModelNodeType"

export type ModelCarBrand = {
    type: ModelNodeType.MODEL_CAR_BRAND
    fields: {
        id: number
        name: string
        founded: number | null
        defunct: number | null
        created_at: string
        updated_at: string
    }
}
