import {ordinalize} from "inflection"
import type {CarModel} from "./types/CarModel"

export function getNodeSubTitle(node: CarModel) {
    const builtFrom = node.fields.built_from
    const builtTo = node.fields.built_to
    const generation = node.fields.generation
    const internalCode = node.fields.internal_code

    const subtitle = []

    if (builtFrom && builtTo) {
        subtitle.push(`${builtFrom} - ${builtTo}`)
    }

    if (builtFrom && !builtTo) {
        subtitle.push(`since ${builtFrom}`)
    }

    if (!builtFrom && builtTo) {
        subtitle.push(`until ${builtTo}`)
    }

    if (generation) {
        subtitle.push(`${ordinalize(generation.toString())} generation`)
    }

    if (internalCode) {
        subtitle.push(internalCode)
    }

    return subtitle.join(' | ')
}
