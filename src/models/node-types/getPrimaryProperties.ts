import {dasherize, pluralize} from "inflection"
import {DataNodeType} from "../../data/types/DataNodeType"

export function getPrimaryProperties(nodeType: DataNodeType) {
    const properties: Array<Object> = require(`../../data/node-types/${dasherize(pluralize(nodeType.toLowerCase()))}/properties.json`)
    const primaryProperties = properties.filter((prop: any) => prop.is_primary)

    return primaryProperties.map((prop: any) => prop.name)
}
