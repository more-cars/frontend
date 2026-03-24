import type {Price} from "./types/Price"

export function getNodeTitle(node: Price) {
    return `${node.price} ${node.currency_code}`
}
