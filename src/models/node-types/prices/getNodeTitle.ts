import type {Price} from "./types/Price"

export function getNodeTitle(node: Price) {
    return `${node.fields.price} ${node.fields.currency_code}`
}
