import type {Brand} from "./types/Brand"

export function getNodeTitle(node: Brand) {
    return node.fields.name
}
