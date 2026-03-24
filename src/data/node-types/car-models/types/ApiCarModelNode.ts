import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiCarModelNode = {
    type: ApiNodeType.CAR_MODEL
    id: number
    attributes: {
        name: string
        generation?: number
        internal_code?: string
        built_from?: number
        built_to?: number
        total_production?: number
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
