import type {Company} from "./types/Company"

export function getNodeSubTitle(node: Company) {
    return `${node.founded} - ${node.defunct}`
}
