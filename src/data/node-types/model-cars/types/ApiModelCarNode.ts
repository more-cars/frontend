import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiModelCarNode = {
    type: ApiNodeType.MODEL_CAR
    id: number
    attributes: {
        name: string
        product_code?: string
        release_year?: number
        scale?: string
        series?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
