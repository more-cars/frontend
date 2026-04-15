import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiCompanyNode = {
    type: ApiNodeType.COMPANY
    id: number
    attributes: {
        name: string
        founded?: number
        defunct?: number
        headquarters_location?: string
        hq_country_code?: string
        legal_headquarters_location?: string
        legal_hq_country_code?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
