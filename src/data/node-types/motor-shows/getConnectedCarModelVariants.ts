import {requestDataFromApi} from "../../requestDataFromApi"
import {getMotorShowById} from "./getMotorShowById"
import type {ApiMotorShowPresentsCarModelVariantRelationship} from "./types/ApiMotorShowPresentsCarModelVariantRelationship"
import type {MotorShowPresentsCarModelVariantRelationship} from "./types/MotorShowPresentsCarModelVariantRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelVariantNode} from "../car-model-variants/types/CarModelVariantNode"

export async function getConnectedCarModelVariants(id: number) {
    const sourceNode = await getMotorShowById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/motor-shows/${id}/presents-car-model-variant`)) as ApiMotorShowPresentsCarModelVariantRelationship
    const data: MotorShowPresentsCarModelVariantRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.MOTOR_SHOW_PRESENTS_CAR_MODEL_VARIANT,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as CarModelVariantNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
