import {ordinalize} from "inflection"
import type {CarModel} from "./types/CarModel"

export function getNodeSubTitle(node: CarModel) {
    let subTitle = `${node.fields.built_from} - ${node.fields.built_to}`

    if (node.fields.generation) {
        subTitle += ` | ${ordinalize(node.fields.generation.toString())} generation`
    }

    subTitle += ` | ${node.fields.internal_code}`

    return subTitle
}
