import type {DataNodeType} from "../../../types/DataNodeType"

export type MagazineNode = {
    type: DataNodeType.MAGAZINE
    data: {
        id: number
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
        created_at: string
        updated_at: string
    }
}
