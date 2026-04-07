import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasImageRelationship} from "./types/ApiMotorShowHasImageRelationship"
import type {MotorShowHasImageRelationship} from "./types/MotorShowHasImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
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
            id: apiItem.data.relationship_id,
            name: DataRelationshipType.MOTOR_SHOW_HAS_IMAGE,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data.partner_node) as ImageNode,
            created_at: apiItem.data.created_at,
            updated_at: apiItem.data.updated_at,
        })
    })

    return data
}
