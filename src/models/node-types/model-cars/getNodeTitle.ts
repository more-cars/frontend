import type {ModelCar} from "./types/ModelCar"

export function getNodeTitle(node: ModelCar) {
    return node.fields.name
}
