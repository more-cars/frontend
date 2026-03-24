import type {Programme} from "./types/Programme"

export function getNodeSubTitle(node: Programme) {
    return `${node.fields.aired_from_year} - ${node.fields.aired_until_year}`
}
