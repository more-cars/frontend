import {readFileSync} from "fs"
import {dasherize, pluralize} from "inflection"
import {DataNodeType} from "../../data/types/DataNodeType"

type NodeProperty = {
    name: string
    label: string
    is_primary: boolean
    mandatory: boolean
    datatype: string
    example: string
}

export function getNodeProperties(nodeType: DataNodeType) {
    return JSON.parse(
        readFileSync(`${__dirname}/../../data/node-types/${dasherize(pluralize(nodeType.toLowerCase()))}/properties.json`, 'utf-8')
    ) as NodeProperty[]
}
