import type {DataNodeType} from "../../../types/DataNodeType"

export type BrandNode = {
    type: DataNodeType.BRAND
    data: {
        id: number
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
}
