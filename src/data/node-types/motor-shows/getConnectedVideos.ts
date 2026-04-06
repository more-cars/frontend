import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasVideoRelationship} from "./types/ApiMotorShowHasVideoRelationship"
import type {MotorShowHasVideoRelationship} from "./types/MotorShowHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {VideoNode} from "../videos/types/VideoNode"

export async function getConnectedVideos(id: number) {
    const sourceNode = await getMotorShowById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/motor-shows/${id}/has-video`)).data as ApiMotorShowHasVideoRelationship[]
    const data: MotorShowHasVideoRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MOTOR_SHOW_HAS_VIDEO,
            source_node: sourceNode,
            source_node_type: DataNodeType.MOTOR_SHOW,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            partner_node_type: DataNodeType.VIDEO,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
