import {PriceNode} from "../../../data/node-types/prices/types/PriceNode"
import {Price} from "./types/Price"

export function convertPriceNode(dataNode: PriceNode) {
    const price: Price = {
        id: dataNode.id,
        price: dataNode.price,
        price_year: dataNode.price_year,
        currency_code: dataNode.currency_code,
        country_code: dataNode.country_code,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return price
}
