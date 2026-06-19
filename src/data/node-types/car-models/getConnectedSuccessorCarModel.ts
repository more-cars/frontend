import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelById} from "./getCarModelById"
import {ApiCarModelHasSuccessorRelationship} from "./types/ApiCarModelHasSuccessorRelationship"
import {CarModelHasSuccessorRelationship} from "./types/CarModelHasSuccessorRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {CarModelNode} from "./types/CarModelNode"

export async function getConnectedSuccessorCarModel(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-successor`)) as ApiCarModelHasSuccessorRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const data: CarModelHasSuccessorRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.CAR_MODEL_HAS_SUCCESSOR,
        source_node: sourceNode,
        partner_node: convertApiRelationshipNodeToDataNode(apiData.data.data?.partner_node || {
            node_type: convertStringToApiNodeType(apiData.data.type),
            data: {...apiData.data.attributes, id: apiData.data.id},
        }) as CarModelNode,
        created_at: apiData.data.data?.created_at,
        updated_at: apiData.data.data?.updated_at,
    }

    return data
}
