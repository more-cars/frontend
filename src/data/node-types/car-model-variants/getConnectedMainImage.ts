import {requestDataFromApi} from "../../requestDataFromApi"
import {getCarModelVariantById} from "./getCarModelVariantById"
import type {ApiCarModelVariantHasPrimeImageRelationship} from "./types/ApiCarModelVariantHasPrimeImageRelationship"
import type {CarModelVariantHasMainImageRelationship} from "./types/CarModelVariantHasMainImageRelationship"
import {DataRelationshipType} from "../../types/DataRelationshipType"
import {convertApiRelationshipNodeToDataNode} from "../../lib/convertApiRelationshipNodeToDataNode"
import {convertStringToApiNodeType} from "../../lib/convertStringToApiNodeType"
import type {ImageNode} from "../images/types/ImageNode"

export async function getConnectedMainImage(id: number) {
    const sourceNode = await getCarModelVariantById(id)
    if (!sourceNode) {
        return null
    }

    const apiData = (await requestDataFromApi(`/car-model-variants/${id}/has-prime-image`)) as ApiCarModelVariantHasPrimeImageRelationship
    if (!apiData || !apiData.data) {
        return null
    }

    const relationship: CarModelVariantHasMainImageRelationship = {
        id: apiData.data.data?.relationship_id,
        name: DataRelationshipType.CAR_MODEL_VARIANT_HAS_MAIN_IMAGE,
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
