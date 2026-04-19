import {pluralize} from "inflection"

export function getNodeTypeLabelPlural(nodeType: string) {
    return pluralize(nodeType.toLowerCase().replaceAll('-', ' '))
}
