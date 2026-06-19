import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantPresentedAtMotorShowRelationship} from "./types/ApiCarModelVariantPresentedAtMotorShowRelationship"
import type {CarModelVariantPresentedAtMotorShowRelationship} from "./types/CarModelVariantPresentedAtMotorShowRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {MotorShowNode} from "../motor-shows/types/MotorShowNode"

export async function getConnectedMotorShows(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return []
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/presented-at-motor-show`)) as ApiCarModelVariantPresentedAtMotorShowRelationship
    const data: CarModelVariantPresentedAtMotorShowRelationship[] = []

    apiData.data.forEach(apiItem => {
        data.push({
            id: apiItem.data?.relationship_id,
            name: DataRelationshipType.CAR_MODEL_VARIANT_PRESENTED_AT_MOTOR_SHOW,
            source_node: sourceNode,
            partner_node: convertApiRelationshipNodeToDataNode(apiItem.data?.partner_node || {
                node_type: convertStringToApiNodeType(apiItem.type),
                data: {...apiItem.attributes, id: apiItem.id},
            }) as MotorShowNode,
            created_at: apiItem.data?.created_at,
            updated_at: apiItem.data?.updated_at,
        })
    })

    return data
}
