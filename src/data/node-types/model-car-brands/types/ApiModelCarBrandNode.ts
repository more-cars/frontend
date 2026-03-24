import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiModelCarBrandNode = {
    type: ApiNodeType.MODEL_CAR_BRAND
    id: number
    attributes: {
        name: string
        founded?: number
        defunct?: number
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
