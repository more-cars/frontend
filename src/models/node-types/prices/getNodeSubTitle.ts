import type {Price} from "./types/Price"

export function getNodeSubTitle(node: Price) {
    return `${node.price_year} | ${node.country_code}`
}
