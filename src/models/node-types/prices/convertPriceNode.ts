import {PriceNode} from "../../../data/node-types/prices/types/PriceNode"
import {Price} from "./types/Price"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertPriceNode(dataNode: PriceNode) {
    const price: Price = {
        type: ModelNodeType.PRICE,
        fields: {
            id: dataNode.data.id,
            price: dataNode.data.price,
            price_year: dataNode.data.price_year,
            currency_code: dataNode.data.currency_code,
            country_code: dataNode.data.country_code,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return price
}
