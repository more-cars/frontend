import type {ModelCar} from "./types/ModelCar"

export function getNodeSubTitle(node: ModelCar) {
    const scale = node.fields.scale
    const year = node.fields.release_year

    const subtitleParts = []

    if (scale) {
        subtitleParts.push(scale)
    }

    if (year) {
        subtitleParts.push(year)
    }

    return subtitleParts.join(' | ')
}
