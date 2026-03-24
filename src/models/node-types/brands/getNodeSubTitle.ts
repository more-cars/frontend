import type {Brand} from "./types/Brand"

export function getNodeSubTitle(node: Brand) {
    return `${node.fields.founded} - ${node.fields.defunct}`
}
