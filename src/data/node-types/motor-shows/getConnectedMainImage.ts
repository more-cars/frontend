import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasPrimeImageRelationship} from "./types/ApiMotorShowHasPrimeImageRelationship"
import type {MotorShowHasMainImageRelationship} from "./types/MotorShowHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {DataNodeType} from "../../types/DataNodeType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getMotorShowById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/motor-shows/${id}/has-prime-image`)) as ApiMotorShowHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    if (!apiData || !sourceNode) {
        return null
    }

    const relationship: MotorShowHasMainImageRelationship = {
        id,
        name: DataRelationshipType.MOTOR_SHOW_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        source_node_type: DataNodeType.MOTOR_SHOW,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.partner_node.data) as ImageNode,
        partner_node_type: DataNodeType.IMAGE,
        created_at: apiData.data.created_at,
        updated_at: apiData.data.updated_at,
    }

    return relationship
}
