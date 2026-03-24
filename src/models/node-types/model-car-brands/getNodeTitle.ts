import type {ModelCarBrand} from "./types/ModelCarBrand"

export function getNodeTitle(node: ModelCarBrand) {
    return node.fields.name
}
