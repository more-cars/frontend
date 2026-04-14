import type {Price} from "./types/Price"

export function getNodeSubTitle(node: Price) {
    const year = node.fields.price_year
    const countryCode = node.fields.country_code
    const subtitleParts = []

    if (year) {
        subtitleParts.push(year)
    }

    if (countryCode && countryCode !== '--') {
        subtitleParts.push(countryCode)
    }

    return subtitleParts.join(' | ')
}
