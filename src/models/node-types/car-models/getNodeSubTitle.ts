import {ordinalize} from "inflection"
import type {CarModel} from "./types/CarModel"

export function getNodeSubTitle(node: CarModel) {
    let subTitle = `${node.built_from} - ${node.built_to}`

    if (node.generation) {
        subTitle += ` | ${ordinalize(node.generation.toString())} generation`
    }

    subTitle += ` | ${node.internal_code}`

    return subTitle
}
