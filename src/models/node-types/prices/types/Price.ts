import {ModelNodeType} from "../../../types/ModelNodeType"

export type Price = {
    type: ModelNodeType.PRICE
    fields: {
        id: number
        price: number
        price_year: number
        currency_code: string
        country_code: string
        created_at: string
        updated_at: string
    }
}
