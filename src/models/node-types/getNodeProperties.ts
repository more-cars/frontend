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
    const staticProperties: NodeProperty[] = [
        {
            name: "id",
            label: "More Cars ID",
            is_primary: false,
            mandatory: true,
            datatype: "number",
            example: "12345678",
        }, {
            name: "created_at",
            label: "Entry Created",
            is_primary: false,
            mandatory: true,
            datatype: "string",
            example: "2025-12-20",
        }, {
            name: "updated_at",
            label: "Last Updated",
            is_primary: false,
            mandatory: true,
            datatype: "string",
            example: "2025-12-20",
        }
    ]

    const nodeSpecificProperties = JSON.parse(
        readFileSync(`${__dirname}/../../data/node-types/${dasherize(pluralize(nodeType.toLowerCase()))}/properties.json`, 'utf-8')
    ) as NodeProperty[]

    return [...staticProperties].concat(nodeSpecificProperties)
}
