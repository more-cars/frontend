import {ModelNodeType} from "../../../types/ModelNodeType"

export type Brand = {
    type: ModelNodeType.BRAND
    fields: {
        id: number
        name: string
        full_name: string | null
        founded: number | null
        defunct: number | null
        wmi: string | null
        hsn: string | null
        country_code: string | null
        created_at: string
        updated_at: string
    }
}
