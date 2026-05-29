import {requestDataFromApi} from "../../requestDataFromApi"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import type {ApiCarModelHasPrimeImageRelationship} from "./types/ApiCarModelHasPrimeImageRelationship"
import {getCarModelById} from "./getCarModelById"
import type {CarModelHasMainImageRelationship} from "./types/CarModelHasMainImageRelationship"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../../../tests/_toolbox/convertStringToNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getCarModelById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-models/${id}/has-prime-image`)) as ApiCarModelHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: CarModelHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.CAR_MODEL_HAS_MAIN_IMAGE,
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
