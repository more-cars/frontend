import type {DataNodeType} from "../../../types/DataNodeType"

export type BookNode = {
    type: DataNodeType.BOOK
    data: {
        id: number
        title: string
        author?: string
        publisher?: string
        year_of_publication?: number
        isbn?: string
        pages?: number
        language?: string
        created_at: string
        updated_at: string
    }
}
