import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasVideoRelationship} from "./types/ApiMotorShowHasVideoRelationship"
import type {MotorShowHasVideoRelationship} from "./types/MotorShowHasVideoRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as VideoNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
