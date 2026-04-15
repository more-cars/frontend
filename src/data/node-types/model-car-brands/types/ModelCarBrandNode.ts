import type {DataNodeType} from "../../../types/DataNodeType"

export type ModelCarBrandNode = {
    type: DataNodeType.MODEL_CAR_BRAND
    data: {
        id: number
        name: string
        founded?: number
        defunct?: number
        country_code?: string
        created_at: string
        updated_at: string
    }
}
