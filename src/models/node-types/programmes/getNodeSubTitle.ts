import type {Programme} from "./types/Programme"

export function getNodeSubTitle(node: Programme) {
    return `${node.aired_from_year} - ${node.aired_until_year}`
}
