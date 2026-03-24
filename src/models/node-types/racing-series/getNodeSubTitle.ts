import type {RacingSeries} from "./types/RacingSeries"

export function getNodeSubTitle(node: RacingSeries) {
    return `${node.fields.short_name} | ${node.fields.founded} - ${node.fields.defunct}`
}
