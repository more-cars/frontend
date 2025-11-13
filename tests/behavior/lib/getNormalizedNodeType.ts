import {dasherize} from "inflection"

export function getNormalizedNodeType(nodeType: string) {
    return dasherize(nodeType.toLowerCase())
}
