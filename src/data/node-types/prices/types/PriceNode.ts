import type {DataNodeType} from "../../../types/DataNodeType"

export type PriceNode = {
    type: DataNodeType.PRICE
    data: {
        id: number
        price: number
        price_year: number
        currency_code: string
        country_code: string
        created_at: string
        updated_at: string
    }
}
