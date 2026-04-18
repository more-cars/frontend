import {readFileSync} from "fs"
import type {ControllerNodeType} from "../controllers/types/ControllerNodeType"

type NodeProperty = {
    name: string
    label: string
    is_primary: boolean
    mandatory: boolean
    datatype: string
    example: string
}

export function getNodeProperties(nodeType: ControllerNodeType) {
    let nodeProperties: NodeProperty[] = []

    const nodeSpecificProperties = JSON.parse(
        readFileSync(`${__dirname}/node-types/${nodeType}-properties.json`, 'utf-8')
    ) as NodeProperty[]

    nodeProperties = [...nodeProperties].concat(nodeSpecificProperties)

    nodeProperties.push({
        name: "id",
        label: "More Cars ID",
        is_primary: false,
        mandatory: true,
        datatype: "number",
        example: "12345678",
    })
    nodeProperties.push({
        name: "created_at",
        label: "Entry Created",
        is_primary: false,
        mandatory: true,
        datatype: "string",
        example: "2025-12-20",
    })
    nodeProperties.push({
        name: "updated_at",
        label: "Last Updated",
        is_primary: false,
        mandatory: true,
        datatype: "string",
        example: "2025-12-20",
    })

    return nodeProperties
}
