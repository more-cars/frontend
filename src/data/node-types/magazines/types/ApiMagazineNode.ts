import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiMagazineNode = {
    type: ApiNodeType.MAGAZINE
    id: number
    attributes: {
        name: string
        founded?: number
        defunct?: number
        focus?: string
        publication_frequency?: string
        single_copy_price?: number
        single_copy_price_unit?: string
        publication_format?: string
        circulation?: number
        circulation_year?: number
        publisher?: string
        issn?: string
        country_code?: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
