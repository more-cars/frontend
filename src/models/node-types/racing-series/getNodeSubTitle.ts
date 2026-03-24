import type {RacingSeries} from "./types/RacingSeries"

export function getNodeSubTitle(node: RacingSeries) {
    return `${node.short_name} | ${node.founded} - ${node.defunct}`
}
