import type {Price} from "./types/Price"
import {formatPrice} from "../../../controllers/lib/formatPrice"

export function getNodeTitle(node: Price) {
    return formatPrice(node.fields.price, node.fields.currency_code)
}
