import type {Price} from "./types/Price"

export function getNodeSubTitle(node: Price) {
    return `${node.fields.price_year} | ${node.fields.country_code}`
}
