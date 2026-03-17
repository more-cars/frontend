import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasImageRelationship} from "./types/ApiMotorShowHasImageRelationship"
import type {MotorShowHasImageRelationship} from "./types/MotorShowHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedImages(id: number) {
    const sourceNode = await getMotorShowById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/motor-shows/${id}/has-image`)).data as ApiMotorShowHasImageRelationship[]
    const data: MotorShowHasImageRelationship[] = []

    apiData.forEach(apiItem => {
        data.push({
            id,
            name: DataRelationshipType.MOTOR_SHOW_HAS_IMAGE,
            source_node: sourceNode,
            source_node_type: DataNodeType.MOTOR_SHOW,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node.data) as ImageNode,
            partner_node_type: DataNodeType.IMAGE,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
