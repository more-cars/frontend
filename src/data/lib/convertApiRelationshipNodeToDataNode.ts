import {mapApiNodeTypeToDataNodeType} from "./mapApiNodeTypeToDataNodeType"
import type {ApiNodeType} from "../types/ApiNodeType"

export function convertApiRelationshipNodeToDataNode(apiNode: {
    node_type: ApiNodeType
    data: Record<string, string | number | boolean | null>
}) {
    return {
        type: mapApiNodeTypeToDataNodeType(apiNode.node_type),
        data: apiNode.data
    }
}
