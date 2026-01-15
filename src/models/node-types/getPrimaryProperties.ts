import {readFileSync} from "fs"
import {dasherize, pluralize} from "inflection"
import {DataNodeType} from "../../data/types/DataNodeType"

type NodeProperties = {
    name: string
    is_primary: boolean
    mandatory: boolean
    datatype: string
    example: string
}[]

export function getPrimaryProperties(nodeType: DataNodeType) {
    const allProperties = JSON.parse(
        readFileSync(`${__dirname}/../../data/node-types/${dasherize(pluralize(nodeType.toLowerCase()))}/properties.json`, 'utf-8')
    ) as NodeProperties

    const primaryProperties = allProperties.filter(
        prop => prop.is_primary
    )

    return primaryProperties.map(
        prop => prop.name
    )
}
