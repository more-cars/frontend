import {ModelNodeType} from "../../../types/ModelNodeType"

export type Company = {
    type: ModelNodeType.COMPANY
    fields: {
        id: number
        name: string
        founded: number | null
        defunct: number | null
        headquarters_location: string | null
        hq_country_code: string | null
        legal_headquarters_location: string | null
        legal_hq_country_code: string | null
        created_at: string
        updated_at: string
    }
}
