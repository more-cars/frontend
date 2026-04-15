import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiBrandNode = {
    type: ApiNodeType.BRAND
    id: number
    attributes: {
        name: string
        full_name?: string
        founded?: number
        defunct?: number
        wmi?: string
        hsn?: string
        country_code?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
