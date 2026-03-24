import {mapApiNodeTypeToDataNodeType} from "./mapApiNodeTypeToDataNodeType"
import type {ApiNodeType} from "../types/ApiNodeType"

export function convertApiRelationshipNodeToDataNode(apiNode: {
    node_type: ApiNodeType
    data: {
        [key: string]: string | number | boolean | null
        created_at: string
        updated_at: string
    }
}) {
    return {
        type: mapApiNodeTypeToDataNodeType(apiNode.node_type),
        data: apiNode.data
    }
}
