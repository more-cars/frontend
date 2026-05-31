import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiBookNode = {
    type: ApiNodeType.BOOK
    id: number
    attributes: {
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
    links: {
        self: string
    }
}
