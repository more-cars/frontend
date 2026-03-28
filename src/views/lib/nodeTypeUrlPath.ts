import {dasherize, pluralize} from "inflection"

export function nodeTypeUrlPath(nodeType: string) {
    return dasherize(pluralize(nodeType.toLowerCase()))
}
