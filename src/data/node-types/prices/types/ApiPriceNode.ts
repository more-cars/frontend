import type {ApiNodeType} from "../../../types/ApiNodeType"

export type ApiPriceNode = {
    type: ApiNodeType.PRICE
    id: number
    attributes: {
        price: number
        price_year: number
        currency_code: string
        country_code: string
        created_at: string
        updated_at: string
    }
    links: {
        self: string
    }
}
