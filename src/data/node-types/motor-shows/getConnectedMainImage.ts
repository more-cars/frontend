import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowHasPrimeImageRelationship} from "./types/ApiMotorShowHasPrimeImageRelationship"
import type {MotorShowHasMainImageRelationship} from "./types/MotorShowHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
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

    const relationship: MotorShowHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.MOTOR_SHOW_HAS_MAIN_IMAGE,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as ImageNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return relationship
}
