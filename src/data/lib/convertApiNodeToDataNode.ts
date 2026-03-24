import type {ApiNode} from "../nodes/types/ApiNode"
import {mapApiNodeTypeToDataNodeType} from "./mapApiNodeTypeToDataNodeType"
import type {DataNode} from "../types/DataNode"

export function convertApiNodeToDataNode(apiNode: ApiNode) {
    return {
        type: mapApiNodeTypeToDataNodeType(apiNode.type),
        data: Object.assign({}, apiNode.attributes, {id: apiNode.id})
    } as DataNode
}
